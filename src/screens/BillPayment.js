import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Search from '../components/search/Search';
import AllPayment from '../components/bill_payment/AllPayment';
import Nav from '../components/navbar/Nav';
import { useNavigation } from '@react-navigation/native';

const BillPay = () => {
  const navigation = useNavigation();
  const handleAGoToSelectedBill = (item) => {
    navigation.navigate('SelectedBill', { item });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.topsec}>
            <Nav title='Bill Payments' />
          </View>
          <View style={styles.searchcontainer}>
            <Search />
          </View>
          <View style={styles.paymentcontainer}>
            <AllPayment handleAGoToSelectedBill={handleAGoToSelectedBill} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFE',
    paddingTop: 20,
  },
  topsec: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  searchcontainer: {
    padding: 20,
  },
  titlecontainer: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  subtitlecontainer: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  line: {
    marginTop: 25,
    borderWidth: 0.8,
    borderColor: '#F1F1F1',
  },
  viewmorecontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    alignItems: 'center',
  },
  viewmoretext: {
    color: '#548E4E',
    fontSize: 14,
    fontFamily: 'SF_Pro_Display_Medium',
    marginRight: 10,
  },
  paymentcontainer: {
    marginTop: 10,
  },
});

export default BillPay;
