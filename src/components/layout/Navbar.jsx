import { Link } from "react-router-dom";
import "../../style/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>
            Quest<span>ForGame</span>
          </h1>
        </div>
        <div className="navbar-menu">
          <div className="navbar-list">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/review">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
          <div className="navbar-eks">
            {/* <a href="">
              <Search />
            </a> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
