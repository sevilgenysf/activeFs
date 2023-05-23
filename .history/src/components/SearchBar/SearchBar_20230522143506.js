import React from 'react';
import {TextInput, Text, View} from 'react-native';

import styles from './SearchBar.style';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Merhaba" onChangeText={onSearch} />
    </View>
  );
};

export default SearchBar;
