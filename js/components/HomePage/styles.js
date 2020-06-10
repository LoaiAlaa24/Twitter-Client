
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

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


img:{          width:110 , 
                height:60, 
                alignSelf:"center",
                justifyContent:"center",
                marginTop:"40%"
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
                    marginTop:"40%" }

    };
