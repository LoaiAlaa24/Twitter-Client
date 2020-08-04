// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

let strings = new LocalizedStrings({
 "en-US":{
   Login:"Login in to Twitter",
   Username:"Username",
   Password:"Password",
   Followers:"Followers",
   LoginBtn:"Login",
   Tweets:"Tweets"
 },
 en:{
  Login:"Login in to Twitter",
  Username:"Username",
  Password:"Password",
  Followers:"Followers",
  LoginBtn:"Login",
  Tweets:"Tweets"
 },
 ar: {
   Login:"ادخل علي تويتر",
   Username:"اسم المستخدم",
   Password:"كلمة السر",
   Followers:"المتابعين",
   LoginBtn:"دخول",
   Tweets:"تغريدات"
 }
});

export default strings;