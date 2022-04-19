import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

//import icons

import 'core-js/stable';
import 'regenerator-runtime/runtime';

//console.log(icons);

const { async } = require('regenerator-runtime');

/* if (module.hot) {
  module.hot.accept();
} */
//const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//console.log('Test');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    // mark selected search results
    resultsView.update(model.getSearchResultsPage());

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
    //resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage(1));

    paginationView.render(model.state.search);
  } catch (err) {
    resultsView.renderError();
  }
};

const controlPagination = function (goto) {
  resultsView.render(model.getSearchResultsPage(goto));

  paginationView.render(model.state.search);
};

const controlServings = function (servings) {
  model.updateServings(servings);

  //Rendering recipe
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  console.log(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
/* window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes); */
