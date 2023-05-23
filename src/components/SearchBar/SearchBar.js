import React from 'react';
import {TextInput, Text, View} from 'react-native';

import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Merhaba" onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
