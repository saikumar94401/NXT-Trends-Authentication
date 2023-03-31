import './index.css'

const Header = () => (
  <div className="header-main-container">
    <nav className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo-image"
      />
      <ul className="nav-options-container">
        <li className="option">Home</li>
        <li className="option">Products</li>
        <li className="option">Cart</li>
        <button className="logout" type="button">
          Logout
        </button>
      </ul>
      <div className="log-out-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="log-out-image"
        />
      </div>
    </nav>
    <div className="nav-options-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
        alt="nav home"
        className="nav-options-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
        alt="nav products"
        className="nav-options-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-options-image"
      />
    </div>
  </div>
)

export default Header
