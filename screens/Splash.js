import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Splash extends Component {
  constructor(props){
    super(props)
    this.state = {
      component : 'Splash'
    }
   }
  static navigationOptions = {
    title: 'Splash Screen',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentDidMount(){
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(()=>{
         // Add your logic for the transition
        this.props.navigation = 'Login'
    }, 3000);
}

componentWillUnmount(){
  clearTimeout(this.timeoutHandle); 
}

  render() {
    {this.componentDidMount()}
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Enter your height in meters: </Text>
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
  header: {
    backgroundColor: 'pink',
    padding: 50,
  },
});