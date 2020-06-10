import React, { Component } from "react";
import {
  View,
  Text,
  Icon,
  Button
} from "native-base";
import { Image, TouchableOpacity, Linking, ScrollView,TextInput} from "react-native";
import styles from "./styles";
import axios from "axios";

// import { Fonts } from "../../../src/utils/Fonts";
const logo = require('../../../assets/images/profile.jpg')
const header = require('../../../assets/images/header.jpg')

export default class ProfileHeader extends React.Component {

constructor(props){
  super(props);
}

 render(){
   return(

   <View>

   <View style={styles.background}>
  
    <Image source={header} style={styles.header} />  


    <Image source={logo} style={styles.img} />  
    <Text style={styles.fullName}>Loay Alaa</Text>
    <Text style={styles.fullName}>@thelo2ai</Text>

      <Text style={styles.bio}>

          Loves pizza and burger

      </Text> 


   </View>

  


     
  </View>

       
   );
 }
}


