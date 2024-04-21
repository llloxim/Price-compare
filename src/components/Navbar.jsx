import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-darkgreen text-white p-7">
        <div className="container flex justify-between items-center text-xl px-64">
          Mountain Bandits' Collection of Jokes
          <ul className="flex space-x-10">
            <Link to="/" className="hover:text-lightyellow">
              Home
            </Link>
            <li>
              <Link to="/Login" className="hover:text-lightyellow">
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
