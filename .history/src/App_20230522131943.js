import React, {useState} from 'react';
import {Text, View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import SoundCard from './components/SongCard';

import music_data from './music-data.json';

const App = () => {
  const renderSong = ({item}) => <SoundCard song={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={music_data}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#eceff1',
  },
});
