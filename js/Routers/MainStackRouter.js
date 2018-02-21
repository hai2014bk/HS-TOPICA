import React, { Component } from "react";
import Login from "../containers/login/";
import Home from "../containers/home/";
import BlankPage from "../containers/blankPage";
import BlankPage2 from "../containers/blankPage2"
import HomeDrawerRouter from "./HomeDrawerRouter";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default (StackNav = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  BlankPage: { screen: BlankPage },
  BlankPage2:{screen:BlankPage2}
}));
