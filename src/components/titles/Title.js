import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Title = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'SF_Pro_Display_Medium',
    fontSize: 14,
  },
});
export default Title;
