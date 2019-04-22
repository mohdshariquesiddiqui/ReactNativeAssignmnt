/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});




export default class App extends React.Component {
   state = {
      myState: 'Google Chrome browser for Android phones and tablets. 
      SHAREit - Transfer & Share. SHAREit Technologies Co.Ltd. SHAREit, 
      fastest cross-platform transfer app with free online videos & music. 
      Facebook Lite.'
   }
   updateState = () => {
      this.setState({ myState: 'The state is updated' })
   }
   render() {
      return (
         <View>
            <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
         </View>
      );
   }
}