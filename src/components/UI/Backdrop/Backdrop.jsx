import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Backdrop.module.css";

const Backdrop = props => (
  <Aux>
    <div>Toolbar, SideDrower, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Backdrop;
