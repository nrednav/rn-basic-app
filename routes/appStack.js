import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from '../components/Home';
import Counter from '../components/Counter';
import List from '../components/List';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Counter: {
    screen: Counter,
  },
  Wonders: {
    screen: List,
  },
});

export default createAppContainer(AppNavigator);
