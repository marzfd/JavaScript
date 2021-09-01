'use strict'

let recipe = {};

recipe = {title: 'Pasta', servings: 3, ingredients: ['200 gr mushroom', '1 garlic', '100 gr parmesan', '3 tsp olive oil'] };

for (let i in recipe) {
  if ( i == 'title') { 
    console.log('Meal name: ', recipe[i]);
  } else if ( i == 'servings') {
    console.log('Serves: ', recipe[i]);
  } else {
    console.log('Ingredients: ', recipe[i]);
  }
}