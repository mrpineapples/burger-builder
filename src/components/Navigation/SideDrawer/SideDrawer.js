import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop"
import classes from "./SideDrawer.css"

const SideDrawer = props => {
  let attachClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Fragment>
  )
}


export default SideDrawer;