import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.css";

const Layout = props => {
  const [sideDrawer, setSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawer(false);
  }

  const sideDrawerToggleHandler = () => {
    setSideDrawer(!sideDrawer);
  }

  return (
    <Fragment>
      <Toolbar 
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer 
        isAuth={props.isAuthenticated}
        closed={sideDrawerClosedHandler}
        open={sideDrawer} />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Fragment>
  )
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);