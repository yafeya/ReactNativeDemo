import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class JustifyContentBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{ width: 50, height: 50, flexDirection: 'row' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}></View>
        </View>
        <View style={{ width: 50, height: 50, flexDirection: 'row', justifyContent: 'center' }} >
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}></View>
        </View>
        <View style={{ width: 50, height: 50, flexDirection: 'row' }} >
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}></View></View>
      </View>
    );
  }
};