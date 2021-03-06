import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {FruitContext} from '../contexts/FruitContext';

function Counter(props) {
  const [count, setCount] = useState(0);

  const fruits = useContext(FruitContext);

  return (
    <View style={styles.counter}>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(0)}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <View>
          {fruits.map(fruit => (
            <Text>
              {fruit.name} - {fruit.quantity}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {},
  counterText: {
    fontSize: 48,
    alignSelf: 'center',
  },
  buttonsContainer: {},
  button: {
    backgroundColor: 'lightblue',
    padding: 8,
    margin: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default Counter;
