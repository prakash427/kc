
import React,{useEffect} from 'react';
import WelcomeScreen from './screens/welcomescreen';
import LanguageScreen from './screens/languagescreen.js';
import Homescreen from './screens/homescreen/index.js';
import Navigator from './screens/stacknavigator/index.js';
import Image from './screens/swipe/com.js';
import Stack from './screens/stacknavigator/stack.js';

const App = () => {
  return (
   <Navigator/>
  );
};

export default App;
