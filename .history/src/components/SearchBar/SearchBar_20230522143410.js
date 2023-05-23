import React from 'react';
import {TextInput, Text, View} from 'react-native';

import styles from './SearchBar.style';

const SearchBar = () => {

	const onSearch = text => console.log(text);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Merhaba"
        onChangeText={}
      />
    </View>
  );
};

export default SearchBar;
