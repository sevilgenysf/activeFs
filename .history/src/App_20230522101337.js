import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import music_data from './music-data.json';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{margin: 10}}>
        <Text>Show Only Favorites</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
