import React, {useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

function List() {
  const [wondersOfTheWorld, setWondersOfTheWorld] = useState([
    {name: 'Great Wall of China', path: require(`../assets/1.jpg`)},
    {name: 'Chichén Itzá', path: require('../assets/2.jpg')},
    {name: 'Petra', path: require('../assets/3.jpg')},
    {name: 'Machu Pichu', path: require('../assets/4.jpg')},
    {name: 'Christ the Redeemer', path: require('../assets/5.jpg')},
    {name: 'Colosseum', path: require('../assets/6.jpg')},
    {name: 'Taj Mahal', path: require('../assets/7.jpg')},
  ]);

  return (
    <View>
      <FlatList
        keyExtractor={item => item.name}
        data={wondersOfTheWorld}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Image source={item.path} style={styles.listItemImage} />
            <View style={styles.listItemTextContainer}>
              <Text style={styles.listItemText}>{item.name}</Text>
            </View>
          </View>
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

export default List;
