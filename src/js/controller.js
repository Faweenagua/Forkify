import * as model from './model.js';
import recipeView from './views/recipeView.js';

//import icons

import 'core-js/stable';
import 'regenerator-runtime/runtime';

//console.log(icons);

const { async } = require('regenerator-runtime');

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

console.log('Test');

const controlRecipes = async function () {
  try {
    // const id = window.location.hash.slice(1);
    const id = '5ed6604591c37cdc054bc886';

    if (!id) return;

    recipeView.renderSpinner(recipeContainer);

    // Loading recipe

    await model.loadRecipe(id);

    //Rendering recipe
    recipeView.render(model.state.recipe);

    //console.log(recipe);
  } catch (error) {
    alert(error);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();
/* window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes); */
