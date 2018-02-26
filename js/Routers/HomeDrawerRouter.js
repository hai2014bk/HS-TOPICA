import React, { Component } from "react";
import Home from "../containers/home/";
import AddQuestionContainer from "../containers/addQuestionContainer"
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../containers/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    AddQuestionContainer: { screen: AddQuestionContainer }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
