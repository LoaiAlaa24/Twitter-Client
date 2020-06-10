
const React = require('react-native');

const { StyleSheet, Dimensions } = React;
import { Fonts } from '../../../src/utils/Fonts';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {

background:
            { backgroundColor:"#1D1C19",
            width:deviceWidth,
            alignSelf:"center",
            justifyContent:"center",
            marginTop:"1%",
            borderBottomWidth:2,
            paddingBottom:30,
            paddingTop:10,
            shadowColor: '#0FABEE',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.4,
            shadowRadius: 2
        },


 img:{      
                width:60 , 
                height:60, 
                alignSelf:"center",
                justifyContent:"center",
                borderRadius:53
                },
                
  fullName:{
      alignSelf:"center",
      color:"#19AAEE",
      fontFamily:Fonts.RM

  }    ,
  
  bio:{
      paddingTop:20,
      marginLeft:20,
      color:"white"
  }

};
