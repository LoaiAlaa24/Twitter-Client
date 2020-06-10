
import React from 'react';

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import i18n from "i18n-js";
import memoize from "lodash.memoize"; // Use for caching/memoize for better performance

import HomePage from './js/components/HomePage/index.js';
import FollowersPage from './js/components/Followers';
import TabsScreen from './js/components/TabsScreen';

import twitter from 'react-native-simple-twitter'
twitter.setConsumerKey("6rM3a6KtHSDPdmLAZ1xA8ba7a","ha4gF7Eh5lQ0YEuFSpbw5b42OEQgZ7v0GMUbj8PQxZHRHlQQMR")

console.disableYellowBox = true;

const AppNavigator = createStackNavigator({
  homePage: HomePage,
  followersPage: FollowersPage, 
  TabsScreen:TabsScreen,

  
},{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
  }}
);

const App = createAppContainer(AppNavigator)

export default App;
