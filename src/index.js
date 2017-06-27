import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_YOUTUBE_KEY = 'AIzaSyCGATr18LcnwOZLDlsZR-7TtqkPFUJ8GEo';

YTSearch({key: API_YOUTUBE_KEY, term: 'surfboard'}, function (data) {
  console.log(data);
});

// Take a component and render some HTML content
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
};

// Take component and render it in the browser
ReactDom.render(<App/>, document.querySelector('.container'));
