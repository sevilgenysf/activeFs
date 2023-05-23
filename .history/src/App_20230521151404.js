import React, {useState} from 'react';
import {Text, View, Button, Switch, SafeAreaView, FlatList} from 'react-native';

const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: "Roc'n Code", isFavorite: true},
  {id: 4, name: 'do(drink)', isFavorite: false},
  {id: 5, name: 'esc', isFavorite: false},
];

const App = () => {
  const [cafeList, setCafeList] = useState(data);

  return (
    <SafeAreaView>
      <View>
        <Text>Show Only Favorites</Text>
        <Switch />
      </View>
      <FlatList
        data={cafeList}
        renderItem={({item}) => (
          <Text style={{fontSize: 25}}> {item.name} </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
