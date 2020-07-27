import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TodoApp extends Component {
  render() {
    return (
      <View>
        <Text>Todo</Text>
        <Icon name="apple" style={30} />
      </View>
    );
  }
}

export default TodoApp;
