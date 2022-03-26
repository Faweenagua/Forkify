import * as model from './model.js';
import recipeView from './views/recipeView.js';

//import icons

import 'core-js/stable';
import 'regenerator-runtime/runtime';

//console.log(icons);

const { async } = require('regenerator-runtime');

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

/* window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes); */
