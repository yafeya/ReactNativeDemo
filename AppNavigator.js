import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Friends from './Friends';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Friends: Friends,
  },
  {
    initialRouteName: 'Home',
  });

export default AppNavigator;
