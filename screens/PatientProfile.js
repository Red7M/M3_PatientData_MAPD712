import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class PatientProfile extends Component {
  static navigationOptions = {
    title: 'Patient Profile Screen',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.container}>
          <Text>This is patient profile screen</Text>
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
