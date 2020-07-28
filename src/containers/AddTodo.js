import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

class AddTodo extends Component {
  state = {
    text: '',
  };

  addTodo = (text) => {
    //redux store
    this.props.dispatch({type: 'ADD_TODO', text});
    this.setState({text: ''});
  };

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Eg. Create New Video"
          style={{
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={() => addTodo(this.state.text)}>
          <View style={{height: 50, backgroundColor: '#eaeaea', padding: 10}}>
            <Icon name="apple" size={40} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo);
