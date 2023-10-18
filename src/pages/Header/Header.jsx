import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <h1>Bookstore</h1>
        <span className={classes.icon}>
          <i className="fa-solid fa-cart"></i>
        </span>
      </header>
      <Outlet />
    </>
  );
};

export default Header;