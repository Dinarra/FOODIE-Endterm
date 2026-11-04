
const dishes = [
  {
    id: 1,
    name: "Carbonara Pasta",
    category: "main",
    price: 12,
    description: "A classic with bacon and parmesan",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500"
  },
  {
    id: 2,
    name: "Foodie Burger",
    category: "main",
    price: 14,
    description: "Juicy beef patty with chef's sauce",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
  },
  {
    id: 3,
    name: "Grilled Salmon Steak",
    category: "main",
    price: 21,
    description: "Fresh salmon served with vegetables",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500"
  },
  {
    id: 4,
    name: "Mushroom Risotto",
    category: "main",
    price: 13,
    description: "Creamy risotto with fresh mushrooms",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500"
  },
  {
    id: 5,
    name: "Caesar Salad",
    category: "starter",
    price: 9,
    description: "With grilled chicken and parmesan",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500"
  },
  {
    id: 6,
    name: "Tomato Bruschetta",
    category: "starter",
    price: 7,
    description: "Toasted bread with fresh tomatoes",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500"
  },
  {
    id: 7,
    name: "Pumpkin Cream Soup",
    category: "starter",
    price: 8,
    description: "Warm and creamy pumpkin soup",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500"
  },
  {
    id: 8,
    name: "Tiramisu",
    category: "dessert",
    price: 8,
    description: "Classic Italian coffee dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500"
  },
  {
    id: 9,
    name: "New York Cheesecake",
    category: "dessert",
    price: 9,
    description: "Creamy cheesecake with a biscuit base",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500"
  }
];

// Categories for filtering dishes
const categories = ["all", "main", "starter", "dessert"];

// Save favorite dishes in the browser
let favorites = JSON.parse(localStorage.getItem("foodieFavorites") || "[]");

const menuContainer = document.getElementById("dynamic-menu");
const searchInput = document.getElementById("menu-search");
const categoryFilter = document.getElementById("category-filter");
const favoritesButton = document.getElementById("show-favorites");
const menuMessage = document.getElementById("menu-message");

let showOnlyFavorites = false;

// Format the price
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

// Filter dishes by search, category and favorites
function getFilteredDishes() {
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;

  return dishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchText);
    const matchesCategory = selectedCategory === "all" ||
      dish.category === selectedCategory;
    const matchesFavorites = !showOnlyFavorites ||
      favorites.includes(dish.id);

    return matchesSearch && matchesCategory && matchesFavorites;
  });
}

// Create a dish card
function createDishCard(dish) {
  const column = document.createElement("div");
  column.className = "col-12 col-md-6 col-lg-4";

  const isFavorite = favorites.includes(dish.id);

  column.innerHTML = `
    <div class="card h-100">
      <img src="${dish.image}" alt="${dish.name}">
      <div class="card-body d-flex flex-column">
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        <p class="price">${formatPrice(dish.price)}</p>
        <button
          type="button"
          class="btn favorite-btn mt-auto"
          data-id="${dish.id}"
          aria-pressed="${isFavorite}">
          ${isFavorite ? "♥ Remove Favorite" : "♡ Add Favorite"}
        </button>
      </div>
    </div>
  `;

  return column;
}

// Display dishes on the page
function renderMenu() {
  const filteredDishes = getFilteredDishes();
  menuContainer.innerHTML = "";

  for (const dish of filteredDishes) {
    menuContainer.appendChild(createDishCard(dish));
  }

  menuMessage.textContent = filteredDishes.length === 0
    ? "No dishes found. Try another search or category."
    : `${filteredDishes.length} dish(es) found`;
}

// Add or remove a favorite dish
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favoriteId => favoriteId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("foodieFavorites", JSON.stringify(favorites));
  renderMenu();
}

// Switch between all dishes and favorites
function updateFavoriteButton() {
  showOnlyFavorites = !showOnlyFavorites;
  favoritesButton.textContent = showOnlyFavorites
    ? "Show All Dishes"
    : "Show Favorites";

  favoritesButton.setAttribute("aria-pressed", String(showOnlyFavorites));
  renderMenu();
}

// Connect buttons and filters to JavaScript
if (menuContainer && searchInput && categoryFilter && favoritesButton && menuMessage) {
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category === "all"
      ? "All Categories"
      : category.charAt(0).toUpperCase() + category.slice(1);

    categoryFilter.appendChild(option);
  });

  searchInput.addEventListener("input", renderMenu);
  categoryFilter.addEventListener("change", renderMenu);
  favoritesButton.addEventListener("click", updateFavoriteButton);

  menuContainer.addEventListener("click", event => {
    const button = event.target.closest(".favorite-btn");

    if (button) {
      toggleFavorite(Number(button.dataset.id));
    }
  });

  renderMenu();
}
