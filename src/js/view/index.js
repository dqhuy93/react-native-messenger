import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Page from "./navigation";
import Write from "./write";
import Chat from "./chat";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Page,
      navigationOptions: () => ({})
    },
    Write: {
      screen: Write,
      navigationOptions: () => ({})
    },
    Chat: {
      screen: Chat,
      navigationOptions: () => ({})
    }
  },
  { headerMode: "none" }
);
const Root = createAppContainer(RootStack);

export default Root;