import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-black text-white p-7">
        <div className="container mx-auto flex justify-between items-center">
          Brand LOGO
          <ul className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <li>
              <Link to="/members" className="hover:text-gray-300">
                History
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gray-300">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
