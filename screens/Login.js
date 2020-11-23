import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login Screen',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Text>This is login screen</Text>
          <Button title="Go to home screen" onPress={() => navigate('Home')} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
