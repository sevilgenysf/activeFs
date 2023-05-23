import React, {useState} from 'react';
import {Text, View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import SoundCard from './components/SongCard';

import music_data from './music-data.json';

const App = () => {
  const renderSong = ({item}) => <Text> {item.title} </Text>;

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={music_data}
        renderItem={renderSong}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
