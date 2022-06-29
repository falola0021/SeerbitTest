import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FP from '../../../assets/images/fingerprint.png';

const keys = [
  {
    id: '1',
    a: '1',
  },
  {
    id: '2',
    a: '2',
  },
  {
    id: '3',
    a: '3',
  },
  {
    id: '4',
    a: '4',
  },
  {
    id: '5',
    a: '5',
  },
  {
    id: '6',
    a: '6',
  },
  {
    id: '7',
    g: '7',
  },
  {
    id: '8',
    a: '8',
  },
  {
    id: '9',
    a: '9',
  },
  {
    id: 'k',
    a: FP,
  },
  {
    id: 'b',
    a: '0',
  },
  {
    id: 'm',
    a: '',
  },
];

const Keyboard = ({ selectedarray, setSelectedarray }) => {
  let handleSelection = (item) => {
    let newArray = [...selectedarray];

    if (newArray.length < 4) {
      newArray.push(item);
      setSelectedarray(newArray);
    }
  };
  return (
    <View>
      <FlatList
        numColumns={3}
        style={styles.keybox}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsHorizontalScrollIndicator={false}
        data={keys}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            {item.id == 'k' ? (
              <TouchableOpacity s>
                <Image style={styles.imgg} source={item.a} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => handleSelection(item)}
                style={item.id == 'm' ? styles.none : styles.key}
              >
                <Text style={styles.keytext}>{item.a}</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      />
    </View>
  );
};

export default Keyboard;

const styles = StyleSheet.create({
  keybox: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 30,
  },
  key: {
    width: 65,
    height: 65,
    borderRadius: 500,
    backgroundColor: '#F1F1F1',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keytext: {
    fontFamily: 'SF_Pro_Display_Medium',
    fontWeight: 'bold',
    fontSize: 24,
  },
  imgg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  none: {
    width: 60,
    height: 60,
  },
});
