import React, {useState} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';

import music_data from './music-data.json';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{margin: 10}}>
        <FlatList
          data={music_data}
          renderItem={({item}) => <Text> {item.title} </Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
