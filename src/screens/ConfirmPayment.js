import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Mtn1 from '../../assets/images/mtn1.png';

import Nav from '../components/navbar/Nav';
import { useNavigation } from '@react-navigation/native';
import Keyboard from '../components/keyboard/Keyboard';

const ConfirmBillPay = ({ route }) => {
  const { item } = route.params;

  const navigation = useNavigation();
  const [selectedarray, setSelectedarray] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.topsec}>
        <Nav title='' />
      </View>
      <View style={styles.containerb}>
        <View style={styles.imgcont}>
          <Image style={styles.img} source={item.img} />
          <Text style={styles.imgtext}>{item.name}</Text>
        </View>
        <Text style={styles.amount}> 1000.00</Text>
        <View style={styles.desccont}>
          <Text style={styles.desc}>
            Enter your transaction PIN to complete this payment
          </Text>
        </View>
        <View style={styles.notbox}>
          <View
            style={selectedarray.length >= 1 ? styles.notactive : styles.not}
          ></View>
          <View
            style={selectedarray.length >= 2 ? styles.notactive : styles.not}
          ></View>
          <View
            style={selectedarray.length >= 3 ? styles.notactive : styles.not}
          ></View>
          <View
            style={selectedarray.length == 4 ? styles.notactive : styles.not}
          ></View>
        </View>
        <Keyboard
          selectedarray={selectedarray}
          setSelectedarray={setSelectedarray}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFE',
    paddingTop: 20,
  },
  containerb: {
    paddingHorizontal: 20,
  },
  topsec: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  imgcont: {
    displa: 'flex',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  img: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  imgtext: {
    color: '#636363',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'SF_Pro_Display_Medium',
  },
  amount: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 30,

    fontFamily: 'SF_Pro_Display_Medium',
  },
  desccont: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  desc: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
    maxWidth: 200,
    fontFamily: 'SF_Pro_Display_Medium',
  },
  notbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 40,
  },

  not: {
    width: 15,
    height: 15,
    backgroundColor: '#E3EFE2',
    marginHorizontal: 10,
    borderRadius: 50,
  },
  notactive: {
    width: 15,
    height: 15,
    backgroundColor: '#548E4E',
    marginHorizontal: 10,
    borderRadius: 50,
  },
});

export default ConfirmBillPay;
