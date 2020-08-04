/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Scene, Router,Stack } from "react-native-router-flux";
import HomePage from './app/components/HomePage/homePageContainer'
import FollowersPage from './app/components/FollowersPage/followersPageContainer'
import TabsScreen from './app/components/TabsScreen/tabsScreenContainer'
import { connect, Provider } from "react-redux";
import configureStore from './app/store/configureStore'

console.disableYellowBox = true;
console.disableRedBox = true;

import twitter from 'react-native-simple-twitter'
twitter.setConsumerKey("6rM3a6KtHSDPdmLAZ1xA8ba7a","ha4gF7Eh5lQ0YEuFSpbw5b42OEQgZ7v0GMUbj8PQxZHRHlQQMR")

const store = configureStore();

const App = () => (
  <Provider store={store}>
  <Router>
    <Stack key="root">
      <Scene hideNavBar={true} key="homePage" component={HomePage} title="HomePage" />
      <Scene hideNavBar={true} key="followersPage" component={FollowersPage} title="FollowersPage" />
      <Scene hideNavBar={true} key="tabsScreen" component={TabsScreen} title="FollowersPage" />
    </Stack>
  </Router>
  </Provider>

);


export default App;
