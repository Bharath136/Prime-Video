import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  console.log(eachMovie)
  const {thumbnailUrl, videoUrl} = eachMovie

  const videoPopup = () => <ReactPlayer url={videoUrl} controls />

  return (
    <div className="movie-item">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="movie-url" />
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="close-button-container">
              <button
                type="button"
                className="trigger-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size={20} color="#231f20" />
              </button>
            </div>
            <div className="video-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
