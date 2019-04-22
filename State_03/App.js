/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
   state = {
      myState: 'Google Chrome browser for Android phones and tablets. 
      SHAREit - Transfer & Share. SHAREit Technologies Co.Ltd. SHAREit, 
      fastest cross-platform transfer app with free online videos & music. 
      Facebook Lite.'
      
   }
   render() {
      return (
      <View>
         <Text> {this.state.myState} </Text>
      </View>
      );
   }
}