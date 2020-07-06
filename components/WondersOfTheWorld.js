import React, {useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import wonders from '../data/wonders';

function WondersOfTheWorld({navigation}) {
  const [wondersOfTheWorld, setWondersOfTheWorld] = useState(wonders);

  return (
    <View>
      <FlatList
        keyExtractor={item => item.name}
        data={wondersOfTheWorld}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewWonder', item)}>
            <View style={styles.listItem}>
              <Image source={item.path} style={styles.listItemImage} />
              <View style={styles.listItemTextContainer}>
                <Text style={styles.listItemText}>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {},
  listItemImage: {
    width: undefined,
    height: 250,
    resizeMode: 'cover',
  },
  listItemTextContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  listItemText: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 9,
  },
});

WondersOfTheWorld.navigationOptions = {
  title: 'Wonders of the World',
};

export default WondersOfTheWorld;
