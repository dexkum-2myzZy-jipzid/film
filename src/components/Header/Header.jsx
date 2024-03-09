import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import { useTheme } from "../Context/ThemeConext";
import logo from "../../assets/film-logo.jpeg";

function Header({ setPage }) {
  const { toggleTheme } = useTheme();

  return (
    <header className="header">
      <a
        className="header__skip-link"
        href={`${window.location.pathname}#main`}
        aria-label="Skip to main content link">
        Skip to main content
      </a>
      <a className="header__logo" href="#/" aria-label="Home link">
        <img className="header__logo-img" src={logo} alt="film logo" />
      </a>
      <h1 className="header__title">Film World</h1>
      <button
        onClick={toggleTheme}
        className="header__theme-switch"
        aria-label="Theme switch button">
        <i className="header__theme-switch-icon"></i>
      </button>
      <span className="header__span"></span>
      <Navbar className="header__navbar" setPage={setPage} />
    </header>
  );
}

export default Header;
