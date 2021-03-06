/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerEventHandler(async (data) => {
  if (data.type === 'playback-track-changed') {
  } else if(data.type == 'remote-play') {
    TrackPlayer.play()
  } else if(data.type == 'remote-pause') {
    TrackPlayer.pause()
  } else if(data.type == 'remote-next') {
    TrackPlayer.skipToNext()
  } else if(data.type == 'remote-previous') {
    TrackPlayer.skipToPrevious()
  } else if (data.type == 'remote-stop'){
    TrackPlayer.stop()
  }
});
