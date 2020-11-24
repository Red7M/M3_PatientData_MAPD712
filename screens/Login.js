import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ToastAndroid, Platform, Alert} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login Screen',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#2DB744',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor() {
    super()
    this.state = {
      providerId : "",
      password : "",
    }
    this.executeLoginScreen = this.executeLoginScreen.bind(this)
  }

  executeLoginScreen() {
    this.navigate('Home')
    // if (this.state.providerId < 6 && this.state.password < 6) {
    //   if (Platform.OS === 'android') {
    //     ToastAndroid.show("input too small", ToastAndroid.SHORT)
    //   } else {
    //     Alert.alert("input too small");
    //   }
    // } else {
    //   this.navigate('Home')
    // }
  }

  navigate(val) {
    val = this.props.navigation;
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>HealthFirst</Text>
          <TextInput defaultValue= {this.state.providerId} style={styles.input}
          placeholder= "Care provider id" placeholderTextColor="#A9A9A9"/>
          <TextInput defaultValue= {this.state.password} style={styles.input}
          placeholder= "Password" placeholderTextColor="#A9A9A9" secureTextEntry/>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigate('Home')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 60,
    color: '#2DB744',
    marginBottom: 100,
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderColor: '#2DB744',
    marginBottom: 10, 
    borderRadius: 10,
  }, 
  buttonStyle: {
    width: "90%",
    backgroundColor: "#2DB744",
    color: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 150,
  }, 
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15,
  }
});
