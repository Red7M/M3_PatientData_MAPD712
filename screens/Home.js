import React from 'react';
import {Component, useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableWithoutFeedback, Image, ScrollView, TextInput} from 'react-native';

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

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"John Doe", patientId: "563810", critical: true, age: 59, sex: "male", phone: "(512)-844-2132", address: "1st street, New York, NYC, NY, 19822", bloodPressure: "140/90mmHg", respitoryRate: "18 Brth per min", bloodOxygenLevel: "92%", heartBeatRate: "66 per minute", chronicCondition: "Cystic fibrosis", summary: "average/okay"},
        {id:2, image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Elizabeth Dolly", patientId: "847289", critical: false, age: 52, sex: "female", phone: "(771)-492-2910", address: "45th commerce, Manhatan, NYC, NY, 19282", bloodPressure: "130/80mmHg", respitoryRate: "17 Brth per min", bloodOxygenLevel: "97%", heartBeatRate: "69 per minute", chronicCondition: "none", summary: "stable/good"},
        {id:3, image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"George Makeman", patientId: "287309", critical: true, age: 71, sex: "male", phone: "(412)-271-0022", address: "3rd ave, Staten Island, NYC, NY, 19544", bloodPressure: "143/66mmHg", respitoryRate: "11 Brth per min", bloodOxygenLevel: "99%", heartBeatRate: "57 per minute", chronicCondition: "Asthma", summary: "average/okay"},
        {id:4, image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Ellen Draught", patientId: "182901", critical: false, age: 60, sex: "female", phone: "(312)-744-5132", address: "Front row dr, New York, NYC, NY, 19845", bloodPressure: "126/88mmHg", respitoryRate: "21 Brth per min", bloodOxygenLevel: "100%", heartBeatRate: "59 per minute", chronicCondition: "none", summary: "stable/good"},
        {id:5, image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"Kyle Walker", patientId: "384759", critical: false, age: 79, sex: "male", phone: "(512)-111-0022", address: "14th Ave, New Jersey, NJ, 19833", bloodPressure: "129/81mmHg", respitoryRate: "16 Brth per min", bloodOxygenLevel: "89%", heartBeatRate: "71 per minute", chronicCondition: "none", summary: "stable/good"},
        {id:6, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Gabe Bills", patientId: "564732", critical: true, age: 77, sex: "male", phone: "(428)-754-1122", address: "Roll Street, New York, NYC, NY, 19775", bloodPressure: "145/98mmHg", respitoryRate: "15 Brth per min", bloodOxygenLevel: "84%", heartBeatRate: "80 per minute", chronicCondition: "Cancer", summary: "unstable/poor"},
        {id:7, image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"Donald Whistle", patientId: "222832", critical: true, age: 93, sex: "male", phone: "(312)-003-8911", address: "5th Blow Dr, Queens, NYC, NY, 19821", bloodPressure: "129/98mmHg", respitoryRate: "27 Brth per min", bloodOxygenLevel: "85%", heartBeatRate: "72 per minute", chronicCondition: "Alzheimer/Dementia", summary: "average/okay"},
        {id:8, image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"Rob Sacks", patientId: "922123", critical: false, age: 68, sex: "male", phone: "(512)-844-2132", address: "49 Mellow St, NYC, NY, 19801", bloodPressure: "135/88mmHg", respitoryRate: "22 Brth per min", bloodOxygenLevel: "99%", heartBeatRate: "60 per minute", chronicCondition: "none", summary: "stable/good"},
        {id:9, image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Megan Flint", patientId: "733241", critical: false, age: 62, sex: "female", phone: "(442)-032-8733", address: "4th Manhatan, NYC, NY, 19822", bloodPressure: "122/89mmHg", respitoryRate: "21 Brth per min", bloodOxygenLevel: "95%", heartBeatRate: "63 per minute", chronicCondition: "none", summary: "stable/good"},
        {id:10, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Lou Williams", patientId: "574839", critical: false, age: 55, sex: "male", phone: "(281)-439-1011", address: "3st street, New York, NYC, NY, 19822", bloodPressure: "123/81mmHg", respitoryRate: "13 Brth per min", bloodOxygenLevel: "88%", heartBeatRate: "73 per minute", chronicCondition: "none", summary: "stable/good"}, 
        {id:11, image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"Paul Redd", patientId: "119228", critical: true, age: 81, sex: "male", phone: "(512)-181-3349", address: "8th street, New York, NYC, NY, 19827", bloodPressure: "122/73mmHg", respitoryRate: "32 Brth per min", bloodOxygenLevel: "77%", heartBeatRate: "81 per minute", chronicCondition: "Arthritis", summary: "unstable/poor"},
        {id:12, image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Mike Meel", patientId: "029338", critical: true, age: 79, sex: "male", phone: "(512)-101-4481", address: "Manhathan Dr, NYC, NY, 19818", bloodPressure: "121/77mmHg", respitoryRate: "14 Brth per min", bloodOxygenLevel: "69%", heartBeatRate: "76 per minute", chronicCondition: "Heart disease", summary: "unstable/poor"},
        {id:13, image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Don Ganzonni", patientId: "447281", critical: true, age: 92, sex: "male", phone: "(512)-844-2132", address: "88th Avenue, NYC, NY, 19828", bloodPressure: "153/79mmHg", respitoryRate: "16 Brth per min", bloodOxygenLevel: "85%", heartBeatRate: "54 per minute", chronicCondition: "Crohn disease", summary: "average/okay"},
        {id:14, image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"Sacha Zelle", patientId: "918273", critical: false, age: 59, sex: "male", phone: "(332)-844-1233", address: "99st street, New York, NYC, NY, 1986", bloodPressure: "154/99mmHg", respitoryRate: "23 Brth per min", bloodOxygenLevel: "92%", heartBeatRate: "66 per minute", chronicCondition: "none", summary: "stable/good"},
        {id:15, image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Lili Thomas", patientId: "333721", critical: true, age: 84, sex: "female", phone: "(191)-890-2132", address: "Phil Ave, NYC, NY, 19825", bloodPressure: "124/88mmHg", respitoryRate: "23 Brth per min", bloodOxygenLevel: "72%", heartBeatRate: "66 per minute", chronicCondition: "Multiple sclerosis", summary: "unstable/poor"},
        {id:18, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Oliver Blue", patientId: "182231", critical: true, age: 88, sex: "male", phone: "(901)-112-5566", address: "4th Vue Bronx, NY, 19820", bloodPressure: "121/77mmHg", respitoryRate: "16 Brth per min", bloodOxygenLevel: "84%", heartBeatRate: "81 per minute", chronicCondition: "Epilepsy", summary: "unstable/poor"},
        {id:19, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Dimitri Turner", patientId: "873911", critical: false, age: 69, sex: "male", phone: "(881)-001-6758", address: "Roll Dr, New York, NYC, NY, 19822", bloodPressure: "130/73mmHg", respitoryRate: "25 Brth per min", bloodOxygenLevel: "99%", heartBeatRate: "58 per minute", chronicCondition: "none", summary: "stable/good"},
     ],
     search: '',
     searchByCriticalCondition: '',
     filteredDataSource: [],
     filteredCriticalConditionDataSource: [],
    }
  }

  searchPatient = (text) => {
    // Check if searched text is not blank
    if (text) {
      const newData = this.state.data.filter(
        function (item) {
          const itemData = item.username ? item.username.toUpperCase(): ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({filteredDataSource: newData})
        this.setState({search: text})
    } else {
      this.setState({filteredDataSource: []})
      this.setState({search: text})
    }
  }

  searchByCriticalCondition = (text) => {
    if (text) {
      const newData = this.state.data.filter(
        function (item) {
          if (item.critical) {
            const itemData = item.username ? item.username.toUpperCase(): ''.toUpperCase();
            const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
          }
        });
        this.setState({filteredCriticalConditionDataSource: newData})
        this.setState({searchByCriticalCondition: text})
    } else {
      this.setState({filteredCriticalConditionDataSource: []})
      this.setState({searchByCriticalCondition: text})
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.titleText}> Search patients:</Text>
        <TextInput style={styles.textInputStyle} underlineColorAndroid="transparent" placeholder="Search patients here"
        value={this.state.search} onChangeText={(text) => this.searchPatient(text)}/>
        <FlatList
        enableEmptySections={true}
        data = {this.state.filteredDataSource}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigate('PatientProfile', {paramKey: item})}>
              <View style={styles.box}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={{ flex: 1 }} >
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.patientId}>{item.patientId}</Text>
              </View>
              <View style={styles.iconContent}>
              <Image style={styles.icon} source={{uri: "https://png.icons8.com/customer/office/40"}}/>
              </View>
              </View>
            </TouchableWithoutFeedback>
          )
        }}
        />
        <Text style={styles.titleText}> Search patients with critical conditions: </Text>
        <TextInput style={styles.textInputStyle} underlineColorAndroid="transparent" placeholder="Search patients by critical conditions here"
        value={this.state.searchByCriticalCondition} onChangeText={(text) => this.searchByCriticalCondition(text)}/>
        <FlatList
        enableEmptySections={true}
        data = {this.state.filteredCriticalConditionDataSource}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigate('PatientProfile', {paramKey: item})}>
              <View style={styles.box}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={{ flex: 1 }} >
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.patientId}>{item.patientId}</Text>
              </View>
              <View style={styles.iconContent}>
              <Image style={styles.icon} source={{uri: "https://png.icons8.com/customer/office/40"}}/>
              </View>
              </View>
            </TouchableWithoutFeedback>
          )
        }}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    alignSelf: 'stretch',
  },
  box: {
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  image:{
    width: 60,
    height: 60,
  },
  username:{
    color: "#000000",
    fontSize:22,
    marginLeft:10
  },
  patientId: {
    color: "#2DB744",
    fontSize:16,
    marginLeft:10
  },
  iconContent:{
    width: 60,
    height: 60,
    backgroundColor: '#2DB744',
    marginLeft: 'auto',
    alignItems: 'center'
  },
  icon:{
    width: 40,
    height: 40,
  }
});