import React, { Component, useReducer } from "react";
import {
  View,
  Text,
  Button
} from "native-base";
import { Image, TouchableOpacity, Linking, ScrollView,TextInput, AsyncStorage,AppState} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";
import strings from "./strings";
import axios from "axios";
import {Header} from 'react-native-elements';
import FollowersCell from "../../subComponents/FollowersCell";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Fonts } from '../../../src/utils/Fonts';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";

import { getFollowers, setUser, cachedUser,
    setLangEng , setLangAr,
   } from './actions';
   
const profile = require('../../../assets/images/profile.jpg')

class FollowersPage extends React.Component {
 
state = {
        isConnected: true,
        appState: AppState.currentState
    };

//Setting langauge to user's chosen language
    async _onSetLanguageToArabic() {
        this.props.setLangAr()
        this.setState({});
  }

  async _onSetLanguageToEnglish() {
        this.props.setLangEng()
        this.setState({});
  }

//Creating followers cell and passing to subcomponent 
renderFollowers(){
    var arrayOfFollowers =[]
    const results = this.props.navigation.state.params.results;

    for(var  i = 0; i < results.length; i++){
      
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
    const { setLangAr,setLangEng,loading,lang,setUser} = this.props;
    // console.log(strings.getLanguage())
   return(
   <View style={{paddingBottom:"22%"}} >
   <View style={styles.background}>
   </View>

   <Header


    leftComponent={
       
                    <Icon name="refresh" size={25} color="#fff" />
    

    }


    centerComponent={{ text: strings.Followers, style: { color: 'white', fontSize:18,fontFamily:  Fonts.RB } }}



    rightComponent = {

        <TouchableOpacity onPress={() => {

             strings.getLanguage() == "en"? this._onSetLanguageToArabic(): this._onSetLanguageToEnglish()
             
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
function mapStateToProps(state) {   
    // console.log(state.followersPageReducer.lang)
    return {
        lang:state.followersPageReducer.lang,
        isLoading:state.followersPageReducer.isLoading,
    };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getFollowers, setUser, cachedUser,
        setLangEng , setLangAr}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowersPage);


