import React, {useContext} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';

import {FruitContext} from '../contexts/FruitContext';

function ViewWonder({navigation}) {
  const fruits = useContext(FruitContext);

  return (
    <ScrollView>
      <Image source={navigation.getParam('path')} style={styles.image} />
      <Text style={styles.title}>{navigation.getParam('name')}</Text>
      <Text style={styles.location}>
        Location: {navigation.getParam('location')}
      </Text>
      <Text style={styles.description}>
        {navigation.getParam('description')}
      </Text>
      <View>
        {fruits.map(fruit => (
          <Text>
            {fruit.name} - {fruit.quantity}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: undefined,
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    padding: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    padding: 16,
    fontSize: 18,
  },
  description: {
    padding: 16,
    fontSize: 16,
  },
});

export default ViewWonder;
