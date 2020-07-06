import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from '../components/Home';
import Counter from '../components/Counter';
import WondersOfTheWorld from '../components/WondersOfTheWorld';
import ViewWonder from '../components/ViewWonder';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Counter: {
    screen: Counter,
  },
  Wonders: {
    screen: WondersOfTheWorld,
  },
  ViewWonder: {
    screen: ViewWonder,
  },
});

export default createAppContainer(AppNavigator);
