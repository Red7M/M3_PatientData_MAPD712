//Import react-navigation
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home'
import PatientProfile from './screens/PatientProfile'

const App = createStackNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
    Home: {screen: Home},
    PatientProfile: {screen: PatientProfile}
  },
  {
    initialRouteName: 'Splash',
  },
);
export default createAppContainer(App);