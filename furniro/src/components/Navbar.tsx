import { Link } from "react-router-dom";
import AccountIcon from "../assets/icon/account-alert-outline.svg";
import HeartIcon from "../assets/icon/icons_heart.svg";
import SearchIcon from "../assets/icon/icons_search.svg";
import ShoppingCartIcon from "../assets/icon/shopping-cart-outlined.svg";
import './styles.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="/logo.svg" alt="logo" className="logo" />
        <h1 className="logo-text">Furniro</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/shop" className="nav-item">Shop</Link>
        </li>
        <li>
          <a href="#" className="nav-item">About</a>
        </li>
        <li>
          <a href="#" className="nav-item">Contact</a>
        </li>
      </ul>
      <ul className="icon-links">
        <li><a href="#"><img src={AccountIcon} alt="account" /></a></li>
        <li><a href="#"><img src={SearchIcon} alt="search" /></a></li>
        <li><a href="#"><img src={HeartIcon} alt="liked" /></a></li>
        <li><a href="#"><img src={ShoppingCartIcon} alt="shopping cart" /></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
