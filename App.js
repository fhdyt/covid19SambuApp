import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProvinsiScreen from './src/screens/ProvinsiScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    Provinsi: ProvinsiScreen,
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
  }),
});

export default createAppContainer(switchNavigator);
