import React from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_YOUTUBE_KEY = 'AIzaSyCGATr18LcnwOZLDlsZR-7TtqkPFUJ8GEo';

// Take a component and render some HTML content
class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('React JS');
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  // Todo Créer une promise qui fait le job
  videoSearch(term) {
    YTSearch({key: API_YOUTUBE_KEY, term: term}, videos => {
      console.log(videos);
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  onVideoSelect(selectedVideo) {
     this.setState({selectedVideo});
  }

  render() {
    const videoSearchDebounce = _.debounce(term => this.videoSearch(term), 300);

    // Todo Gérer les videos assets qui apparaîtront si pas de connexion
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearchDebounce}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take component and render it in the browser
ReactDom.render(<App/>, document.querySelector('.container'));
