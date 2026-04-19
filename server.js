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

  // GET /lan-ip — return local network IP for QR code
  if (req.method === 'GET' && req.url === '/lan-ip') {
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

  // POST /save-state — write calendar-state.json
  if (req.method === 'POST' && req.url === '/save-state') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        JSON.parse(body); // validate JSON before writing
        fs.writeFileSync(STATE_FILE, body, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  // POST /save-shopping-state — write shopping-state.json
  if (req.method === 'POST' && req.url === '/save-shopping-state') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        JSON.parse(body);
        fs.writeFileSync(SHOPPING_STATE_FILE, body, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  // POST /save-bring-import — write bring-import.json for the Bring widget
  if (req.method === 'POST' && req.url === '/save-bring-import') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        JSON.parse(body);
        fs.writeFileSync(BRING_IMPORT_FILE, body, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
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
