import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import AllRestaurants from '../AllRestaurants'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

class Home extends Component {
  state = {offersList: [], isLoading: false}

  componentDidMount() {
    this.getOffersList()
  }

  getOffersList = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.offers.map(offer => ({
        imageUrl: offer.image_url,
        id: offer.id,
      }))
      this.setState({
        offersList: updatedData,
        isLoading: false,
      })
    }
  }

  renderOffersList = () => {
    const {offersList} = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
    }

    return (
      <div className="container">
        <ul className="un-list">
          <Slider {...settings} className="slider">
            {offersList.map(each => (
              <li key={each.id}>
                <img
                  src={each.imageUrl}
                  className="carousel-image"
                  alt="offer"
                />
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Oval" color="gold" height="40" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <Header />
        {isLoading ? (
          this.renderLoader()
        ) : (
          <div>
            <div className="home-offers-image">{this.renderOffersList()}</div>
            <AllRestaurants />
          </div>
        )}
        <Footer />
      </div>
    )
  }
}

export default Home
