import React from "react";
import classes from "./Logo.module.css";
import burgerLogo from "../../assetes/images/burger-logo.png";

const Logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Logo" />
  </div>
);

export default Logo;
