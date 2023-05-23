import React, {useState} from 'react';
import {Text, View, SafeAreaView, FlatList, StyleSheet} from 'react-native';

import music_data from './music-data.json';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={music_data}
          renderItem={({item}) => <Text> {item.title} </Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
