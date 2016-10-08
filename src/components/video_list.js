import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
        selectedVideo={props.selectedVideo}
      />
    );
  });


  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );

}

export default VideoList;

/* FUNCTIONAL COMPONENT
- has no state.
- is a const, not a class
- if it needs state then instead do class based:
  - extend React.Component
- does not render to dom.
  - if it were to render to dom then instead use
ReactDOM.render(<App />, document.querySelector('.container'));
- exports its one const
*/