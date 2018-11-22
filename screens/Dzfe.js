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

import TrackPlayer from 'react-native-track-player';


export default class Dzfe extends React.Component {

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
          onPress={() => navigation.navigate('Care')}
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
      <Text>THIS IS A TEST </Text>
      <Button onPress={() => this.props.navigation.navigate('Dzas')} title="Dzas"/>
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
