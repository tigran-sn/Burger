import React from "react";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import Backdrop from "../../UI/Backdrop";
import Wrap from "../../../hoc/Wrap/Wrap";
import classes from "./SideDrawer.module.css";

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Wrap>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Wrap>
  );
};

export default SideDrawer;
