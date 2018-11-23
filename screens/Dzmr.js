import React from "react";
import { StatusBar,
Platform,
StyleSheet,
Text,
View,
Image,
ImageBackground,
Button,
TouchableOpacity, Linking} from "react-native";

import  Share from 'react-native-share';

import TrackPlayer,  { CAPABILITY_PLAY, CAPABILITY_PAUSE, CAPABILITY_STOP, CAPABILITY_SEEK_TO }from 'react-native-track-player';



export default class Dzmr extends React.Component {

  async componentDidMount() {
    await TrackPlayer.setupPlayer({});

    TrackPlayer.updateOptions({
            capabilities: [CAPABILITY_PLAY, CAPABILITY_PAUSE, CAPABILITY_STOP, CAPABILITY_SEEK_TO],
            compactCapabilities: [CAPABILITY_PLAY, CAPABILITY_PAUSE, CAPABILITY_STOP, CAPABILITY_SEEK_TO],
            stopWithApp: true
        });


        await TrackPlayer.add({
          id: 'track',
          url: 'http://202.55.90.209:8000/febc_dzmr',
          title: 'DZMR Radio',
          artist: 'DZMR Radio',
        });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'DZMR Radio',
      headerRight: (
        <Button
          title="Pinoy"
          onPress={() => navigation.navigate('PinoyConnection')}
          color="#a41034"
        />
      ),
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon
          name="ios-home"
          size={25}
          color={tintColor}
        />
      ),
    };
  };

onShare() {
    const shareOptions = {
      title: 'Share our website',
      url: "https://www.febc.ph",
      subject: "Share Link",
    };
    return Share.open(shareOptions);
  }

  render() {
    return (

      <View>
      <ImageBackground source={require('./assets/testbg.png')} style={styles.MainContainer}>

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Image source={require('./assets/febchead.png')} style={{left : 0, resizeMode: 'contain', width: 200, height:100}} />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
      }}>

      <TouchableOpacity
      title="Dyvs"
      onPress={() => this.props.navigation.navigate('Dyvs')}
      color="#a41034">
            <Image source={require('./assets/arrowleft.png')} style={{resizeMode: 'contain', width: 50, height: 35}} />
      </TouchableOpacity>

      </View>

        <Image source={require('./assets/1143DZMR.png')} style={{ resizeMode : 'contain', width: 275, height: 300}} />

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>

        <TouchableOpacity
        title="PinoyConnection"
        onPress={() => this.props.navigation.navigate('PinoyConnection')}
        color="#a41034">
              <Image source={require('./assets/arrowright.png')} style={{resizeMode: 'contain', width: 50, height: 35}} />
        </TouchableOpacity>

        </View>

      </View>

      <View style={{flexDirection: 'row', justifyContent : 'space-between'}}>
     <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.facebook.com/702DZAS/')}}>
         <Image source={require('./assets/fb.png')} style={{resizeMode: 'contain', width: 50, height: 50}} />
       </TouchableOpacity>
     <View style={{width: 10, height: 10}} />
     <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.messenger.com/t/702DZAS')}}>
         <Image source={require('./assets/messenger.png')} style={{resizeMode: 'contain', width: 50, height: 50}} />
       </TouchableOpacity>
     <View style={{width: 10, height: 10}} />
     <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://febc.ph/donate-now/')}}>
         <Image source={require('./assets/partnership.png')} style={{resizeMode: 'contain', width: 50, height: 50}} />
       </TouchableOpacity>
     <View style={{width: 10, height: 10}} />
     <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://febc.ph/')}}>
         <Image source={require('./assets/webicon.png')} style={{resizeMode: 'contain', width: 50, height: 50}} />
       </TouchableOpacity>
     <View style={{width: 10, height: 10}} />
     <TouchableOpacity onPress={ ()=> this.onShare()}>
         <Image source={require('./assets/share.png')} style={{resizeMode: 'contain', width: 50, height: 50}} />
       </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer:{
    width: '100%',
    height: '100%',

 },
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center"
  }
});
