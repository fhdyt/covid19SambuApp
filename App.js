import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProvinsiScreen from './src/screens/ProvinsiScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { AntDesign } from '@expo/vector-icons';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

import ProfileScreen from './src/screens/ProfileScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';

const switchNavigator = createSwitchNavigator(
  {
    loginFlow: createStackNavigator({
      Signin: SigninScreen,
      Signup: SignupScreen,
    }),
    mainFlow: createBottomTabNavigator({
      homeFlow: {
        screen: createStackNavigator({
            Home: HomeScreen,
            Provinsi: ProvinsiScreen,
            },
            {
              initialRouteName: 'Home',
              defaultNavigationOptions: {
                title: 'Home',
              },
        }),
        navigationOptions: {
          tabBarLabel:() => {return null},
          tabBarIcon: ({ tintColor }) => (
            <AntDesign name="home" color={ tintColor } size={30} />
          )
        }
      },
      Feedback: {
        screen: FeedbackScreen, 
        navigationOptions: {
            //tabBarLabel: 'Home', 
            tabBarLabel:() => {return null},
            tabBarIcon: ({ tintColor }) => (
              <AntDesign name="edit" color={ tintColor } size={30} />
            )
        }
      },
      Profile: {
        screen: ProfileScreen, 
        navigationOptions: {
            //tabBarLabel: 'Home', 
            tabBarLabel:() => {return null},
            tabBarIcon: ({ tintColor }) => (
              <AntDesign name="user" color={ tintColor } size={30} />
            )
        }
      }, 
    })
  },
  // {
  //   defaultNavigationOptions: {
  //     header: () => false,
  //   },
  // }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};