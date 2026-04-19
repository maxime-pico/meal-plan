/**
 * Simple local server for the meal plan app.
 * Run with: node server.js
 * Then open: http://localhost:3000
 *
 * Serves static files AND handles saving/loading calendar-state.json
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const PORT = process.env.PORT || 4321;
const DIR = __dirname;
const STATE_FILE = path.join(DIR, 'calendar-state.json');
const SHOPPING_STATE_FILE = path.join(DIR, 'shopping-state.json');
const BRING_IMPORT_FILE = path.join(DIR, 'bring-import.json');
const AUTH_TOKEN = process.env.AUTH_TOKEN || null;
const MAX_BODY = 100 * 1024; // 100 KB

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.css':  'text/css',
  '.ico':  'image/x-icon',
};

const server = http.createServer((req, res) => {
  // CORS headers
  const origin = req.headers.origin;
  const appOrigin = process.env.APP_ORIGIN || 'http://localhost:4321';
  const allowed = [appOrigin, 'https://web.getbring.com'];
  if (origin && allowed.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  const requestedHeaders = req.headers['access-control-request-headers'];
  res.setHeader('Access-Control-Allow-Headers', requestedHeaders || 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204); res.end(); return;
  }

  // GET /config — exposes non-secret client config (auth token for POST calls)
  if (req.method === 'GET' && req.url === '/config') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ authToken: AUTH_TOKEN || null }));
    return;
  }

  // GET /lan-ip — only available when not deployed (no AUTH_TOKEN set)
  if (req.method === 'GET' && req.url === '/lan-ip') {
    if (AUTH_TOKEN) { res.writeHead(404); res.end('Not found'); return; }
    const nets = os.networkInterfaces();
    let lanIp = null;
    for (const iface of Object.values(nets)) {
      for (const addr of iface) {
        if (addr.family === 'IPv4' && !addr.internal) { lanIp = addr.address; break; }
      }
      if (lanIp) break;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ip: lanIp }));
    return;
  }

  function readBody(req, res, cb) {
    let body = '';
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > MAX_BODY) {
        res.writeHead(413, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'Payload too large' }));
        req.destroy();
        return;
      }
      body += chunk;
    });
    req.on('end', () => cb(body));
  }

  function checkAuth(req, res) {
    if (!AUTH_TOKEN) return true;
    const header = req.headers['authorization'] || '';
    if (header === `Bearer ${AUTH_TOKEN}`) return true;
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: false, error: 'Unauthorized' }));
    return false;
  }

  function saveJson(file, body, res) {
    try {
      JSON.parse(body);
      fs.writeFileSync(file, body, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: e.message }));
    }
  }

  // POST /save-state — write calendar-state.json
  if (req.method === 'POST' && req.url === '/save-state') {
    if (!checkAuth(req, res)) return;
    readBody(req, res, body => saveJson(STATE_FILE, body, res));
    return;
  }

  // POST /save-shopping-state — write shopping-state.json
  if (req.method === 'POST' && req.url === '/save-shopping-state') {
    if (!checkAuth(req, res)) return;
    readBody(req, res, body => saveJson(SHOPPING_STATE_FILE, body, res));
    return;
  }

  // POST /save-bring-import — write bring-import.json for the Bring widget
  if (req.method === 'POST' && req.url === '/save-bring-import') {
    if (!checkAuth(req, res)) return;
    readBody(req, res, body => saveJson(BRING_IMPORT_FILE, body, res));
    return;
  }

  // GET everything else — serve static files
  const urlPath = req.url.split('?')[0];
  let filePath = path.join(DIR, urlPath === '/' ? '/index.html' : urlPath);
  // prevent directory traversal
  if (!filePath.startsWith(DIR)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  const ext = path.extname(filePath);
  const mime = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404); res.end('Not found: ' + req.url);
      } else {
        res.writeHead(500); res.end('Server error');
      }
      return;
    }
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n🍽️  Meal plan server running at http://localhost:${PORT}`);
  console.log(`   Open http://localhost:${PORT}/meal-rotation-calendar.html`);
  console.log(`   Open http://localhost:${PORT}/shopping-list-generator.html`);
  console.log(`\n   Press Ctrl+C to stop.\n`);
});
