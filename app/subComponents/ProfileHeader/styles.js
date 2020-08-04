
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {

background:
            { backgroundColor:"#1D1C19",
            width:deviceWidth,
            alignSelf:"center",
            justifyContent:"center",
            marginTop:"1%",
            paddingBottom:30,
            paddingTop:10,

        },


 header:
        {
        backgroundColor:"#1D1C19",
        width:deviceWidth,
        height:119,
        alignSelf:"center",
        justifyContent:"center",
        marginTop:"1%",
        paddingBottom:30,
        paddingTop:10,
    },

 img:{      
                width:65 , 
                height:65, 
                alignSelf:"center",
                justifyContent:"center",
                borderRadius:53,
                marginTop:"-5%"
                },
                
  fullName:{
      alignSelf:"center",
      color:"#19AAEE"

  }    ,
  
  bio:{
      paddingTop:20,
      marginLeft:20,
      color:"white"
  }

};
