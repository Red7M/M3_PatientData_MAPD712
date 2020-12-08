import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class PatientProfile extends Component {
  static navigationOptions = {
    title: 'Patient Profile Screen',
    headerStyle: {
      backgroundColor: '#2DB744',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      item : props.navigation.state.params.paramKey,
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: this.state.item.image}}/>
              <Text style={styles.name}>{this.state.item.username}</Text>
              <Text style={styles.info}>Patient Data</Text>
              
              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.leftStyle}>Age</Text>
              <Text style={styles.rightStyle}>{this.state.item.age}</Text>
              </View>

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.leftStyle}>Sex</Text>
              <Text style={styles.rightStyle}>{this.state.item.sex}</Text>
              </View>

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.leftStyle}>Phone</Text>
              <Text style={styles.rightStyle}>{this.state.item.phone}</Text>
              </View>

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.leftStyle}>Address</Text>
              <Text style={styles.rightStyle}>{this.state.item.address}</Text>
              </View>

              <Text style={styles.info}>Medical Details</Text>
              
              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.leftStyle}>Blood Pressure</Text>
              <Text style={styles.rightStyle}>{this.state.item.bloodPressure}</Text>
              </View>

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.leftStyle}>Respitory Rate</Text>
              <Text style={styles.rightStyle}>{this.state.item.respitoryRate}</Text>
              </View>

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.leftStyle}>Blood Oxygen Level</Text>
              <Text style={styles.rightStyle}>{this.state.item.bloodOxygenLevel}</Text>
              </View>

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.leftStyle}>Heartbeat Rate</Text>
              <Text style={styles.rightStyle}>{this.state.item.heartBeatRate}</Text>
              </View>

              <Text style={styles.info}>Critical Condition</Text>

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.leftStyle}>Chronic Condition</Text>
              <Text style={styles.rightStyle}>{this.state.item.chronicCondition}</Text>
              </View>

              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={styles.leftBottomStyle}>Summary</Text>
              <Text style={styles.rightBottomStyle}>{this.state.item.summary}</Text>
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#2DB744",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:60
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#000000",
    fontWeight: "600",
    marginTop: 100,
    alignSelf:'center',
  },
  info:{
    fontSize:16,
    color: "#000000",
    marginTop:10,
    marginStart: 10,
    fontWeight: 'bold'
  },
  leftStyle: {
    marginTop: 10,
    alignItems:'flex-start', 
     color: "#000000",
     marginStart: 10,
  },
  rightStyle: {
    marginTop: 10,
    alignItems:'flex-end',  
    marginEnd: 10,
  },
  leftBottomStyle: {
    alignItems:'flex-start', 
    fontSize:16,
    color: "#000000",
    marginTop:50,
    marginStart: 10,
    fontWeight: 'bold'
  }, 
  rightBottomStyle: {
    marginTop: 50,
    fontSize:16,
    alignItems:'flex-end',  
    marginEnd: 10,
    color: "#2DB744",
    fontWeight: 'bold'
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});