import React from 'react';

import {Grid} from '@material-ui/core';

import youtube from './api/youtube';
import {SearchBar, VideoList, VideoDetail} from './components';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get('search', {params: {q: searchTerm}});

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.item[0],
    });
  };

  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {/* Video List */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
