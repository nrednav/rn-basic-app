import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';

function ViewWonder({navigation}) {
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
