import React, { Component } from "react";
import{View , Text} from "native-base"
import { Image, TouchableOpacity, Linking, ScrollView,TextInput,AppState} from "react-native";
import styles from "./styles";
import strings from "./strings";
import axios from "axios";

import {TWLoginButton} from 'react-native-simple-twitter'
import twitter from 'react-native-simple-twitter'
import AsyncStorage from '@react-native-community/async-storage'

import { getFollowers, setUser, cachedUser,
  setLangEng , setLangAr,
 } from './actions';


 import { bindActionCreators } from 'redux';
 import { connect } from 'react-redux';
 import { Actions } from "react-native-router-flux";

// import { Fonts } from "../../../src/utils/Fonts";
const logo = require('../../../assets/images/twitter-logo.jpg')
const loading = require('../../../assets/images/rta-loading.gif')

class HomePage extends React.Component {
 
    state = {
        isConnected: true,
        appState: AppState.currentState
    };

    constructor(props){
      super(props)

      this.props.cachedUser()
    }

 onSuccess = async (user) => {
  
    // this.setState({
    //   loading:true
    // })

    const { setUser,lang} = this.props;

    setUser(user)
    // Actions.followersPage({lang: lang, results:user.users})
    // AsyncStorage.setItem("user",JSON.stringify(user))
    // this.getFollowers()
    
  }


  onClose = (e) => {
    console.log("press close button")
  }

  onError = (err) => {
    console.log(err)
  }

 render(){
  const { setLangAr,setLangEng,loading,lang,setUser} = this.props;
 
   return(
   <View>
   <View style={styles.background}>
   </View>


{strings.getLanguage() == "en" && 

<TouchableOpacity onPress={() => {
               setLangAr()
        }}>

<Text style={styles.language}>

        Arabic

</Text>
</TouchableOpacity>
 }

{strings.getLanguage() == "ar" && 

<TouchableOpacity onPress={() => {
           setLangEng()
              }}>

<Text style={styles.language}>

        English

</Text>
</TouchableOpacity>
 }

         <View styles={styles.container}>
           <Image source={logo} style={styles.img} />  
        </View>


    {this.props.isLoading?
  
        <Image source={loading} style={{width:100,height:100,alignSelf:"center",marginTop:"20%"}} />

          :
     
      <TWLoginButton
      style={styles.loginWithTwitter}
      type="TouchableOpacity"
      onPress={this.onPress}
      onGetAccessToken={this.onGetAccessToken}
      onSuccess={this.onSuccess}
      onClose={this.onClose}
      onError={this.onError}>

      <Text style={styles.loginText}>{strings.Login}</Text>

      </TWLoginButton>


  }

        </View>
   );
 }
}

/* istanbul ignore next */
function mapStateToProps(state) {
    // console.log(state.homePageReducer.lang)
    return {
        email: state.homePageReducer.email,
        arabicBtn: state.homePageReducer.arabicBtn,
        lang:state.homePageReducer.lang,
        isLoading:state.homePageReducer.isLoading,

    };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getFollowers, setUser, cachedUser,
        setLangEng , setLangAr}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


