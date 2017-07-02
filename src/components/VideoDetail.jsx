import React from 'react';
import LoadVideo from './LoadVideo';
import ScreenVideo from './ScreenVideo';

export default function VideoDetail({video}) {
  if (!video) {
    return <LoadVideo/>
  }

  let videoId = video.id.videoId;
  let url = `https://youtube.com/embed/${videoId}`;

  if (video.noAjax) {
    url = video.videoUrl;
  }

  return (
    <div className="video-detail col-md-8">
      <ScreenVideo url={url} provider={video.rawData} />
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}
