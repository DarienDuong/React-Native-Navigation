import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './LoginForm';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigation = StackNavigator(
  {
    LoginForm: {
      screen: LoginForm
    },
    Details: {
      screen: DetailsScreen
    }
  },
  { initialRouteName: 'LoginForm' }
);

export default AppNavigation;
