/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Todo from './src/TodoApp';
import {Provider} from 'react-redux';
import store from './src/store';

class App extends Component {
  render() {
    return (
      <View>
        <Provider store={store}>
          <Todo />
        </Provider>
      </View>
    );
  }
}

export default App;
