
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
language:{color:"white",alignSelf:"flex-end",fontSize:15
,marginTop:60,marginRight:10,fontFamily:Fonts.RB},

img:{          width:110 , 
                height:60, 
                alignSelf:"center",
                justifyContent:"center",
                marginTop:"40%"
                },
loginCont:{
                    borderWidth:1,
                    borderColor:"#0FABEE",
                    borderRadius:20,
                },
loginWithTwitter:{ width: "50%", 
                    height: 60,
                    backgroundColor:"#1D1C19",
                    alignSelf:"center",
                    borderWidth:1,
                    borderColor:"#0FABEE",
                    borderRadius:10,
                    marginTop:"20%"}
, 

loginText:{ 
                    textAlign: "center", 
                    color: "#0FABEE",
                    justifyContent:"center",
                    marginTop:"8%",
                    fontFamily:Fonts.RB }

    };
