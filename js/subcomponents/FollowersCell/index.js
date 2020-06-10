import React, { Component } from "react";
import { Image, TouchableOpacity, Linking, ScrollView,TextInput, View,Text} from "react-native";
import styles from "./styles";
import axios from "axios";

// import { Fonts } from "../../../src/utils/Fonts";
const logo = require('../../../assets/images/profile.jpg')

export default class FollowersCell extends React.Component {

constructor(props){
  super(props);

}


 render(){

  const noBio = (this.props.bio == "")? true : false //Checking if the user has a bio

   return(


    //onPress navigate to TabsScreen with the users params
    <TouchableOpacity onPress={()=>
      
      this.props.navigation.navigate("TabsScreen",{"lang":this.props.lang,
      "name":this.props.name,
      "profileImage":this.props.profileImage,
      "username":this.props.username,
      "header": this.props.header,
      "bio":this.props.bio
    })
    
    }>

   <View>

   <View style={styles.background}>
  

    <Image source={{uri:this.props.profileImage}}  style={styles.img} />  
    <Text style={styles.fullName}>{this.props.name}</Text>
    <Text style={styles.fullName}>{this.props.username}</Text>


    {!noBio &&
      <Text style={styles.bio}>

               {this.props.bio}

      </Text> 
 }


   </View>

  


     
  </View>
  </TouchableOpacity>
       
   );
 }
}


