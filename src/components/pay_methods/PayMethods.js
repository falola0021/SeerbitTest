import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Image1 from '../../../assets/images/empty-wallet.png';
import Image2 from '../../../assets/images/fcmb.png';
import Image3 from '../../../assets/images/gtbank.png';

import React, { useState } from 'react';

const data = [
  {
    id: '1',
    name: '9PSB Wallet',
    balance: '434,533,000',
    image: Image1,
  },
  {
    id: '2',
    name: 'Bank',
    balance: '23,000',
    image: Image2,
  },
  {
    id: '3',
    name: 'Bank',
    balance: '23,000',
    image: Image3,
  },
];

const PayMethods = () => {
  const [selected, setSelected] = React.useState(null);
  const handleSelect = (item) => {
    setSelected(item.id);
  };

  return (
    <>
      {data.map((item) => {
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => handleSelect(item)}
          >
            <View style={styles.left}>
              <Image style={styles.img} source={item.image} />
              <Text style={styles.lefttext}>{item.name}</Text>
            </View>
            <View style={styles.left}>
              <Text style={styles.lefttext}>Balance: {item.balance}</Text>
              <View
                style={
                  (item.id == '1' && !selected) || selected == item.id
                    ? styles.circleselectactive
                    : styles.circleselect
                }
              ></View>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: ' rgba(84, 142, 78, 0.08)',
    padding: 20,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 30,
    height: 30,
    marginRight: 15,
    resizeMode: 'contain',
  },
  lefttext: {
    color: '#424242',
    fontSize: 12,
    fontFamily: 'Helvetica_Neue_Medium',
  },
  circleselect: {
    borderColor: 'rgba(33, 33, 33, 0.32)',
    width: 17,
    height: 17,
    borderRadius: 50,
    borderWidth: 1,
    marginLeft: 10,
  },
  circleselectactive: {
    borderColor: '#548E4E',
    width: 17,
    height: 17,
    borderRadius: 50,
    borderWidth: 4.5,
    marginLeft: 10,
  },
});
export default PayMethods;
