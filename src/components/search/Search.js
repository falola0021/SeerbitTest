import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={styles.searchbox}>
      <Feather name='search' size={16} color='#959595' />
      <TextInput style={styles.textinput} sty placeholder='Search' />
    </View>
  );
};
const styles = StyleSheet.create({
  searchbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    padding: 10,
    borderRadius: 5,
  },
  textinput: {
    marginLeft: 5,
    fontFamily: 'SF_Pro_Display_Medium',
    fontSize: 12,
    flexGrow: 1,
  },
});
export default Search;
