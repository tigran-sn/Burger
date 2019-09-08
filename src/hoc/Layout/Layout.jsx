import React, { Component } from "react";
import Wrap from "../Wrap/Wrap";
import Toolbar from "../../components/Navigation/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = { showSideDrawer: false };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState, prevProps) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      };
    });
  };
  render() {
    return (
      <Wrap>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Wrap>
    );
  }
}

export default Layout;
