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

import Share, { ShareSheet, Button } from 'react-native-share';

import TrackPlayer from 'react-native-track-player';

const shareOptions = {
    title : 'Share via',
    social : Share.Social.WHATSAPP,
    social : Share.Social.FACEBOOK,
    social : Share.Social.INSTAGRAM
    social : Share.Social.EMAIL
}

export default class Dzas extends React.Component {

  async componentDidMount() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.add({
      id: 'track',
      url: 'http://202.55.90.209:8000/febc_dway', // just for test!
      title: 'DZAS Radio',
      artist: 'DZAS DJ',
    })
    TrackPlayer.play();
  }

  play() {
    TrackPlayer.add({
      id: 'track',
      url: 'http://202.55.90.209:8000/febc_dway',
      title: 'DZAS Radio',
      artist: 'DZAS Radio',
    }).then(() => {
      TrackPlayer.play();
    });
  }

  stop(){
    TrackPlayer.stop();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'DZAS',
      headerRight: (
        <Button
          title="DZFE"
          onPress={() => navigation.navigate('Dzfe')}
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

        <TouchableOpacity onPress={() => this.play()} accessibilityLabel="play button">
                  <Image source={require('./assets/playbtn.png')} style={{resizeMode: 'contain', width: 50, height: 35}} />
                  </TouchableOpacity>

      </View>

        <Image source={require('./assets/702DZAS.png')} style={{ resizeMode : 'contain', width: 250, height: 300}} />

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>

          <TouchableOpacity onPress={() => this.play()} accessibilityLabel="play button">
                    <Image source={require('./assets/playbtn.png')} style={{resizeMode: 'contain', width: 50, height: 35}} />
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

      <ShareSheet visible={this.state.visible} onCancel={this.onCancel.bind(this)}>
          <Button iconSrc={{ uri: TWITTER_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "twitter"
                }));
              },300);
            }}>Twitter</Button>
          <Button iconSrc={{ uri: FACEBOOK_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "facebook"
                }));
              },300);
            }}>Facebook</Button>
          <Button iconSrc={{ uri: WHATSAPP_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "whatsapp"
                }));
              },300);
            }}>Whatsapp</Button>

            <Button
            iconSrc={{ uri: CLIPBOARD_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                if(typeof shareOptions["www.febc.ph"] !== undefined) {
                  Clipboard.setString(shareOptions["url"]);
                  if (Platform.OS === "android") {
                    ToastAndroid.show('Link copiado al portapapeles', ToastAndroid.SHORT);
                  } else if (Platform.OS === "ios") {
                    AlertIOS.alert('Link copiado al portapapeles');
                  }
                }
              },300);
            }}>Copy Link</Button>

        </ShareSheet>

      </View>
    );
  }
}

const TWITTER_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAB8AAAAfAEVD+3kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJBQTFRFUKvxUavxUazxUqzxVq7xWrDyW7DyXrLyX7LyYLPyYbPyZbXzZ7bza7jzcLr0er/0fcH1gcL1gcP1hMT1hsX1h8X1jMj2lcz3nND3p9X4rNf4sdr5ttz5uN35ut75vuD6yeX71Or82e382+783/D85vP96fT96/X97Pb+7vf+9fr+9vv++fz//P7//f7/////8j2D5AAAAGZJREFUGBmdwQkCQlAABNCJVKQFpZAlS/RVc//b9Rcu4D0sYtmQrCjZOz6Uc7UGUJC/dwglZHtdOR+Srx0UtyZFTSmHduLsBiP70jjCCEZqJWb3jtKwgXGIU0Gy8jDZJs++eVyw2B+F9QxfsK66hAAAAABJRU5ErkJggg=="
const FACEBOOK_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAB8AAAAfAEVD+3kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAFdQTFRF////PVKjPFehOFeiN1OhOlWfO1WfOlSgOVWfOlSfOlWfOlafOVSfOlafOlSfOlaeO1SgO1afOlWfOlWfOVWeO1WfOlWfOlWfOlWgO1WfOlWfOlWfOlWfe92FGgAAABx0Uk5TABkmKS4wRUZIWGBlcICIiYuYrLC2t7nQ2+f4/teI5bkAAABKSURBVBhXrcw3DoAwFATRIRhMzvnf/5x01grJHVO+YrBPxOHZm3pRKIFO4ICsmgUGuMwEergFJp9C4bcALQCsAUaXQO7O+ONfeAFKXxaY3HNOwAAAAABJRU5ErkJggg=="


const CLIPBOARD_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAaVBMVEUAAAAAcfEAbfEAbPAAbe8AbPAAbf8AbO8Aa+0AcO8AbfEAbPAAZv8Aa/IAbe8AbfEAbPIAbe8AbOsAgP8Aau0AbO8AceMAbO8AbfAAbvAAa/IAbPEAbe8AbO8AbvAAbvEAbfAAbfAAAADjeTeUAAAAInRSTlMAEp94frUHTisQbosFE3CNKGAaBB1QCZKInDlcXn95Sox3z/fdjQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCxQQIDCQiFaOAAAAXUlEQVQY08WPSRKAIAwEA1FBEVdU3PX/nxQC+gXn0tVduQQAgHH0S9IMwoQk5IUqPXVVNyG0neod0QwhjBPa2QeIAUh+DMv6ugkBNnoOd1tpF47vXgrCed1xnDl9AEZLBRtQQdWWAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTExLTIwVDE2OjMyOjQ4KzAxOjAwCmf9eQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMS0yMFQxNjozMjo0OCswMTowMHs6RcUAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"

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
