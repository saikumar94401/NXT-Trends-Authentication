import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="app-container">
    <div className="home-container">
      <Header />
      <div className="body-container">
        <div className="body-content-container">
          <h1 className="body-content-heading">
            CLOTHES THAT GET YOU <br />
            NOTICED
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt=" clothes that get you noticed"
            className="body-content-small-image"
          />
          <p className="body-content-text">
            Fashion is part of the daily air, and its application can be
            sometimes unclear. Though the term fashion connotes difference, as
            in the new fashions of the season, it can also connote sameness, for
            example in reference to the fashions of the 1960s, implying a
            general uniformity. Fashion can signify the latest trends, but may
            often reference fashions of a previous era, leading to the
            reappearance of fashions from a different time period. While what is
            fashionable can be defined by a relatively insular, esteemed and
            often rich aesthetic elite who make a look exclusive, such as
            fashion houses and
          </p>
          <button className="body-content-button" type="button">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt=" clothes that get you noticed"
          className="body-content-image"
        />
      </div>
    </div>
  </div>
)

export default Home
