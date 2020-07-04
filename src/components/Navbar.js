import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarForm = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gray text-secondary ">
      <ul className="navbar-nav pl-5">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fa fa-pizza-slice "></i>
            {'  '}Pizza <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/">
            <i className="fa fa-hamburger "></i>
            {'  '}Burger<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/">
            <i className="fa fa-cocktail "></i>
            {'  '}Beverages <span className="sr-only">(current)</span>
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav pl-5 ml-auto pr-2">
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            <i className="fa fa-shopping-bag "></i>
            {'  '}Cart
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/">
            <i className="fa fa-user "></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
  return <div>{navbarForm()}</div>;
};
export default Navbar;
