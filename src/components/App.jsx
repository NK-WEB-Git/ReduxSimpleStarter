import React from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import rawDataVideo from './../../assets-video/data_videos';

const API_YOUTUBE_KEY = 'AIzaSyCGATr18LcnwOZLDlsZR-7TtqkPFUJ8GEo';

// Take a component and render some HTML content
export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('React JS');
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  videoSearch(term) {
    YTSearch({key: API_YOUTUBE_KEY, term: term}, (error, videos) => {
      if (error) {
        this.setState({
          videos: rawDataVideo,
          selectedVideo: rawDataVideo[0]
        })
      } else {
        this.setState({
          videos,
          selectedVideo: videos[0]
        });
      }
    });
  }

  onVideoSelect(selectedVideo) {
     this.setState({selectedVideo});
  }

  render() {
    const videoSearchDebounce = _.debounce(term => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearchDebounce} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
