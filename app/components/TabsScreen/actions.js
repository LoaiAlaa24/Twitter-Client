import { AsyncStorage, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

import strings from "./strings";

import twitter from 'react-native-simple-twitter'

export const setUser = (user) => (dispatch, getState) => {
    AsyncStorage.setItem("user", JSON.stringify(user))
    dispatch(setUserAction(user))
    dispatch(getFollowers())
};


export const setUserAction = user => ({
    type: "ACTION_SET_USER",
    data: user
  });


export const getTweets = (username) =>  (dispatch, getState) => {

dispatch(getTweetsLoadingAction())

// console.log(username)

  try {
    twitter.api('GET', 'statuses/user_timeline.json',{screen_name:username}).then((async results=>{
                 dispatch(getTweetsAction(results))
                // console.log(results)
     }))
  } catch (e) {
    console.warn(e);
  }


};

export const getTweetsLoadingAction = () => ({
    type: "ACTION_GET_TWEETS_LOADING"
  });

  export const getTweetsAction = (tweets) => ({
    type: "ACTION_GET_TWEETS",
    data:tweets
  });


  export const setLangEng = () => (dispatch,getState) =>{


    strings.setLanguage('en');
    dispatch(setLangEngAction())
    this.setState({}) 
  
  }

  export const setLangAr = () => (dispatch,getState) =>{

    strings.setLanguage('ar');
    dispatch(setLangArAction())
    this.setState({}) 
}
export const setLangEngAction = () => ({
  type: "SET_LANGUAGE_EN",
});

export const setLangArAction = () => ({
  type: "SET_LANGUAGE_AR"
});



