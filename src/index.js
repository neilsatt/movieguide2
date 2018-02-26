import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { requestMovies } from './movieApi';
import { MOVIES_LOADED } from './actions';
import MovieList from './MovieList';
import Filter from './Filter';

requestMovies().then(movies => store.dispatch({ type: MOVIES_LOADED, movies }));
const movieLists = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(date =>
  <MovieList key={date} date={date} />
);

let divStyle = {
  backgroundcolor: '#CEC7B0'
}

ReactDOM.render(

  <Provider store={store}>
    <main className="ph6 pv4">
      <h1 className="mt0">Movie Showings</h1>
      <Filter name="filter" id="filter" label="Only favorites" />
      <div className="flex flex-row" style={divStyle}>
        {movieLists}
      </div>
    </main>
  </Provider>,
  document.getElementById('app')
);
