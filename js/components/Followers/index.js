import React, { Component, useReducer } from "react";
import {
  View,
  Text,
  Button
} from "native-base";
import { Image, TouchableOpacity, Linking, ScrollView,TextInput, AsyncStorage} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";
import strings from "./strings";
import axios from "axios";
import {Header} from 'react-native-elements';
import FollowersCell from "../../subcomponents/FollowersCell";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const profile = require('../../../assets/images/profile.jpg')

export default class FollowersPage extends React.Component {

constructor(props){
  super(props);

  this.state={
    lastRefresh: Date(Date.now()).toString(),
  }

  if(this.props.navigation.state.params.lang == 'ar'){
    this._onSetLanguageToArabic()
  }else{
    this._onSetLanguageToEnglish()
  }
  this.refreshScreen = this.refreshScreen.bind(this)
}

//Pulling state update to refresh screen
refreshScreen() {
  this.setState({
    lastRefresh: Date(Date.now()).toString()
  })
}

//Setting langauge to user's chosen language
async _onSetLanguageToArabic() {
    strings.setLanguage('ar');
    this.setState({});
  }

  async _onSetLanguageToEnglish() {
    strings.setLanguage('en');
    this.setState({});
  }

//Creating followers cell and passing to subcomponent 
renderFollowers(){
    var arrayOfFollowers =[]
    const results = this.props.navigation.state.params.results;

    for(var  i = 0; i < results.length; i++){
     console.log(results[i].profile_banner_url)
     arrayOfFollowers.push(

        <FollowersCell 
        navigation={this.props.navigation} 
        lang={ strings.getLanguage()}   

        name={results[i].name}
        username={results[i].screen_name}
        bio={results[i].description}
        header={results[i].profile_banner_url}
        profileImage={results[i].profile_image_url}

        />
        
     )
    }
    return arrayOfFollowers;
}

 render(){
   return(
   <View style={{paddingBottom:"22%"}} >
   <View style={styles.background}>
   </View>

   <Header
    leftComponent={
                    <TouchableOpacity onPress={()=> this.refreshScreen()}>
                    <Icon name="refresh" size={25} color="#fff" />
                    </TouchableOpacity>


    }
    centerComponent={{ text: strings.Followers, style: { color: 'white', fontSize:18 } }}

    rightComponent = {

        <TouchableOpacity onPress={() => {

    strings.getLanguage() == "en"? this._onSetLanguageToArabic() : this._onSetLanguageToEnglish()
             
             }}>

        <Text style={styles.language}>

    { strings.getLanguage() == "en"? "Arabic" : "English" }

        </Text>
        </TouchableOpacity>

        } 

    
        containerStyle={{
            backgroundColor: '#183640',
            justifyContent: 'space-around',
            borderBottomColor:"black"
        }}
/>

   <ScrollView style={{overflow:"scroll"}}>
     
        <View style={{height:"100%"}}>
                {this.renderFollowers()}

        </View>
        </ScrollView>

        </View>
   );
 }
}


