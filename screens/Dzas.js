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



export default class Dzas extends React.Component{

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

    render(){
      return(
        <View>

        <Text>Home Screen</Text>
        <Button
          title="This is the DZAS RADIO TEST"
          onPress={() => this.props.navigation.navigate('Dzfe')}
        />
      </View>
      )
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
