import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

//import icons

import 'core-js/stable';
import 'regenerator-runtime/runtime';

//console.log(icons);

const { async } = require('regenerator-runtime');

if (module.hot) {
  module.hot.accept();
}
//const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//console.log('Test');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    // Loading recipe

    await model.loadRecipe(id);

    //Rendering recipe
    recipeView.render(model.state.recipe);

    //console.log(recipe);
  } catch (error) {
    //alert(error);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();

    if (!query) return;

    await model.loadSearchResults(query);
    //console.log(model.state.search.results);
    resultsView.render(model.state.search.results);
  } catch (err) {
    resultsView.renderError();
  }
};

//controlSearchResults();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
/* window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes); */
