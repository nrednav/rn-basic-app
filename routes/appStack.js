import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from '../components/Home';
import Counter from '../components/Counter';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Counter: {
    screen: Counter,
  },
});

export default createAppContainer(AppNavigator);
