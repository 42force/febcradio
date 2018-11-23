import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Dzas from './screens/Dzas';
import Dzfe from './screens/Dzfe';
import Care from './screens/Care';
import Dxfe from './screens/Dxfe';
import Dyfr from './screens/Dyfr';
import Dxjl from './screens/Dxjl';
import Dyvs from './screens/Dyvs';
import Dzmr from './screens/Dzmr';
import PinoyConnection from './screens/PinoyConnection';
import Dxki from './screens/Dxki';
import Now from './screens/Now';


const RootStack = createStackNavigator({

    Dzas : Dzas,
    Dzfe : Dzfe,
    Dxfe : Dxfe,
    Dxjl : Dxjl,
    Care : Care,
    Dxki : Dxki,
    Dyfr : Dyfr,
    Dyvs : Dyvs,
    Dzmr : Dzmr,
    PinoyConnection : PinoyConnection,
    Now : Now

},

{
  initialRouteName: 'Dzas',
}
);

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
