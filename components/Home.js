import React from 'react';
import {View, Text, Button} from 'react-native';

function Home(props) {
  return (
    <View>
      <Button
        title="Go to Counter"
        onPress={() => props.navigation.navigate('Counter')}
      />
      <Button
        title="Go to Wonders"
        onPress={() => props.navigation.navigate('Wonders')}
      />
    </View>
  );
}

Home.navigationOptions = {
  title: 'Home Screen',
};

export default Home;
