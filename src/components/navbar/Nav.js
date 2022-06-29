import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Nav = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.canGoBack() ? navigation.goBack() : () => {}
        }
      >
        <Feather name='arrow-left' size={20} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#212121',
    fontSize: 16,
    fontFamily: 'SF_Pro_Display_Medium',
    maxWidth: 150,
  },
});
export default Nav;
