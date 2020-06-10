import React from 'react'
import { Text, View, Animated, StyleSheet ,Image,Modal,AsyncStorage} from 'react-native'
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import TweetCell from '../../subcomponents/TweetCell'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image';
import twitter from 'react-native-simple-twitter'
import strings from "./strings";

const header = require('../../../assets/images/header.jpg')
const logo = require('../../../assets/images/profile.jpg')
const loading = require('../../../assets/images/rta-loading.gif')


import styles from "./styles";

export default class TabsScreen extends React.Component {
  state = {
    scroll: new Animated.Value(0),
    ModalVisibleStatus:false,
    tweets:[],
    loading:false
  }

  constructor(props){
      super(props)

    // Getting the user's chosen language
    if(this.props.navigation.state.params.lang == 'ar'){

          this._onSetLanguageToArabic()

      }else{

        this._onSetLanguageToEnglish()

      }



  }

  componentDidMount() {
    this.getTweets() // To get user's tweets
    const { scroll } = this.state
    scroll.addListener(({ value }) => (this._value = value))
  }


// API request to get tweets specific to requested username

async getTweets(){

  await this.setState({
        loading:true
  })

  try {
   await  twitter.api('GET', 'statuses/user_timeline.json',{screen_name:this.props.navigation.state.params.username}).then((async results=>{
      await this.setState({
        tweets:results
      })
     }))
  } catch (e) {
    console.warn(e);
  }

  await this.setState({
    loading:false
})

}

// Creating Tweets cells 

renderTweets(){
    var arrayOfTweets = []
    var loopLength = 0
    var tweets=null
   const urlHeader = "https://"
   for(var i = 0; i<this.state.tweets.length ;i++ ){

    var str = this.state.tweets[i].text;

    var textAndImage = str.split(urlHeader)
    var imageUrl = ""
    var tweetText = ""

    if(textAndImage.length > 1){
      tweetText = textAndImage[0]
      imageUrl = urlHeader+textAndImage[1]
    }else{
      tweetText = textAndImage[0]
    }

     arrayOfTweets.push(
              <TweetCell
              name={this.props.navigation.state.params.name}
              username={this.props.navigation.state.params.username}
              profileImage={this.props.navigation.state.params.profileImage}
              tweet={tweetText}
              tweetImage={imageUrl}
              />
            )
          }

    return arrayOfTweets
  }

//Render Tweets in the page
  renderContent = () => (
    this.state.loading?
    <View style={styles.content} style={{height:500}}>

      <Image source={loading} style={styles.loading} />       

    </View>
    :
    <View style={styles.content} >

  

      {this.renderTweets()}

    </View>
  )

async _onSetLanguageToArabic() {
    strings.setLanguage('ar');
    this.setState({});
    AsyncStorage.setItem('lang','ar')
  }

  async _onSetLanguageToEnglish() {
    strings.setLanguage('en');
    this.setState({});
    AsyncStorage.setItem('lang','en')
  }


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
          
    <Image source={{uri:this.props.navigation.state.params.profileImage}}  style={styles.img} />  

           <Text style={styles.name}>{this.props.navigation.state.params.name}</Text>
           <Text style={styles.name}>{this.props.navigation.state.params.username}</Text>
    <View>
    <Text style={styles.bio}>{this.props.navigation.state.params.bio}</Text>
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
          {/* <Text style={styles.headerTitle}>Loay Alaa</Text> */}
                </Animated.View>


      </View>
    )
  }
  

  render() {
    const { scroll } = this.state

 
      
        return(
            <StickyParallaxHeader
            bounces = {false}
            backgroundImage={{ uri: this.props.navigation.state.params.header}}
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

