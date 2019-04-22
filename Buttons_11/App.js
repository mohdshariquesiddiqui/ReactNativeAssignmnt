/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import React, { Component } from 'react'
import { Button } from 'react-native'

const App = () => {
   const handlePress = () => false
   return (
      <Button
         onPress = {handlePress}
         title = "Red button!"
         color = "red"
      />
   )
}
export default App