import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AppContainer from './routes/appStack';

import {FruitProvider} from './contexts/FruitContext';

const App = () => {
  // return <AppContainer />;
  return (
    <FruitProvider>
      <AppContainer />
    </FruitProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
