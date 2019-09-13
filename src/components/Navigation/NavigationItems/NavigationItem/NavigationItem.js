import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";

import classes from "./NavigationItem.css";

const NavigationItem = props => (
  <BrowserRouter>
    <li className={classes.NavigationItem}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  </BrowserRouter>
);

export default NavigationItem;
