import React, { Component } from "react";
import Login from "../containers/login/";
import Home from "../containers/home/";
import AddQuestionContainer from "../containers/addQuestionContainer"
import MainNativeSmile from "../containers/mainNativeSmile"
import HomeDrawerRouter from "./HomeDrawerRouter";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default (StackNav = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  AddQuestionContainer: { screen: AddQuestionContainer },
  MainNativeSmile:{screen:MainNativeSmile}
}));
