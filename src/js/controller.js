import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import AddRecipeView from './views/addRecipeView';
import { MODAL_CLOSE_SEC } from './config.js';

//import icons

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import addRecipeView from './views/addRecipeView';

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
    //debugger;
    resultsView.update(model.getSearchResultsPage());

    bookmarksView.update(model.state.bookmarks);

    recipeView.renderSpinner();

    // Loading recipe
    //console.log(id);
    await model.loadRecipe(id);

    //Rendering recipe
    recipeView.render(model.state.recipe);

    //console.log(recipe);
  } catch (error) {
    console.error(error);
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
  // Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // Update recipe view
  recipeView.update(model.state.recipe);

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  console.log(newRecipe);
  try {
    addRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);

    recipeView.render(model.state.recipe);

    addRecipeView.renderSuccess();

    bookmarksView.render(model.state.bookmarks);

    window.history.pushState(null, '', `${model.state.recipe.id}`);

    //window.history.back();

    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    console.log(error);
    addRecipeView.renderError(error.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
/* window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes); */
