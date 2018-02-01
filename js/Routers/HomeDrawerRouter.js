import React, { Component } from "react";
import Home from "../containers/home/";
import BlankPage from "../containers/blankPage";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../containers/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    BlankPage: { screen: BlankPage }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
