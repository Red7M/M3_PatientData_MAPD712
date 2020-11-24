import React from 'react';
import {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home Screen',
    headerStyle: {
      backgroundColor: '#2DB744',
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
          <Text>This is home screen</Text>
          <Button title="Go to patient profile screen" onPress={() => navigate('PatientProfile')} />
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