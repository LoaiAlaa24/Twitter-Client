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


export const getFollowers = () =>  (dispatch, getState) => {
    try {
        twitter.api('GET', 'followers/list.json').then((async results=>{
        AsyncStorage.setItem("followers",JSON.stringify(results.users))
        await Actions.followersPage({results:results.users})
        dispatch(getFollowersAction(JSON.stringify(results.users)))

        }))
     } catch (e) {
       console.warn(e);
     }
};

export const cachedUser = () => (dispatch,getState) =>{

  console.log(AsyncStorage.getItem('user'))

  AsyncStorage.getItem('user').then((result)=>{

    if(result!=null){

      AsyncStorage.getItem('followers').then((result)=>{

          //  this.props.navigation.navigate("followersPage",{ lang: this.state.lang, results:JSON.parse(result) })
           Actions.followersPage({results:JSON.parse(result)})
      })

    }
  })


}


export const getFollowersAction = followers => ({
    type: "ACTION_GET_FOLLOWERS",
    data: followers
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



