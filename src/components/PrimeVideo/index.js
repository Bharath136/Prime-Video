import Slider from 'react-slick'
import {Component} from 'react'
import MovieItem from '../MovieItem'
import MoviesSlider from '../MoviesSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const settings = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    }

    const {moviesList} = this.props

    const comedyMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )
    const actionMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )
    return (
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-banner"
        />
        <div className="prime-videos-container">
          <h1 className="prime-video-heading">Action Movies</h1>
          <MoviesSlider moviesList={actionMovies} />
          <h1 className="prime-video-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
