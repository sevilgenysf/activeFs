import React from 'react';
import {TextInput, Text, View} from 'react-native';

import styles from './SearchBar.style';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Merhaba"
        onChangeText={text => console.log(text)}
      />
    </View>
  );
};

export default SearchBar;
