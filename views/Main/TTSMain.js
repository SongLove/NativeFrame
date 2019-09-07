import React, {component} from 'react'
import {StyleSheet} from 'react-native'

import { createStackNavigator, createAppContainer} from 'react-navigation';

import NavigatorTextOne from './TTSNavigtorTextOne'
import ButtomNavigator from './TTSButtomNaviagtor'

const TTSMain = createStackNavigator({
  Home: ButtomNavigator,
  NavigatorTextOne
})

export default createAppContainer(TTSMain)