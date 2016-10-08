import React from 'react';

const VideoListItem = ({ video, onVideoSelect, selectedVideo }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  const isSelected = () => {
    return (video && selectedVideo && video.id.videoId === selectedVideo.id.videoId) ? 'selected' : '';
  }

  const highlightSelected = () => {
    return (isSelected()) ? 'bold' : 'normal';
  }

  return (

    <li
      className={"list-group-item " + isSelected()}
      style={ {fontWeight: highlightSelected()} }
      onClick={() => onVideoSelect(video)}
    >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>

      </div>
    </li>

  );
};

export default VideoListItem;

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
