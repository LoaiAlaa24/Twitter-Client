
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

import { Fonts } from '../../../src/utils/Fonts';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {

background:
            { backgroundColor:"#1D1C19",
            width:deviceWidth,
            height:deviceHeight,
            position:"absolute",
            alignSelf:"center",
            justifyContent:"center",},




img:{      
                width:40 , 
                height:40, 
                alignSelf:"center",
                justifyContent:"center",
                borderRadius:53
                },

loginCont:{
                borderWidth:1,
                borderRadius:49,
                borderColor:"#0FABEE",
                width:deviceWidth-41,
                height:299,
                alignSelf:"center",
                marginTop:"10%"},

language:{          color:"white",
                    alignSelf:"flex-end",
                    fontSize:15,
                    marginRight:10,
                    fontFamily:Fonts.RB
                },

};
