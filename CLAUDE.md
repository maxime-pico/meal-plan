# Meal Plan Project

A local web app for a family of 2 adults + newborn to plan 12-day dinner rotations and generate per-trip shopping lists.

## How to run

```bash
node server.js
```

Then open **http://localhost:4321** in the browser.

The server does two things:
- Serves all static files (HTML, JS, JSON)
- Accepts `POST /save-state` to write `calendar-state.json`

## File structure

```
meal plan/
├── server.js                    # Local Node.js server (no npm install needed)
├── data.js                      # All recipe, staple, and household data — edit this to add/change recipes
├── meal-rotation-calendar.html  # 12-day drag-and-drop dinner calendar
├── shopping-list-generator.html # Shopping list for a selected 3-day trip
├── calendar-state.json          # Auto-generated — saves the current calendar rotation
└── index.html                   # Landing page linking to both tools
```

## Architecture

- **data.js** is the single source of truth. It sets `window.MEAL_DATA` and is loaded by both HTML files via `<script src="data.js">`.
- **meal-rotation-calendar.html** reads `MEAL_DATA`, lets the user drag recipes into a 12-day rotation, and `POST /save-state` on every change to persist `calendar-state.json`.
- **shopping-list-generator.html** fetches `calendar-state.json` on load to get the current rotation, then consolidates ingredients for the selected 3-day trip. Falls back to the default `data.js` order if no saved state exists.

## Data model (data.js)

### Recipes
```js
{
  id: 1,                    // unique, never reuse
  name: "Pasta Pomodoro",
  emoji: "🍝",
  hasTomato: true,          // used to space tomato dishes apart in the rotation
  isCheat: false,           // true = no cooking (order food / not at home), no ingredients
  inRotation: true,         // true = starts in the 12-day calendar; false = starts in the bench
  ingredients: {
    "Fresh Produce":   [{ name: "Onion", quantity: "1" }],
    "Pantry & Canned": [{ name: "Canned tomatoes", quantity: "2 cans" }]
  }
}
```

**Ingredient categories:** `Fresh Produce`, `Refrigerated`, `Pantry & Canned`, `Bread & Grains`, `Dairy & Cheese`

**Cheat nights** (IDs 101–104): `isCheat: true`, always stay on the bench, `ingredients: {}`.

### Staples
```js
{ category: "Lunch", emoji: "🥪", items: [{ name: "Eggs", quantity: "check stock", inList: true }] }
```
`inList: true` = appears on every shopping list. `inList: false` = hidden.

### Household
Same shape as staples. Rendered as `"Category (check stock)"` in the shopping list.

## Family context

- M (husband) + wife (breastfeeding) + newborn
- Mostly vegetarian. Meat only in carbonara (ID 18).
- Goal: shop every 3 days using the 12-day rotation → 4 shopping trips
- Tomato-heavy dishes must be spaced (no back-to-back). The randomize button enforces this.
- Pumpkin-Red Lentil Soup skipped for now (out of season) — set `inRotation: false` in data.js.
- Uses Bring! app for shopping — the "Send to Bring!" button saves unchecked items to `bring-import.json` via the Bring widget and imports them directly into the app.

## Common tasks

**Add a new recipe:** Add a new object to the `recipes` array in `data.js`. Give it a unique `id`. Set `inRotation: true` to start it in the calendar or `false` to put it on the bench.

**Remove a recipe from rotation without deleting it:** Set `inRotation: false` in `data.js`.

**Add a staple item:** Add to the relevant `items` array in the `staples` section of `data.js`. Set `inList: true`.

**Change the port:** Edit the `PORT` constant at the top of `server.js` (currently `4321`).

**Reset the calendar to data.js defaults:** Delete `calendar-state.json`. The shopping list will fall back to the default order.
