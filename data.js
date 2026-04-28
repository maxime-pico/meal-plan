// =============================================================================
// MEAL PLAN DATA
// Edit this file to add, remove, or change recipes, staples, and household items.
// Both meal-rotation-calendar.html and shopping-list-generator.html load from here.
// =============================================================================

window.MEAL_DATA = {

  // ---------------------------------------------------------------------------
  // RECIPES
  // Each recipe needs:
  //   id         — unique number (don't reuse)
  //   name       — display name
  //   emoji      — one emoji for the card
  //   hasTomato  — true if the dish is tomato-based (used for spacing in rotation)
  //   ingredients — object grouped by shopping category:
  //                 each entry is { name, quantity }
  //                 quantity can be a string like "2 cans", "to taste", "check stock"
  //
  // Categories available:
  //   "Fresh Produce", "Refrigerated", "Pantry & Canned",
  //   "Bread & Grains", "Dairy & Cheese"
  //   (Herbs & Spices can be listed under Pantry & Canned)
  // ---------------------------------------------------------------------------

  recipes: [

    // -- DEFAULT ROTATION (12 dishes shown in the calendar) -------------------

    {
      id: 1,
      name: "Mushroom Risotto",
      tag: "Mushroom Risotto",
      emoji: "🍚",
      hasTomato: false,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Onions",                   quantity: "1" },
          { name: "Fresh mushrooms",           quantity: "400g" },
          { name: "Fresh or frozen parsley",   quantity: "1 bunch" }
        ],
        "Pantry & Canned": [
          { name: "Risotto rice",              quantity: "300g" },
          { name: "Vegetable broth",           quantity: "1L" },
          { name: "Dried porcini mushrooms",   quantity: "small pack" },
          { name: "Olive oil",                 quantity: "check stock" }
        ],
        "Dairy & Cheese": [
          { name: "Butter",                    quantity: "check stock" },
          { name: "Parmesan",                  quantity: "check stock" },
          { name: "Pecorino",                  quantity: "check stock" },
          ],
         "Beverages": [
          { name: "White Wine",                quantity: "10mL" }
         ]
      }
    },

    {
      id: 2,
      name: "Shakshuka",
      tag: "Shakshuka",
      emoji: "🍳",
      hasTomato: true,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Onions",                    quantity: "1" },
          { name: "Red bell peppers",          quantity: "1" },
          { name: "Garlic cloves",             quantity: "2" },
          { name: "Fresh parsley",             quantity: "1 bunch" }
        ],
        "Pantry & Canned": [
          { name: "Canned peeled tomatoes",    quantity: "2 cans" },
          { name: "Olive oil",                 quantity: "check stock" },
          { name: "Cumin",                     quantity: "check stock" },
          { name: "Paprika",                   quantity: "check stock" },
          { name: "Cayenne pepper",            quantity: "check stock" }
        ],
        "Refrigerated": [
          { name: "Eggs",                      quantity: "6" }
        ]
      }
    },

    {
      id: 3,
      name: "Lemon Herb Orzo with Asparagus, Peas & Feta",
      tag: "Lemon Orzo",
      emoji: "🍋",
      hasTomato: false,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Onions",                    quantity: "1" },
          { name: "Asparagus",                 quantity: "1 bunch" },
          { name: "Fresh mint",                quantity: "handful" },
          { name: "Lemons",                    quantity: "1" }
        ],
        "Pantry & Canned": [
          { name: "Orzo / Risoni pasta",       quantity: "250g" },
          { name: "Peas (fresh or frozen)",    quantity: "150g" },
          { name: "Pine nuts (optional)",      quantity: "handful" },
          { name: "Olive oil",                 quantity: "check stock" }
        ],
        "Dairy & Cheese": [
          { name: "Feta",                      quantity: "200g" }
        ]
      }
    },

    {
      id: 4,
      name: "Chili sin Carne",
      tag: "Chili",
      emoji: "🌶️",
      hasTomato: true,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Onions",                    quantity: "1" },
          { name: "Bell peppers",              quantity: "1" },
          { name: "Garlic cloves",             quantity: "2" },
          { name: "Fresh mushrooms",           quantity: "400g" }
        ],
        "Pantry & Canned": [
          { name: "Kidney beans (canned)",     quantity: "1 can" },
          { name: "Smoked tofu",               quantity: "200g" },
          { name: "Corn",                      quantity: "50g" },
          { name: "Canned chopped tomatoes",   quantity: "2 cans" },
          { name: "Olive oil",                 quantity: "check stock" },
          { name: "Cumin",                     quantity: "check stock" },
          { name: "Paprika",                   quantity: "check stock" },
          { name: "Chili powder",              quantity: "check stock" },
          { name: "Rice",                      quantity: "200g" }
        ]
      }
    },

    {
      id: 5,
      name: "Spaghetti Carbonara",
      tag: "Carbonara",
      emoji: "🍝",
      hasTomato: false,
      inRotation: true,
      ingredients: {
        "Bread & Grains": [
          { name: "Spaghetti",                 quantity: "200g" }
        ],
        "Refrigerated": [
          { name: "Guanciale or pancetta",     quantity: "150g" },
          { name: "Eggs",                      quantity: "4 (2 whole + 2 yolks)" }
        ],
        "Dairy & Cheese": [
          { name: "Pecorino Romano",           quantity: "50g" },
          { name: "Parmesan",                  quantity: "50g" }
        ],
        "Pantry & Canned": [
          { name: "Black pepper",              quantity: "generously" }
        ],
        "Beverages": [
          { name: "White Wine",                quantity: "10mL" }
         ]
      }
    },

    {
      id: 6,
      name: "Pasta with Tomato Sauce & Mozzarella",
      tag: "Pasta Tomato",
      emoji: "🍅",
      hasTomato: true,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Onions",                    quantity: "1" },
          { name: "Carrots",                   quantity: "1" },
          { name: "Garlic cloves",             quantity: "2" },
          { name: "Cherry tomatoes",           quantity: "200g" },
          { name: "Fresh basil",               quantity: "handful" }
        ],
        "Bread & Grains": [
          { name: "Pasta",                     quantity: "as needed" }
        ],
        "Pantry & Canned": [
          { name: "Passata",                   quantity: "400ml" },
          { name: "Tomato paste",              quantity: "1–2 tbsp" },
          { name: "Olive oil",                 quantity: "check stock" }
        ],
        "Dairy & Cheese": [
          { name: "Fresh mozzarella",          quantity: "1 ball" },
          { name: "Parmesan",                  quantity: "check stock" }
        ]
      }
    },

    {
      id: 7,
      name: "Vegetable Coconut Curry",
      tag: "Veg. Curry",
      emoji: "🥘",
      hasTomato: false,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Zucchini",                  quantity: "1" },
          { name: "Carrots",                   quantity: "1" },
          { name: "Bell peppers",              quantity: "1" }
        ],
        "Pantry & Canned": [
          { name: "Coconut milk (canned)",     quantity: "1 can" },
          { name: "Chickpeas (canned)",        quantity: "1 can" },
          { name: "Curry paste or powder",     quantity: "check stock" },
          { name: "Oil",                       quantity: "check stock" },
          { name: "Rice",           quantity: "200g" }
        ]
      }
    },

    {
      id: 8,
      name: "Lentil Bolognese",
      tag: "Lentil Bolognese",
      emoji: "🍲",
      hasTomato: true,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Onions",                    quantity: "1" },
          { name: "Carrots",                   quantity: "1" },
          { name: "Celery sticks",             quantity: "1" }
        ],
        "Pantry & Canned": [
          { name: "Red lentils",               quantity: "150g" },
          { name: "Canned chopped tomatoes",   quantity: "2 cans" },
          { name: "Olive oil",                 quantity: "check stock" },
          { name: "Italian herbs (dried)",     quantity: "check stock" },
          { name: "Pasta",          quantity: "as needed" }
        ]
      }
    },

    {
      id: 9,
      name: "Creamy Mushroom & Smoked Tofu Pan Sauce + Rice",
      tag: "Creamy Tofu",
      emoji: "🍄",
      hasTomato: false,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Onions",                    quantity: "1" },
          { name: "Leeks",                     quantity: "1" },
          { name: "Mushrooms",                 quantity: "250g" }
        ],
        "Refrigerated": [
          { name: "Smoked tofu",               quantity: "200g" },
          { name: "Crème fraîche",             quantity: "200g" }
        ],
        "Pantry & Canned": [
          { name: "Vegetable broth cube",      quantity: "1" },
          { name: "White wine (optional)",     quantity: "splash" },
          { name: "Rice",                      quantity: "as needed" }
        ],
        "Dairy & Cheese": [
          { name: "Parmesan (optional)",       quantity: "check stock" }
        ],
        "Beverages": [
          { name: "White Wine (optional)",                quantity: "10mL" }
         ]
      }
    },

    {
      id: 10,
      name: "Veggie Lasagna",
      tag: "Veg. Lasagna",
      emoji: "🧀",
      hasTomato: true,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Carrots",                   quantity: "1" },
          { name: "Onions",                    quantity: "1" },
          { name: "Garlic cloves",             quantity: "2" },
          { name: "Fresh mushrooms",           quantity: "400g" },
          { name: "Celery (optional)",          quantity: "bunch" },
        ],
        "Bread & Grains": [
          { name: "Lasagna sheets",            quantity: "as needed" }
        ],
        "Pantry & Canned": [
          { name: "Smoked tofu",               quantity: "200g" },
          { name: "Canned chopped tomatoes",   quantity: "1 can" },
          { name: "Tomato paste",              quantity: "2–3 tbsp" },
          { name: "Olive oil",                 quantity: "check stock" },
          { name: "Italian herbs",             quantity: "check stock" },
          { name: "Flour",                     quantity: "200g" }
        ],
        "Dairy & Cheese": [
          { name: "Milk",                      quantity: "200ml" },
          { name: "Butter",                    quantity: "200g" },
          { name: "Parmesan",                  quantity: "50g" },
          { name: "Mozzarella",                quantity: "150–200g" }
        ]
      }
    },

    {
      id: 11,
      name: "Quinoa Salad with Veggie Maultaschen",
      tag: "Maultaschen Salad",
      emoji: "🥗",
      hasTomato: false,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Salad leaves",              quantity: "1 bag" },
          { name: "Red bell peppers",          quantity: "1" },
          { name: "Cucumbers",                 quantity: "1" },
          { name: "Avocados",                  quantity: "1" },
          { name: "Red onions",                quantity: "1" }
        ],
        "Pantry & Canned": [
          { name: "Quinoa",                    quantity: "200g" },
          { name: "Corn (canned)",             quantity: "1 can" },
          { name: "Olive oil",                 quantity: "check stock" }
        ],
        "Refrigerated": [
          { name: "Vegetarian Maultaschen",    quantity: "1 pack (ready-made)" }
        ]
      }
    },

    {
      id: 12,
      name: "Butter Chickpeas",
      tag: "Butter Chickpeas",
      emoji: "🧡",
      hasTomato: true,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Onions",                    quantity: "1" },
          { name: "Garlic cloves",             quantity: "2" }
        ],
        "Pantry & Canned": [
          { name: "Chickpeas (canned)",        quantity: "2 cans" },
          { name: "Canned tomatoes",           quantity: "1 can" },
          { name: "Garam masala / curry",      quantity: "check stock" },
          { name: "Salt and pepper",           quantity: "check stock" },
          { name: "Rice",   quantity: "as needed" }
        ],
        "Refrigerated": [
          { name: "Cream or coconut milk",     quantity: "150ml" }
        ]
      }
    },

    // -- BENCH / SWAP POOL (shown at the bottom, can be dragged into rotation) -

    {
      id: 13,
      name: "Krikikraki Salad",
      tag: "Krikikraki",
      emoji: "🥙",
      hasTomato: true,
      inRotation: false,
      ingredients: {
        "Fresh Produce": [
          { name: "Tomatoes",                  quantity: "2" },
          { name: "Red bell peppers",          quantity: "1" },
          { name: "Red onions",                quantity: "1" },
          { name: "Avocados",                  quantity: "1" },
          { name: "Salad leaves",              quantity: "1 bag" }
        ],
        "Pantry & Canned": [
          { name: "Risoni (kritharaki)",       quantity: "250g" },
          { name: "Olives",                    quantity: "handful" },
          { name: "Corn (canned, optional)",   quantity: "1 can" },
          { name: "Greek herb mix",            quantity: "check stock" },
          { name: "Olive oil",                 quantity: "check stock" }
        ],
        "Dairy & Cheese": [
          { name: "Feta",                      quantity: "100–150g" }
        ]
      }
    },

    {
      id: 14,
      name: "Creamy Mushroom Stroganoff",
      tag: "Mushroom Stroganoff",
      emoji: "🍄",
      hasTomato: false,
      inRotation: false,
      ingredients: {
        "Fresh Produce": [
          { name: "Mushrooms",                 quantity: "400–500g" },
          { name: "Onions",                    quantity: "1" }
        ],
        "Pantry & Canned": [
          { name: "Mustard",                   quantity: "check stock" },
          { name: "Oil",                       quantity: "check stock" },
          { name: "Salt and pepper",           quantity: "check stock" },
          { name: "Rice",  quantity: "as needed" }
        ],
        "Dairy & Cheese": [
          { name: "Cream",                     quantity: "150ml" }
        ]
      }
    },

    {
      id: 15,
      name: "Potato-Leek Soup",
      tag: "Leek Soup",
      emoji: "🥔",
      hasTomato: false,
      inRotation: false,
      ingredients: {
        "Fresh Produce": [
          { name: "Potatoes",                  quantity: "600g" },
          { name: "Leeks",                     quantity: "2" },
          { name: "Onions",                    quantity: "1" }
        ],
        "Pantry & Canned": [
          { name: "Vegetable broth",           quantity: "1L" }
        ],
        "Dairy & Cheese": [
          { name: "Cream or oat cream",        quantity: "100ml" }
        ]
      }
    },

    {
      id: 16,
      name: "Red Lentil Dahl",
      tag: "Dahl",
      emoji: "🍛",
      hasTomato: false,
      inRotation: false,
      ingredients: {
        "Fresh Produce": [
          { name: "Onions",                    quantity: "1" },
          { name: "Red bell peppers",          quantity: "1" },
          { name: "Garlic cloves",             quantity: "2" },
          { name: "Fresh ginger",              quantity: "1 thumb" },
          { name: "Carrot",          quantity: "1" }
          
        ],
        "Pantry & Canned": [
          { name: "Red lentils",               quantity: "250g" },
          { name: "Coconut milk (canned)",     quantity: "1 can" },
          { name: "Vegetable broth",           quantity: "400ml" },
          { name: "Curry powder",              quantity: "1–2 tsp" },
          { name: "Cumin",                     quantity: "1 tsp" },
          { name: "Turmeric",                  quantity: "½ tsp" },
          { name: "Rice",           quantity: "as needed" }
        ]
      }
    },

    {
      id: 17,
      name: "Homemade Veggie Burger + Oven Fries",
      tag: "Burger",
      emoji: "🍔",
      hasTomato: true,
      inRotation: false,
      ingredients: {
        "Fresh Produce": [
          { name: "Potatoes",                  quantity: "600g" },
          { name: "Tomatoes",                  quantity: "1" },
          { name: "Salad leaves",              quantity: "1 bag" },
          { name: "Onions",                    quantity: "1" }
        ],
        "Refrigerated": [
          { name: "Veggie patties (ready-made)", quantity: "2" }
        ],
        "Bread & Grains": [
          { name: "Burger buns",               quantity: "2" }
        ],
        "Pantry & Canned": [
          { name: "Pickles",                   quantity: "as needed" },
          { name: "Ketchup",                   quantity: "check stock" },
          { name: "Mustard",                   quantity: "check stock" },
          { name: "Mayonnaise",                quantity: "check stock" },
          { name: "Olive oil",                 quantity: "check stock" }
        ]
      }
    },

    {
      id: 18,
      name: "Tomato & Hidden Veg Pasta Sauce",
      tag: "Veg Pasta",
      emoji: "🫙",
      hasTomato: true,
      inRotation: false,
      ingredients: {
        "Fresh Produce": [
          { name: "Zucchini",                  quantity: "1" },
          { name: "Aubergine",                 quantity: "1" },
          { name: "Red Bell Pepper",           quantity: "1" },
          { name: "Onions",                    quantity: "1" },
          { name: "Garlic cloves",             quantity: "2" }
        ],
        "Pantry & Canned": [
          { name: "Canned chopped tomatoes",   quantity: "2 cans" },
          { name: "Olive oil",                 quantity: "2 tbsp" },
          { name: "Oregano",                   quantity: "check stock" },
          { name: "Pasta", quantity: "as needed" }
        ],
        "Dairy & Cheese": [
          { name: "Ricotta",          quantity: "1 ball" },
        ]
      }
    },

    {
      id: 19,
      name: "Brokkolisuppe mit Kartoffeln",
      tag: "Broccoli Soup",
      emoji: "🥦",
      hasTomato: false,
      isCheat: false,
      inRotation: true,
      ingredients: {
        "Fresh Produce": [
          { name: "Broccoli",       quantity: "500g" },
          { name: "Potatoes",       quantity: "400g" },
          { name: "Onion",          quantity: "1" },
          { name: "Garlic clove",   quantity: "1" }
        ],
        "Refrigerated": [
          { name: "Cream",          quantity: "50ml" }
        ],
        "Pantry & Canned": [
          { name: "Vegetable broth",quantity: "1L" },
          { name: "Butter",         quantity: "1 tsp" },
          { name: "Nutmeg",         quantity: "check stock" }
        ]
      }
    },

    // -- CHEAT NIGHTS (no ingredients — drag into rotation for a free evening) --

    {
      id: 101,
      name: "Order Burgers 🍔",
      emoji: "🛵",
      hasTomato: false,
      isCheat: true,
      inRotation: false,
      ingredients: {}
    },

    {
      id: 102,
      name: "Order Sushi 🍣",
      emoji: "🛵",
      hasTomato: false,
      isCheat: true,
      inRotation: false,
      ingredients: {}
    },

    {
      id: 103,
      name: "Order Pizza 🍕",
      emoji: "🛵",
      hasTomato: true,
      isCheat: true,
      inRotation: false,
      ingredients: {}
    },

    {
      id: 104,
      name: "Not at Home",
      emoji: "🏃",
      hasTomato: false,
      isCheat: true,
      inRotation: false,
      ingredients: {}
    }

  ], // end recipes


  // ---------------------------------------------------------------------------
  // RECURRING STAPLES
  // These are added to every shopping list regardless of which trip it is.
  // Each section has a label (shown as a category header) and a list of items.
  // Toggle inList: false to temporarily remove an item from the default list.
  // ---------------------------------------------------------------------------

  staples: [

    {
      category: "Lunch Staples (3 days)",
      emoji: "🍽️",
      items: [
        { name: "Toast bread",                 quantity: "1 loaf",      inList: true },
        { name: "Eggs (for lunches)",          quantity: "6",           inList: true },
        { name: "Cheese slices",               quantity: "1 pack",      inList: true },
        { name: "Buko Frischkäse",             quantity: "1 pack",      inList: true },
        { name: "Salty butter",                quantity: "1 pack",      inList: true },
        { name: "Salad leaves",                quantity: "1 bag",       inList: true },
        { name: "Avocados",                    quantity: "2–3",         inList: true },
        { name: "Tomatoes (for salad)",        quantity: "4–5",         inList: true }
      ]
    },

    {
      category: "Breakfast (3 days)",
      emoji: "🥐",
      items: [
        { name: "Müsli / Granola",             quantity: "check stock", inList: true },
        { name: "Cow's milk",                  quantity: "1L",          inList: true },
        { name: "Buttermilk",                  quantity: "1 bottle",    inList: true },
        { name: "Yogurt",                      quantity: "2–3 cups",    inList: true },
        { name: "Bread",                       quantity: "1 loaf",      inList: false },
        { name: "Butter",                      quantity: "check stock", inList: false },
        { name: "Jam",                         quantity: "check stock", inList: true },
        { name: "Honey",                       quantity: "check stock", inList: true },
        { name: "Nutella",                     quantity: "check stock", inList: false }
      ]
    },

    {
      category: "Snacks (3 days)",
      emoji: "🍌",
      items: [
        { name: "Bananas",                     quantity: "6",           inList: true },
        { name: "Apples",                      quantity: "4",           inList: false },
        { name: "Berries or grapes (seasonal)",quantity: "handful",     inList: true },
        { name: "Flavored Yogurt",             quantity: "extra",       inList: true },
        { name: "Maiswaffeln plain",           quantity: "1 pack",      inList: true },
        { name: "Maiswaffeln chocolate",       quantity: "1 pack",      inList: true },
        { name: "Lentil crisps",               quantity: "1 pack",      inList: true },
        { name: "Chocolate bar",               quantity: "1",           inList: true }
      ]
    },

    {
      category: "Drinks (3 days)",
      emoji: "🥤",
      items: [
        { name: "Oat milk",                    quantity: "1 carton",    inList: false},
        { name: "Coffee",                      quantity: "check stock", inList: true },
        { name: "Tea",                         quantity: "check stock", inList: true },
        { name: "Smoothie",                    quantity: "1 carton",    inList: true },
        { name: "Non-alcoholic beer",          quantity: "6-pack",      inList: true },
        { name: "CO2 cylinder refill",         quantity: "check",       inList: true }
      ]
    }

  ], // end staples


  // ---------------------------------------------------------------------------
  // HOUSEHOLD & HYGIENE
  // Non-food items shown as a checklist in the shopping list.
  // Set inList: false to hide an item from the default list.
  // ---------------------------------------------------------------------------

  household: [

    {
      category: "Baby",
      emoji: "🍼",
      items: [
        { name: "Diapers",                     quantity: "check stock", inList: true },
        { name: "Baby wipes",                  quantity: "check stock", inList: true },
        { name: "Baby cream",                  quantity: "check stock", inList: true }
      ]
    },

    {
      category: "Cleaning",
      emoji: "🧹",
      items: [
        { name: "Dish soap",                   quantity: "check stock", inList: true },
        { name: "Laundry detergent",           quantity: "check stock", inList: true },
        { name: "Sponges",                     quantity: "check stock", inList: true },
        { name: "Trash bags",                  quantity: "check stock", inList: true }
      ]
    },

    {
      category: "Personal Hygiene",
      emoji: "🧴",
      items: [
        { name: "Shampoo",                     quantity: "check stock", inList: true },
        { name: "Soap / Shower gel",           quantity: "check stock", inList: true },
        { name: "Toothpaste",                  quantity: "check stock", inList: true }
      ]
    }

  ], // end household

  // ---------------------------------------------------------------------------
  // BRING! ITEM MAP
  // Maps lowercase ingredient names → Bring! catalog entries.
  // itemId: Bring! catalog ID (or custom name if not in catalog)
  // altSection: Bring! section to place the item in
  // specification: shown as "details" on the item in Bring!
  // ---------------------------------------------------------------------------
  bringItemMap: {
    // Früchte & Gemüse
    "onions":                       { itemId: "Zwiebeln",       altSection: "Früchte & Gemüse" },
    "onion":                        { itemId: "Zwiebeln",       altSection: "Früchte & Gemüse" },
    "red onions":                   { itemId: "Zwiebeln",       altSection: "Früchte & Gemüse", specification: "rot" },
    "fresh mushrooms":              { itemId: "Pilze",          altSection: "Früchte & Gemüse" },
    "mushrooms":                    { itemId: "Pilze",          altSection: "Früchte & Gemüse" },
    "dried porcini mushrooms":      { itemId: "Pilze",          altSection: "Früchte & Gemüse", specification: "Porcini, getrocknet" },
    "fresh or frozen parsley":      { itemId: "Petersilie",     altSection: "Früchte & Gemüse" },
    "fresh parsley":                { itemId: "Petersilie",     altSection: "Früchte & Gemüse" },
    "red bell pepper":              { itemId: "Paprika",        altSection: "Früchte & Gemüse", specification: "rot" },
    "red bell peppers":             { itemId: "Paprika",        altSection: "Früchte & Gemüse", specification: "rot" },
    "bell peppers":                 { itemId: "Paprika",        altSection: "Früchte & Gemüse" },
    "garlic cloves":                { itemId: "Knoblauch",      altSection: "Früchte & Gemüse" },
    "garlic clove":                 { itemId: "Knoblauch",      altSection: "Früchte & Gemüse" },
    "asparagus":                    { itemId: "Spargel",        altSection: "Früchte & Gemüse" },
    "aubergine":                    { itemId: "Aubergine",      altSection: "Früchte & Gemüse" },
    "fresh mint":                   { itemId: "Pfefferminze",   altSection: "Früchte & Gemüse" },
    "lemons":                       { itemId: "Zitrone",        altSection: "Früchte & Gemüse" },
    "carrot":                       { itemId: "Karotten",       altSection: "Früchte & Gemüse" },
    "carrots":                      { itemId: "Karotten",       altSection: "Früchte & Gemüse" },
    "cherry tomatoes":              { itemId: "Cherrytomaten",  altSection: "Früchte & Gemüse" },
    "fresh basil":                  { itemId: "Basilikum",      altSection: "Früchte & Gemüse" },
    "zucchini":                     { itemId: "Zucchetti",      altSection: "Früchte & Gemüse" },
    "leeks":                        { itemId: "Lauch",          altSection: "Früchte & Gemüse" },
    "spinach (fresh or frozen)":    { itemId: "Spinat",         altSection: "Früchte & Gemüse" },
    "salad leaves":                 { itemId: "Salat",          altSection: "Früchte & Gemüse" },
    "cucumbers":                    { itemId: "Gurke",          altSection: "Früchte & Gemüse" },
    "avocados":                     { itemId: "Avocado",        altSection: "Früchte & Gemüse" },
    "tomatoes":                     { itemId: "Tomaten",        altSection: "Früchte & Gemüse" },
    "tomatoes (for salad)":         { itemId: "Tomaten",        altSection: "Früchte & Gemüse" },
    "potatoes":                     { itemId: "Kartoffeln",     altSection: "Früchte & Gemüse" },
    "fresh ginger":                 { itemId: "Ingwer",         altSection: "Früchte & Gemüse" },
    "celery sticks":                { itemId: "Sellerie",       altSection: "Früchte & Gemüse" },
    "celery (optional)":            { itemId: "Sellerie",       altSection: "Früchte & Gemüse", specification: "optional" },
    "broccoli":                     { itemId: "Brokkoli",       altSection: "Früchte & Gemüse" },
    "bananas":                      { itemId: "Bananen",        altSection: "Früchte & Gemüse" },
    "apples":                       { itemId: "Äpfel",          altSection: "Früchte & Gemüse" },
    "berries or grapes (seasonal)": { itemId: "Beeren",         altSection: "Früchte & Gemüse" },
    "olives":                       { itemId: "Oliven",         altSection: "Früchte & Gemüse" },
    "pickles":                      { itemId: "Cornichons",     altSection: "Zutaten & Gewürze" },
    "peas (fresh or frozen)":       { itemId: "Erbsen",         altSection: "Früchte & Gemüse" },
    "corn":                         { itemId: "Mais",           altSection: "Früchte & Gemüse" },
    "corn (canned)":                { itemId: "Mais",           altSection: "Früchte & Gemüse" },
    "corn (canned, optional)":      { itemId: "Mais",           altSection: "Früchte & Gemüse", specification: "optional" },
    // Milch & Käse
    "butter":                       { itemId: "Butter",         altSection: "Milch & Käse" },
    "salty butter":                 { itemId: "Butter",         altSection: "Milch & Käse", specification: "gesalzen" },
    "parmesan":                     { itemId: "Parmesan",       altSection: "Milch & Käse" },
    "parmesan (optional)":          { itemId: "Parmesan",       altSection: "Milch & Käse", specification: "optional" },
    "pecorino":                     { itemId: "Pecorino" },
    "pecorino romano":              { itemId: "Pecorino Romano" },
    "feta":                         { itemId: "Feta",           altSection: "Milch & Käse" },
    "flavored yogurt":              { itemId: "Joghurt",        altSection: "Milch & Käse", specification: "aromatisiert" },
    "eggs":                         { itemId: "Eier",           altSection: "Milch & Käse" },
    "eggs (for lunches)":           { itemId: "Eier",           altSection: "Milch & Käse" },
    "mozzarella":                   { itemId: "Mozzarella",     altSection: "Milch & Käse" },
    "fresh mozzarella":             { itemId: "Mozzarella",     altSection: "Milch & Käse" },
    "grated mozzarella":            { itemId: "Reibkäse",       altSection: "Milch & Käse", specification: "Mozzarella" },
    "ricotta":                      { itemId: "Ricotta",        altSection: "Milch & Käse" },
    "ricotta or crème fraîche":     { itemId: "Ricotta",        altSection: "Milch & Käse", specification: "oder Creme fraiche" },
    "crème fraîche":                { itemId: "Creme fraiche",  altSection: "Milch & Käse" },
    "cream":                        { itemId: "Rahm",           altSection: "Milch & Käse" },
    "cream or oat cream":           { itemId: "Rahm",           altSection: "Milch & Käse", specification: "oder Haferrahm" },
    "cream or coconut milk":        { itemId: "Rahm",           altSection: "Milch & Käse", specification: "oder Kokosmilch" },
    "cheese slices":                { itemId: "Käse",           altSection: "Milch & Käse" },
    "buko frischkäse":              { itemId: "Frischkäse",     altSection: "Milch & Käse" },
    "milk":                         { itemId: "Milch",          altSection: "Milch & Käse" },
    "cow's milk":                   { itemId: "Milch",          altSection: "Milch & Käse" },
    "buttermilk":                   { itemId: "Buttermilch" },
    "yogurt":                       { itemId: "Joghurt",        altSection: "Milch & Käse" },
    "yogurt / quark":               { itemId: "Joghurt",        altSection: "Milch & Käse", specification: "oder Quark" },
    // Fleisch & Fisch
    "guanciale or pancetta":        { itemId: "Speck",          altSection: "Fleisch & Fisch", specification: "Guanciale oder Pancetta" },
    // Getreideprodukte
    "risotto rice":                 { itemId: "Risottoreis",    altSection: "Getreideprodukte" },
    "spaghetti":                    { itemId: "Spaghetti",      altSection: "Getreideprodukte" },
    "pasta":                        { itemId: "Nudeln",         altSection: "Getreideprodukte" },
    "orzo / risoni pasta":          { itemId: "Nudeln",         altSection: "Getreideprodukte", specification: "Orzo / Risoni" },
    "risoni (kritharaki)":          { itemId: "Nudeln",         altSection: "Getreideprodukte", specification: "Risoni (Kritharaki)" },
    "rice":                         { itemId: "Reis",           altSection: "Getreideprodukte" },
    "quinoa":                       { itemId: "Quinoa" },
    "flour":                        { itemId: "Mehl",           altSection: "Getreideprodukte" },
    "chickpeas (canned)":           { itemId: "Kichererbsen",   altSection: "Getreideprodukte" },
    "smoked tofu":                  { itemId: "Tofu",           altSection: "Getreideprodukte", specification: "geräuchert" },
    "müsli / granola":              { itemId: "Müesli",         altSection: "Getreideprodukte" },
    // Brot & Gebäck
    "toast bread":                  { itemId: "Toast",          altSection: "Brot & Gebäck" },
    "bread":                        { itemId: "Brot",           altSection: "Brot & Gebäck" },
    "burger buns":                  { itemId: "Brötchen",       altSection: "Brot & Gebäck" },
    // Fertig- & Tiefkühlprodukte
    "lasagna sheets":               { itemId: "Lasagne",        altSection: "Fertig- & Tiefkühlprodukte" },
    "vegetarian maultaschen":       { itemId: "Maultaschen",    altSection: "Fertig- & Tiefkühlprodukte", specification: "vegetarisch" },
    "veggie patties (ready-made)":  { itemId: "Veggie Patties" },
    // Zutaten & Gewürze
    "vegetable broth":              { itemId: "Bouillon",       altSection: "Zutaten & Gewürze" },
    "vegetable broth cube":         { itemId: "Bouillon",       altSection: "Zutaten & Gewürze", specification: "Würfel" },
    "olive oil":                    { itemId: "Olivenöl",       altSection: "Zutaten & Gewürze" },
    "oil":                          { itemId: "Öl",             altSection: "Zutaten & Gewürze" },
    "salt and pepper":              { itemId: "Salz",           altSection: "Zutaten & Gewürze", specification: "& Pfeffer" },
    "salt":                         { itemId: "Salz",           altSection: "Zutaten & Gewürze" },
    "black pepper":                 { itemId: "Pfeffer",        altSection: "Zutaten & Gewürze" },
    "canned peeled tomatoes":       { itemId: "Pelati",         altSection: "Zutaten & Gewürze", specification: "ganz geschält" },
    "canned chopped tomatoes":      { itemId: "Pelati",         altSection: "Zutaten & Gewürze", specification: "gehackt" },
    "canned tomatoes":              { itemId: "Pelati",         altSection: "Zutaten & Gewürze" },
    "passata":                      { itemId: "Tomatensauce",   altSection: "Zutaten & Gewürze" },
    "tomato paste":                 { itemId: "Tomatenmark",    altSection: "Zutaten & Gewürze" },
    "coconut milk (canned)":        { itemId: "Kokosmilch",     altSection: "Zutaten & Gewürze" },
    "red lentils":                  { itemId: "Linsen",         altSection: "Zutaten & Gewürze", specification: "rot" },
    "kidney beans (canned)":        { itemId: "Bohnen",         altSection: "Zutaten & Gewürze", specification: "Kidney" },
    "black beans (canned)":         { itemId: "Bohnen",         altSection: "Zutaten & Gewürze", specification: "schwarz" },
    "pine nuts (optional)":         { itemId: "Pinienkerne",    altSection: "Zutaten & Gewürze", specification: "optional" },
    "mustard":                      { itemId: "Senf",           altSection: "Zutaten & Gewürze" },
    "ketchup":                      { itemId: "Ketchup",        altSection: "Zutaten & Gewürze" },
    "mayonnaise":                   { itemId: "Mayonnaise",     altSection: "Zutaten & Gewürze" },
    "paprika":                      { itemId: "Paprikapulver",  altSection: "Zutaten & Gewürze" },
    "cumin":                        { itemId: "Cumin",          altSection: "Zutaten & Gewürze" },
    "cayenne pepper":               { itemId: "Cayenne pepper", altSection: "Zutaten & Gewürze" },
    "chili powder":                 { itemId: "Chili powder",   altSection: "Zutaten & Gewürze" },
    "curry paste or powder":        { itemId: "Curry paste",    altSection: "Zutaten & Gewürze", specification: "oder Pulver" },
    "curry powder":                 { itemId: "Curry powder",   altSection: "Zutaten & Gewürze" },
    "garam masala / curry":         { itemId: "Garam masala",   altSection: "Zutaten & Gewürze", specification: "oder Curry" },
    "turmeric":                     { itemId: "Turmeric",       altSection: "Zutaten & Gewürze" },
    "nutmeg":                       { itemId: "Nutmeg",         altSection: "Zutaten & Gewürze" },
    "oregano":                      { itemId: "Oregano",        altSection: "Zutaten & Gewürze" },
    "italian herbs (dried)":        { itemId: "Italian herbs" },
    "italian herbs":                { itemId: "Italian herbs" },
    "greek herb mix":               { itemId: "Greek herb mix" },
    "white wine":                   { itemId: "Weisswein",      altSection: "Getränke & Tabak" },
    "white wine (optional)":        { itemId: "Weisswein",      altSection: "Getränke & Tabak" },
    // Snacks & Süsswaren
    "honey":                        { itemId: "Honig",          altSection: "Snacks & Süsswaren" },
    "jam":                          { itemId: "Konfitüre",      altSection: "Snacks & Süsswaren" },
    "nutella":                      { itemId: "Nougatcreme",    altSection: "Snacks & Süsswaren" },
    "chocolate bar":                { itemId: "Schokolade",     altSection: "Snacks & Süsswaren" },
    "lentil crisps":                { itemId: "Lentil crisps" },
    "maiswaffeln plain":            { itemId: "Maiswaffeln" },
    "maiswaffeln chocolate":        { itemId: "Maiswaffeln",    altSection: "Snacks & Süsswaren", specification: "Schokolade" },
    // Getränke & Tabak
    "oat milk":                     { itemId: "Hafermilch" },
    "coffee":                       { itemId: "Kaffee",         altSection: "Getränke & Tabak" },
    "tea":                          { itemId: "Tee",            altSection: "Getränke & Tabak" },
    "juice (oj or apple)":          { itemId: "Orangensaft",    altSection: "Getränke & Tabak", specification: "oder Apfelsaft" },
    "smoothie":                     { itemId: "Smoothie" },
    "non-alcoholic beer":           { itemId: "Bier",           altSection: "Getränke & Tabak", specification: "alkoholfrei" },
    // Haushalt & Gesundheit
    "dish soap":                    { itemId: "Abwaschmittel",  altSection: "Haushalt & Gesundheit" },
    "laundry detergent":            { itemId: "Waschmittel",    altSection: "Haushalt & Gesundheit" },
    "sponges":                      { itemId: "Schwamm",        altSection: "Haushalt & Gesundheit" },
    "trash bags":                   { itemId: "Abfallsäcke",    altSection: "Haushalt & Gesundheit" },
    "co2 cylinder refill":          { itemId: "CO2 Cylinder Refill" },
    // Pflege & Gesundheit
    "diapers":                      { itemId: "Windeln",        altSection: "Pflege & Gesundheit" },
    "baby wipes":                   { itemId: "Feuchttücher",   altSection: "Pflege & Gesundheit" },
    "baby cream":                   { itemId: "Baby cream",     altSection: "Pflege & Gesundheit" },
    "shampoo":                      { itemId: "Shampoo",        altSection: "Pflege & Gesundheit" },
    "soap / shower gel":            { itemId: "Seife",          altSection: "Pflege & Gesundheit" },
    "toothpaste":                   { itemId: "Zahnpasta",      altSection: "Pflege & Gesundheit" },
  } // end bringItemMap

}; // end MEAL_DATA
