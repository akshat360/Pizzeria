import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Base({ children }) {
  return (
    <div id="base">
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
        <Link className="navbar-brand" to="/">
          <img
            className="img-responsive ml-3"
            style={{ width: '60px' }}
            alt="brandlogo"
            src="https://image.freepik.com/free-vector/pizza-logo-vector_25327-119.jpg"
          />
        </Link>
        <h3 className="mx-auto text-orange text-center">
          <i className="fa fa-phone-alt "></i> +91 9716540673
        </h3>
      </nav>
      <Navbar></Navbar>

      {/*BODY*/}
      <div className=" pb-5">{children}</div>
      {/*Footer*/}
      <hr className="bg-secondary" />
      <footer className="text-white pb-5 pl-5">
        Created by : akshataggarwal360@gmail.com |{' '}
        <a className="text-white" href="https://github.com/akshat360/">
          Github
        </a>
        {' | '}
        <a className="text-white" href="https://www.linkedin.com/in/akshat360/">
          Linkedin
        </a>{' '}
      </footer>
    </div>
  );
}
