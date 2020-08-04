
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

import { Fonts } from '../../../src/utils/Fonts';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {

        content: {
          backgroundColor:"#1D1C19",
          shadowColor: '#0FABEE',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.4,
          shadowRadius: 2
        },
        foreground: {
          flex: 1,
          justifyContent: 'center',
          alignSelf:'center',
          width:"100%"
          
        },
        name: {
          color: 'white',
          fontSize: 20,
          alignSelf:"flex-start",
          paddingLeft:10,
          fontWeight:"bold"
        },
        bio: {
          color: 'white',
          fontSize: 15,
          alignSelf:"center",
          paddingLeft:10,
          fontWeight:"bold",
          marginTop:5
        },
        headerWrapper: {
          backgroundColor: '#1D1C19',
          width: '100%',
          paddingHorizontal: 24,
          flexDirection: 'row',
          alignItems: 'center'
        },
        headerTitle: {
          fontSize: 16,
          color: 'white',
          margin: 12
        },
        tabsWrapper: {
          paddingVertical: 12
        },
        tabTextContainerStyle: {
          backgroundColor: 'white',
          borderRadius: 18
        },
        tabTextContainerActiveStyle: {
          backgroundColor: '#1D1C19'
        },
        tabText: {
          fontSize: 16,
          lineHeight: 20,
          paddingHorizontal: 12,
          paddingVertical: 8,
          color: 'white',
          fontFamily: Fonts.RB
        },
        img:{      
          width:60 , 
          height:60, 
          alignSelf:"flex-start",
          borderRadius:53,
          marginTop:20,
          marginLeft:20
          },
          loading:{      
            width:200 , 
            height:200, 
            alignSelf:"center",
            borderRadius:53,
            marginTop:20,
            marginLeft:20
            },
      }