import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function Home(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Counter')}
        style={styles.button}>
        <Text style={styles.buttonText}>Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Wonders')}
        style={styles.button}>
        <Text style={styles.buttonText}>Wonders of the World</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ExchangeRates')}
        style={styles.button}>
        <Text style={styles.buttonText}>Exchange Rates</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '75%',
    backgroundColor: '#4293f5',
    margin: 4,
    marginTop: 16,
    padding: 16,
    alignSelf: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
