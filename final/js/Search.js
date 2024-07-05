// function searchRecipe() {
//     var ingredient = document.getElementById("ingredientInput").value.toLowerCase();
//     if (ingredient === "mushroom") {
//         displayRecipe();
//     } else {
//         alert("Sorry, we don't have a recipe for that ingredient yet.");
//     }
// }

// function displayRecipe() {
//     var recipeContainer = document.getElementById("recipeContainer");
//     recipeContainer.innerHTML = `
//         <h2>Mushroom Risotto</h2>
//         <h3>Ingredients:</h3>
//         <ul>
//             <li>1 cup Arborio rice</li>
//             <li>4 cups vegetable or chicken broth</li>
//             <li>1 cup chopped mushrooms</li>
//             <li>1/2 cup chopped onion</li>
//             <li>2 cloves garlic, minced</li>
//             <li>1/4 cup grated Parmesan cheese</li>
//             <li>2 tablespoons butter</li>
//             <li>Salt and pepper to taste</li>
//         </ul>
//         <h3>Instructions:</h3>
//         <ol>
//             <li>Sauté onion and garlic, then add mushrooms.</li>
//             <li>Stir in Arborio rice.</li>
//             <li>Gradually add broth, stirring until absorbed.</li>
//             <li>Stir in Parmesan and butter.</li>
//             <li>Season with salt and pepper.</li>
//             <li>Serve hot.</li>
//         </ol>
//     `;
// }



// document.getElementById("searchButton").addEventListener("click", function() {
//     var ingredient = document.getElementById("ingredientInput").value;
//     if (ingredient.trim() !== "") {
//         showRecipe();
//         document.body.classList.remove("recipe-closed");
//     } else {
//         alert("Please enter an ingredient!");
//     }
// });

// document.getElementById("closeButton").addEventListener("click", function() {
//     hideRecipe();
//     document.body.classList.add("recipe-closed");
// });

// function showRecipe() {
//     var recipeContainer = document.getElementById("recipeContainer");
//     recipeContainer.style.display = "block";
// }

// function hideRecipe() {
//     var recipeContainer = document.getElementById("recipeContainer");
//     recipeContainer.style.display = "none";
// }


  

function searchRecipe() {
    var ingredient = document.getElementById("ingredientInput").value.toLowerCase();
    switch (ingredient) {
        case "mushroom":
            displayMushroomRecipe();
            break;
        case "potato":
            displayPotatoRecipe();
            break;
        case "broccoli":
            displayBroccoliRecipe();
            break;
        case "garlic":
            displayGarlicRecipe();
            break;
        case "parmesan":
            displayParmesanRecipe();
            break;
        case "egg":
            displayEggRecipe();
            break;
        case "pepperoni":
            displayPepperoniRecipe();
            break;
        default:
            alert("Sorry, we don't have a recipe for that ingredient yet.");
    }
}

function displayMushroomRecipe() {
    var recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = `
        <h2>Mushroom Risotto</h2>
        <h3>Ingredients:</h3>
        <ul>
            <li>1 cup Arborio rice</li>
            <li>4 cups vegetable or chicken broth</li>
            <li>1 cup chopped mushrooms</li>
            <li>1/2 cup chopped onion</li>
            <li>2 cloves garlic, minced</li>
            <li>1/4 cup grated Parmesan cheese</li>
            <li>2 tablespoons butter</li>
            <li>Salt and pepper to taste</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
            <li>Sauté onion and garlic, then add mushrooms.</li>
            <li>Stir in Arborio rice.</li>
            <li>Gradually add broth, stirring until absorbed.</li>
            <li>Stir in Parmesan and butter.</li>
            <li>Season with salt and pepper.</li>
            <li>Serve hot.</li>
        </ol>
    `;
}

