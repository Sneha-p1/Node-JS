const recipes = [
    {
      name: 'Tomato Pasta',
      ingredients: ['pasta', 'tomato', 'garlic', 'olive oil', 'basil'],
      rating: 4,
      preparationTime: 30,
      complexity: 'Easy'
    },
    {
      name: 'Vegetable Stir Fry',
      ingredients: ['vegetables', 'soy sauce', 'garlic', 'ginger', 'sesame oil'],
      rating: 5,
      preparationTime: 25,
      complexity: 'Medium'
    },
    {
      name: 'Grilled Chicken Salad',
      ingredients: ['chicken', 'lettuce', 'tomato', 'cucumber', 'bell pepper', 'salad dressing'],
      rating: 4.5,
      preparationTime: 20,
      complexity: 'Easy'
    },
    {
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic', 'oregano'],
      rating: 4.2,
      preparationTime: 35,
      complexity: 'Medium'
    }
  ];
  
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  function searchRecipes(ingredients) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';
  
    const matchingRecipes = recipes.filter(recipe =>
      ingredients.every(ingredient => recipe.ingredients.includes(ingredient.trim().toLowerCase()))
    );
  
    if (matchingRecipes.length === 0) {
      recipesContainer.innerText = 'No recipes found.';
    } else {
      matchingRecipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.innerHTML = `
          <h3>${recipe.name}</h3>
          <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
          <p><strong>Rating:</strong> ${recipe.rating}</p>
          <p><strong>Preparation Time:</strong> ${recipe.preparationTime} minutes</p>
          <p><strong>Complexity:</strong> ${recipe.complexity}</p>
          <button onclick="addToFavorites('${recipe.name}')">Add to Favorites</button>
        `;
        recipesContainer.appendChild(recipeItem);
      });
    }
  }
  
  function addToFavorites(recipeName) {
    const recipe = recipes.find(r => r.name === recipeName);
    if (!favorites.some(f => f.name === recipeName)) {
      favorites.push(recipe);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      displayFavorites();
    }
  }
  
  function removeFromFavorites(recipeName) {
    favorites = favorites.filter(f => f.name !== recipeName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
  }
  
  function displayFavorites() {
    const favoritesList = document.getElementById('favorites');
    favoritesList.innerHTML = '';
  
    favorites.forEach(recipe => {
      const favoriteItem = document.createElement('li');
      favoriteItem.innerHTML = `${recipe.name} <button onclick="removeFromFavorites('${recipe.name}')">Remove</button>`;
      favoritesList.appendChild(favoriteItem);
    });
  }
  
  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const ingredients = document.getElementById('ingredients').value.split(',');
    searchRecipes(ingredients);
  });
  
  displayFavorites();
  