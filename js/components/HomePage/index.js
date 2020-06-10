import React, { Component } from "react";
import{View , Text} from "native-base"
import { Image, TouchableOpacity, Linking, ScrollView,TextInput} from "react-native";
import styles from "./styles";
import strings from "./strings";
import axios from "axios";

import {TWLoginButton} from 'react-native-simple-twitter'
import twitter from 'react-native-simple-twitter'
import AsyncStorage from '@react-native-community/async-storage'

// import { Fonts } from "../../../src/utils/Fonts";
const logo = require('../../../assets/images/twitter-logo.jpg')
const loading = require('../../../assets/images/rta-loading.gif')

export default class HomePage extends React.Component {

constructor(props){
  super(props);

  this.state={
        email: "",
        arabicBtn: false,
        lang:"",
        isLoggedIn:false,
        loading:false,
        lastRefresh: Date(Date.now()).toString(),
  }

  AsyncStorage.getItem('user').then((result)=>{

    if(result!=null){

      AsyncStorage.getItem('followers').then((result)=>{

           this.props.navigation.navigate("followersPage",{ lang: this.state.lang, results:JSON.parse(result) })

      })

    }



  })
  this.refreshScreen = this.refreshScreen.bind(this)
  this._onSetLanguageToArabic = this._onSetLanguageToArabic.bind(this);
  this._onSetLanguageToEnglish = this._onSetLanguageToEnglish.bind(this);
  this.onSuccess = this.onSuccess.bind(this);
  // this.handleLogin = this.handleLogin.bind(this);
}

refreshScreen() {
  this.setState({ lastRefresh: Date(Date.now()).toString() })
}


async _onSetLanguageToArabic() {
    strings.setLanguage('ar');
    this.setState({ lang:"ar" });
  }

  async _onSetLanguageToEnglish() {
    strings.setLanguage('en');
    this.setState({ lang:"en" });
  }

  // handleLogin(){
  //       this.props.navigation.navigate("followersPage",{ lang: this.state.lang })
  // }

 async componentWillMount() {
    if (this.props.user.token) {
      twitter.setAccessToken(this.props.user.token, this.props.user.token_secret)

      try {
        const user = await twitter.get("account/verify_credentials.json", { include_entities: false, skip_status: true, include_email: true })
        this.props.dispatch({ type: "USER_SET", user: user })

        this.props.dispatch(NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' })
          ]
        }))
      } catch (err) {
        console.log(err)
      }
    }
  }


  async getFollowers(){

    try {
      await twitter.api('GET', 'followers/list.json').then((async results=>{
           AsyncStorage.setItem("followers",JSON.stringify(results.users))
        await   this.setState({
              loading:false
                 })
      await  this.props.navigation.navigate("followersPage",{ lang: this.state.lang, results:results.users })
      this.refreshScreen()
      }))
   } catch (e) {
     console.warn(e);
   }

  }


 onSuccess = async (user) => {
  
    this.setState({
      loading:true
    })

    AsyncStorage.setItem("user",JSON.stringify(user))

    this.getFollowers()
    
  }


  onClose = (e) => {
    console.log("press close button")
  }

  onError = (err) => {
    console.log(err)
  }
 render(){
   return(
   <View>
   <View style={styles.background}>
   </View>


{strings.getLanguage() == "en" && 

<TouchableOpacity onPress={() => {
             this._onSetLanguageToArabic() 
        }}>

<Text style={{color:"white",alignSelf:"flex-end",fontSize:15,marginTop:60,marginRight:10}}>

        Arabic

</Text>
</TouchableOpacity>
 }

{strings.getLanguage() == "ar" && 

<TouchableOpacity onPress={() => {
             this._onSetLanguageToEnglish() 
              }}>

<Text style={{color:"white",alignSelf:"flex-end",fontSize:15,marginTop:60,marginRight:10}}>

        English

</Text>
</TouchableOpacity>
 }

         <View styles={styles.container}>
        <Image source={logo} style={styles.img} />  
                </View>


        <View style={styles.loginCont}>

    {this.state.loading?
  
        <Image source={loading} style={{width:100,height:100,alignSelf:"center",marginTop:"20%"}} />

          :
      

      <TWLoginButton
  style={styles.loginInWithTwitter}
  type="TouchableOpacity"
  onPress={this.onPress}
  onGetAccessToken={this.onGetAccessToken}
  onSuccess={this.onSuccess}
  onClose={this.onClose}
  onError={this.onError}><Text style={styles.loginText}>{strings.Login}</Text></TWLoginButton>

  

  }

        </View>

        </View>
   );
 }
}


