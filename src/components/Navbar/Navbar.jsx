import React from "react";
import "./Navbar.css";
import { useState } from "react";

function Navbar({ className, setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");

  const items = [
    { name: "Home", path: "/" },
    { name: "Genre", path: "/genre-page" },
    { name: "PopularMovies", path: "/popular-movies" },
    { name: "Subscribe", path: "/subscribe-page" },
  ];

  // Function to handle page change when a navbar item is clicked
  function handlePageChange(e) {
    e.preventDefault();
    setSelectedItem(e.target.pathname);
    console.log(e.target.pathname);
    window.history.pushState(null, "", e.target.pathname);
    setPage(e.target.pathname);
    setIsOpen(false);
  }

  return (
    <nav className={className} aria-label="Main navigation">
      <button
        className="navbar__button"
        aria-label="Toggle Menu"
        onClick={() => setIsOpen((pre) => !pre)}>
        <i className="navbar__icon"></i>
      </button>
      <ul className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`navbar__item ${
              selectedItem === item.path ? "selected" : ""
            }`}
            aria-label={item.name}>
            <a
              className={`navbar__link ${
                selectedItem === item.path ? "selected" : ""
              }`}
              href={item.path}
              aria-label={item.name}
              onClick={handlePageChange}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
