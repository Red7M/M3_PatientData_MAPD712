import Svg, {Rect} from 'react-native-svg';
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
      backgroundColor: '#2DB744',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const {navigate} = this.props.navigation;
    setTimeout(()=>{
        // Add your logic for the transition
       navigate('Login')
   }, 3000);
    return (
      <View>
        <Svg width="414" height="263">
            <Rect
                x="0"
                y="1"
                width="414"
                height="263"
                fill="#A5D6A9"
                strokeHeight="1"
                strokeWidth="1"
                stroke="rgb(0,0,0)"
            />
        </Svg>
        <View style={styles.header}>
          <Text style={styles.textStyle}>
            HealthFirst</Text>
        </View>
        <Svg width="414" height="263">
            <Rect
                x="0"
                y="-1"
                width="414"
                height="263"
                fill="#A5D6A9"
                strokeHeight="1"
                strokeWidth="1"
                stroke="rgb(0,0,0)"
            />
        </Svg>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 263,
    justifyContent: 'center',
    padding: 50,
  },
  textStyle: {
    fontSize: 60,
    color: '#2DB744'
  }
});