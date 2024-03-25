
import React,{useEffect} from 'react';
import WelcomeScreen from './screens/welcomescreen';
import LanguageScreen from './screens/languagescreen.js';
import Homescreen from './screens/homescreen/index.js';
import Navigator from './screens/stacknavigator/index.js';
import Image from './screens/swipe/com.js';
import Stack from './screens/stacknavigator/stack.js';
import StreamingRecords from './screens/streamingrecordsscreen/index.js';
import Slides from './screens/swipe/com.js'
import ChirusdialoguesScreen from './screens/chirudialogues/index.js';
import MoviesdisplayScreen from './screens/moviesscreen/index.js';
import NewsScreen from './screens/news/index.js';
import EventScreen from './screens/eventsscreen/index.js';
import Newspage from './screens/newspage/index.js';
import AudioPlayer from './screens/audio/index.js';

const App = () => {
  return (
   <Navigator/>
  );
};

export default App;
