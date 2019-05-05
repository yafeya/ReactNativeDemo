/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';


class InputForm extends Component { 
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onEndEditing(e) { 
    let text = e.nativeEvent.text;
    this.props.onTextChanged(text);
    this.setState({ text: `The input: ${text}` });

  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onEndEditing={(e) => this.onEndEditing(e)}
        />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default class App extends Component {

  onTextChanged(text) { 
    alert(`The input is ${text}`);
  }

  render() {
    return (
      <View>
        <InputForm onTextChanged={(text) => this.onTextChanged(text)} />
      </View>
    );
  }
}

