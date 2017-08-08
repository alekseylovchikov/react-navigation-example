import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends Component {
  render() {
    const { containerStyle, textStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={textStyle}>
          Home
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

export default Home;
