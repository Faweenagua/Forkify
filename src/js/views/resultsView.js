import View from './view';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your search. Please try again. 😥';
  _successMessage = '';

  /* _generateMarkup() {
    //console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join('');
  } */

  _generateMarkup() {
    //console.log(this._data);
    return this._data
      .map(results => previewView.render(results, false))
      .join('');
  }
}

export default new ResultsView();
