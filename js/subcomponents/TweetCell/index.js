import React, { Component } from "react";
import { Image, TouchableOpacity, Linking, ScrollView,TextInput,View,Text} from "react-native";
import styles from "./styles";
import axios from "axios";

const logo = require('../../../assets/images/profile.jpg')

export default class TweetCell extends React.Component {

constructor(props){
  super(props);
}

 render(){
   return(

   <View>

   <View style={styles.background}>


    <View style={{flexDirection:"row"}}>

    <Image source={{uri:this.props.profileImage}} style={styles.img} />  

    <Text style={styles.fullName}>{this.props.name}</Text>
    <Text style={styles.username}>{this.props.username}</Text>

    </View>

      <Text style={styles.tweet}>
            {this.props.tweet}
      </Text> 

   </View>

  


     
  </View>

       
   );
 }
}


