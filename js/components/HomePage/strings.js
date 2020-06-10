// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
 "en-US":{
   Login:"Login in to Twitter",
   Username:"Username",
   Password:"Password",
   Followers:"Followers",
   LoginBtn:"Login"
 },
 en:{
  Login:"Login in to Twitter",
  Username:"Username",
  Password:"Password",
  Followers:"Followers",
  LoginBtn:"Login"
 },
 ar: {
   Login:"ادخل علي تويتر",
   Username:"اسم المستخدم",
   Password:"كلمة السر",
   Followers:"المتابعين",
   LoginBtn:"دخول"
 }
});

export default strings;