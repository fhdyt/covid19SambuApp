import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProvinsiScreen from './src/screens/ProvinsiScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

import ProfileScreen from './src/screens/ProfileScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';
import NewsScreen from './src/screens/NewsScreen';
import DetailNewsScreen from './src/screens/DetailNewsScreen';
import WebViewScreen from './src/screens/WebViewScreen';

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
          // tabBarLabel:() => {return null},
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ tintColor }) => (
            <AntDesign name="home" color={ tintColor } size={25} />
          )
        }
      },
      newsFlow: {
        screen: createStackNavigator({
            News: NewsScreen,
            //DetailNews: DetailNewsScreen,
            WebView: WebViewScreen
            },
            ),
        navigationOptions: {
          // tabBarLabel:() => {return null},
          tabBarLabel: 'Berita',
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="newspaper-o" color={ tintColor } size={25} />
          )
        }
      },
      Feedback: {
        screen: FeedbackScreen, 
        navigationOptions: {
            //tabBarLabel: 'Home', 
            tabBarLabel: 'Masukan',
            //tabBarLabel:() => {return null},
            tabBarIcon: ({ tintColor }) => (
              <AntDesign name="edit" color={ tintColor } size={25} />
            )
        }
      },
      Profile: {
        screen: ProfileScreen, 
        navigationOptions: {
            tabBarLabel: 'Profil', 
            //tabBarLabel:() => {return null},
            tabBarIcon: ({ tintColor }) => (
              <AntDesign name="user" color={ tintColor } size={25} />
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