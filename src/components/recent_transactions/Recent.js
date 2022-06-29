import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import GtbLogo from '../../../assets/images/gtbank.png';

const Recent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.img} source={GtbLogo} />
        <View>
          <Text style={styles.text1}>Sambo Omotola Olarnrewaju</Text>
          <Text style={styles.text2}>Transfer to Rasaq Agbala</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.righttext}>₦ 100.00</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    borderRadius: 50,
    width: 40,
    height: 40,
    marginRight: 10,
  },
  text1: {
    fontFamily: 'SF_Pro_Display_Regular',
    fontSize: 14,
    color: '#212121',
  },
  text2: {
    fontFamily: 'SF_Pro_Display_Regular',
    fontSize: 12,
    color: '#636363',
    marginTop: 5,
  },
  righttext: {
    fontFamily: 'Helvetica_Neue_Medium',
    fontSize: 17,
    color: '#548E4E',
  },
});
export default Recent;
