import React from 'react'
import { Text, View, Animated, StyleSheet ,Image,Modal,AsyncStorage,AppState} from 'react-native'
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import TweetCell from '../../subComponents/TweetCell'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image';
import twitter from 'react-native-simple-twitter'
import strings from "./strings";

const header = require('../../../assets/images/header.jpg')
const logo = require('../../../assets/images/profile.jpg')
const loading = require('../../../assets/images/rta-loading.gif')

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";

import { getTweets, setLangEng , setLangAr} from './actions';


import styles from "./styles";

class TabsScreen extends React.Component {
  state = {
    scroll: new Animated.Value(0),
    ModalVisibleStatus:false,
    isConnected: true,
    appState: AppState.currentState
  }

  constructor(props){
    super(props)
    if(this.props.lang=="ar"){
      strings.setLanguage("ar")
    }else{
      strings.setLanguage("en")
    }
    
  }


  componentDidMount() {
    const {getTweets} = this.props
    // console.log(this.props.navigation.state.params.data.username)
     getTweets(this.props.navigation.state.params.data.username) // To get user's tweets
    // console.log("hey")
    const { scroll } = this.state
    scroll.addListener(({ value }) => (this._value = value))
  }



// Creating Tweets cells 

renderTweets(){
  const{tweets} = this.props;

    var arrayOfTweets = []
    var loopLength = 0
   const urlHeader = "https://"
  //  console.log(tweets)
   for(var i = 0; i<tweets.length ;i++ ){

    var str = tweets[i].text;

    var textAndImage = str.split(urlHeader)

     arrayOfTweets.push(
              <TweetCell
              name={this.props.navigation.state.params.data.name}
              username={this.props.navigation.state.params.data.username}
              profileImage={this.props.navigation.state.params.data.profileImage}
              tweet={str}
              />
            )
          }

    return arrayOfTweets
  }

//Render Tweets in the page
  renderContent = () => (

    this.props.isLoading?
    <View style={styles.content} style={{height:500}}>

      <Image source={loading} style={styles.loading} />       

    </View>
    :
    <View style={styles.content} >

  

      {this.renderTweets()}

    </View>
  )


  renderForeground = () => {
    const { scroll } = this.state
    const titleOpacity = scroll.interpolate({
      inputRange: [0, 106, 154],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    })
    return (
      <View style={styles.foreground}>
      
        <Animated.View style={{ opacity: titleOpacity }}>
          
    <Image source={{uri:this.props.navigation.state.params.data.profileImage}}  style={styles.img} />  

           <Text style={styles.name}>{this.props.navigation.state.params.data.name}</Text>
           <Text style={styles.name}>{this.props.navigation.state.params.data.username}</Text>
    <View>
    <Text style={styles.bio}>{this.props.navigation.state.params.data.bio}</Text>
    </View>
        </Animated.View>
  
      </View>
    )
  }

  renderHeader = () => {
    const { scroll } = this.state
    const opacity = scroll.interpolate({
      inputRange: [0, 160, 210],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })

    return (
      <View style={styles.headerWrapper}>

        <Animated.View style={{ opacity }}>

                </Animated.View>


      </View>
    )
  }
  

  render() {
    const { scroll } = this.state

 
      
        return(
            <StickyParallaxHeader
            bounces = {false}
            backgroundImage={{ uri: this.props.navigation.state.params.data.header}}
            foreground={this.renderForeground()}
            header={this.renderHeader()}
            parallaxHeight={200}
            headerHeight={90}
            headerSize={() => {}}
            onEndReached={() => {}}
            scrollEvent={Animated.event([{ nativeEvent: { contentOffset: { y: scroll } } }])}
            tabs={[
              {
                title: strings.Tweets,
                content: this.renderContent()
              }
            ]}
            tabTextStyle={styles.tabText}
            tabTextContainerStyle={styles.tabTextContainerStyle}
            tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
            tabsContainerBackgroundColor={'#1D1C19'}
            tabsWrapperStyle={styles.tabsWrapper}
          >
    
    
          </StickyParallaxHeader>

        )
    }
}
/* istanbul ignore next */
function mapStateToProps(state) {
    // console.log(state.tabsScreenReducer)
return {
tweets:state.tabsScreenReducer.tweets,
isLoading:state.tabsScreenReducer.isLoading,
lang:state.followersPageReducer.lang
};
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTweets, setLangEng , setLangAr}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsScreen);


