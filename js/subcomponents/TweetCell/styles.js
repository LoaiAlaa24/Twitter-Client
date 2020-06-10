
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
                alignSelf:"flex-start",
                borderRadius:53,
                marginTop:20
                },
                
  fullName:{
      alignSelf:"center",
      color:"#19AAEE",
      marginLeft:5

  }    ,

  username:{
    alignSelf:"center",
    color:"#19AAEE64",
    marginLeft:5,

} ,
  bio:{
      marginLeft:65,
      marginTop:-25,
      color:"white"
  }

};