function displayPotatoRecipe() {
    var recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = `
        <h2>Potato Hash Browns</h2>
        <h3>Ingredients:</h3>
        <ul>
            <li>4 potatoes, grated</li>
            <li>1/2 onion, diced</li>
            <li>Salt and pepper to taste</li>
            <li>2 tablespoons olive oil</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
            <li>Mix grated potatoes, diced onion, salt, and pepper in a bowl.</li>
            <li>Heat olive oil in a skillet over medium heat.</li>
            <li>Form potato mixture into patties and cook until golden brown on both sides.</li>
        </ol>
    `;
}

function displayBroccoliRecipe() {
    var recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = `
        <h2>Broccoli Cheddar Soup</h2>
        <h3>Ingredients:</h3>
        <ul>
            <li>2 cups broccoli florets</li>
            <li>1/2 onion, diced</li>
            <li>2 cloves garlic, minced</li>
            <li>2 cups vegetable or chicken broth</li>
            <li>1 cup shredded cheddar cheese</li>
            <li>Salt and pepper to taste</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
            <li>Sauté diced onion and minced garlic until softened.</li>
            <li>Add broccoli florets and broth, simmer until broccoli is tender.</li>
            <li>Blend soup until smooth, then stir in shredded cheddar cheese until melted.</li>
            <li>Season with salt and pepper before serving.</li>
        </ol>
    `;
}

function displayGarlicRecipe() {
    var recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = `
        <h2>Garlic Butter Shrimp</h2>
        <h3>Ingredients:</h3>
        <ul>
            <li>1 pound shrimp, peeled and deveined</li>
            <li>4 cloves garlic, minced</li>
            <li>2 tablespoons butter</li>
            <li>Salt and pepper to taste</li>
            <li>1 tablespoon chopped parsley</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
            <li>Melt butter in a skillet over medium heat.</li>
            <li>Add minced garlic and cook until fragrant.</li>
            <li>Add shrimp, season with salt and pepper, and cook until pink and cooked through.</li>
            <li>Sprinkle with chopped parsley before serving.</li>
        </ol>
    `;
}

function displayParmesanRecipe() {
    var recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = `
        <h2>Parmesan Crusted Chicken</h2>
        <h3>Ingredients:</h3>
        <ul>
            <li>2 chicken breasts</li>
            <li>1/2 cup grated Parmesan cheese</li>
            <li>1/4 cup breadcrumbs</li>
            <li>1 egg, beaten</li>
            <li>Salt and pepper to taste</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
            <li>Season chicken breasts with salt and pepper.</li>
            <li>Dip each chicken breast in beaten egg, then coat with a mixture of grated Parmesan cheese and breadcrumbs.</li>
            <li>Bake for 20-25 minutes or until golden and cooked through.</li>
        </ol>
    `;
}

function displayEggRecipe() {
    var recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = `
        <h2>Classic Egg Salad</h2>
        <h3>Ingredients:</h3>
        <ul>
            <li>6 hard-boiled eggs, chopped</li>
            <li>1/4 cup mayonnaise</li>
            <li>1 tablespoon mustard</li>
            <li>Salt and pepper to taste</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
            <li>Mix chopped hard-boiled eggs, mayonnaise, mustard, salt, and pepper in a bowl.</li>
            <li>Stir until well combined.</li>
            <li>Serve as a sandwich filling or on a bed of lettuce.</li>
        </ol>
    `;
}

function displayPepperoniRecipe() {
    var recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = `
    <h2>Pepperoni Pizza</h2>
    <h3>Ingredients:</h3>
    <ul>
        <li>Pizza dough</li>
        <li>1/2 cup tomato sauce</li>
        <li>1 cup shredded mozzarella cheese</li>
        <li>1/4 cup sliced pepperoni</li>
    </ul>
    <h3>Instructions:</h3>
    <ol>
        <li>Roll out pizza dough on a baking sheet.</li>
        <li>Spread tomato sauce over the dough.</li>
        <li>Sprinkle shredded mozzarella cheese over the sauce.</li>
        <li>Arrange sliced pepperoni on top of the cheese.</li>
        <li>Bake in the preheated oven at 425°F (220°C) for 12-15 minutes or until crust is golden brown and cheese is melted.</li>
    </ol>
`;
}

