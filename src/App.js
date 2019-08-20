import React, {useState} from 'react';

import {Grid} from '@material-ui/core';

import {SearchBar, VideoList, VideoDetail} from './components';
import youtube from './api/youtube';

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectVideo] = useState(null);

  const handleSubmit = async searchTerm => {
    const {
      data: {items: videos},
    } = await youtube.get('search', {params: {q: searchTerm}});

    setVideos(videos);
    setSelectVideo(videos[0]);
  };

  return (
    <Grid style={{justifyContent: 'center'}} container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
