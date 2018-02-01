import React, { Component } from "react";
import Home from "../containers/home/";
import BlankPage2 from "../containers/blankPage2";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../containers/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    BlankPage2: { screen: BlankPage2 }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
