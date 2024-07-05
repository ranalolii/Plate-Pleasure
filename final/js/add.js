// JavaScript code
const ingredients = document.querySelectorAll('.ingredient');
const recipes = document.querySelectorAll('.recipe');

// Define recipes and their ingredients
const recipeIngredients = {
  'Caprese Salad': ['Fresh tomatoes', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Balsamic glaze'],
  'Avocado Toast': ['Ripe avocados', 'Bread slices', 'Lemon juice', 'Salt'],
  'Pesto Pasta': ['Pasta', 'Pesto sauce', 'Cherry tomatoes', 'Parmesan cheese'],
  'Banana Pancakes': ['Ripe bananas', 'Eggs', 'Baking powder', 'Maple syrup'],
  'Guacamole': ['Ripe avocados', 'Lime juice', 'Red onion', 'Fresh cilantro'],
  'Scrambled Eggs': ['Eggs', 'Milk', 'Salt', 'Butter'],
  'Bruschetta': ['Baguette slices', 'Ripe tomatoes', 'Garlic cloves', 'Olive oil'],
  'Greek Yogurt Parfait': ['Greek yogurt', 'Honey', 'Granola', 'Fresh berries'],
  'Fruit Salad': ['Mixed fruits', 'Honey', 'Fresh mint leaves', 'Lemon juice'],
  'Caprese Grilled Cheese': ['Bread slices', 'Fresh mozzarella cheese', 'Tomato slices', 'Fresh basil leaves']
};

// Function to check if all ingredients are selected
function allIngredientsSelected(recipeIngredients, selectedIngredients) {
  for (let ingredient of recipeIngredients) {
    if (!selectedIngredients.includes(ingredient)) {
      return false;
    }
  }
  return true;
}

// Function to display the recipe
function displayRecipe(recipeName) {
  recipes.forEach(recipe => {
    if (recipe.dataset.recipe === recipeName) {
      recipe.style.display = 'block';
    } else {
      recipe.style.display = 'none';
    }
  });
}

// Event listener for ingredient selection
ingredients.forEach(ingredient => {
  ingredient.addEventListener('change', () => {
    const selectedIngredients = Array.from(ingredients)
      .filter(ingredient => ingredient.checked)
      .map(ingredient => ingredient.dataset.name);
    
    // Check if selected ingredients match any recipe
    for (let [recipeName, recipeIngredientList] of Object.entries(recipeIngredients)) {
      if (allIngredientsSelected(recipeIngredientList, selectedIngredients)) {
        displayRecipe(recipeName);
        return;
      }
    }
    
    // If no recipe matches the selected ingredients, hide all recipes
    recipes.forEach(recipe => {
      recipe.style.display = 'none';
    });
  });
});

  
  
  