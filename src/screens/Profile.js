import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Profile extends Component {
  render() {
    const { containerStyle, textStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={textStyle}>
          Profile
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00acc1',
  },
  textStyle: {
    fontSize: 33,
    fontWeight: '200',
    color: '#fff',
  },
});

export default Profile;
