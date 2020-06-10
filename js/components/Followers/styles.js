
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
                marginTop:"10%"

},
language:{color:"white",alignSelf:"flex-end",fontSize:15,marginRight:10}
,field:{
    height:42,
    borderColor: '#383735',
    borderWidth: 2,
    width: 262,
    marginTop: '10%',
    textAlign: 'center',
    borderRadius:7,
    color:"white",
    backgroundColor:"#30617B",
    fontSize:18,
    alignSelf:"center",
},
loginButton: {
    height:30,
    width:131,
    backgroundColor:'#1D1C19',
    borderRadius:10,
    borderColor:"#0FABEE",
    borderWidth:1,
    marginTop:"10%",
    alignSelf:"center",
  },
loginText:{
    alignSelf:"center",
    justifyContent:"center",
    marginLeft:"25%",
    fontSize:15,
    color:"#0FABEE"
}
};
