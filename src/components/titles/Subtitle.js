import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Title = ({ subtitle }) => {
  return (
    <View>
      <Text style={styles.title}>{subtitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'SF_Pro_Display_Regular',
    fontSize: 12,
    color: '#636363',
  },
});
export default Title;
