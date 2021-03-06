import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// screens
import Home from '../screens/Home';
import Profile from '../screens/Profile';

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarlabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarlabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  }
}, {
  swipeEnabled: true,
  animationEnabled: true,
});
