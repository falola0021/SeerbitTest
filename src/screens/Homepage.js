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
import Bg from '../../assets/images/bg.png';
import Bill from '../../assets/images/svgs/bill';
import Comp from '../../assets/images/svgs/Comp';
import Comp2 from '../../assets/images/svgs/Comp2';
import CopyIcon from '../../assets/images/svgs/Copy';
import LinkedIcon from '../../assets/images/svgs/link';
import Users from '../../assets/images/svgs/user-square';
import Comp6 from '../../assets/images/svgs/Comp6';

import { FontAwesome } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { showMessage } from 'react-native-flash-message';
import Search from '../components/search/Search';
import Title from '../components/titles/Title';
import Subtitle from '../components/titles/Subtitle';
import Recent from '../components/recent_transactions/Recent';
import BillPayment from '../components/bill_payment/RecentBillPayment';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();

  const copyToClipboard = (copiednum) => {
    Clipboard.setStringAsync(copiednum);
    showMessage({
      message: `${copiednum} has been copied to your clipboard`,
      type: 'success',
      fontSize: 1,
      color: '#fff',
    });
  };

  const handleAGoToBillPage = () => {
    navigation.navigate('BillPayment');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.topsec}>
            <Text style={styles.toptext}>Good Afternoon, Tola</Text>
            <View style={styles.righsec}>
              <View style={styles.righttext}>
                <Text style={styles.amount}>₦ 0.00</Text>
                <TouchableOpacity>
                  <FontAwesome name='angle-down' size={24} color='black' />
                </TouchableOpacity>
              </View>
              <Text style={styles.toptext2}>Wallet Balance</Text>
            </View>
          </View>
          <ImageBackground
            source={Bg}
            resizeMode='cover'
            style={styles.bgimage}
          >
            <View style={styles.topicon}>
              <TouchableOpacity style={styles.iconcontainer}>
                <View style={styles.iconbg}>
                  <Comp2 />
                </View>
                <Text style={styles.icontext}>Send Money</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.midicons}>
              <TouchableOpacity style={styles.iconcontainer}>
                <View style={styles.iconbg}>
                  <LinkedIcon />
                </View>
                <Text style={styles.icontext}>Link Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleAGoToBillPage}
                style={styles.iconcontainer}
              >
                <View style={styles.iconbg}>
                  <Bill />
                </View>
                <Text style={styles.icontext}>Pay Bill</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomicon}>
              <TouchableOpacity style={styles.iconcontainer}>
                <View style={styles.iconbg}>
                  <Comp />
                </View>
                <Text style={styles.icontext}>Request Money</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.copycontainer}>
              <TouchableOpacity
                onPress={() => copyToClipboard('1007856777')}
                style={styles.copybox}
              >
                <Text style={styles.acctitle}>Account Number -</Text>
                <Text style={styles.accnum}>1007856777</Text>
                <CopyIcon />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.searchcontainer}>
            <Search />
          </View>
          <View style={styles.titlecontainer}>
            <Title title='Recent Transaction' />
          </View>
          <View style={styles.subtitlecontainer}>
            <Subtitle subtitle='Saturday, 11 February 2022' />
          </View>
          <View style={styles.line}></View>
          <Recent />
          <Recent />
          <TouchableOpacity style={styles.viewmorecontainer}>
            <Text style={styles.viewmoretext}>Show more</Text>
            <FontAwesome name='angle-down' size={24} color='black' />
          </TouchableOpacity>
          <View style={styles.titlecontainer}>
            <Title title='Bill Payment' />
          </View>
          <View style={styles.paymentcontainer}>
            <BillPayment />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <View style={styles.absolute}>
        <View style={styles.static}>
          <TouchableOpacity style={styles.staticcon}>
            <Comp6 />
          </TouchableOpacity>
          <TouchableOpacity style={styles.staticcon}>
            <Users />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  topsec: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  righttext: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toptext: {
    width: 133,
    height: 60,
    fontFamily: 'SF_Pro_Display_Medium',
    fontSize: 16,
    lineHeight: 30,
    color: '#424242',
  },
  righsec: {
    alignItems: 'center',
  },
  toptext2: {
    fontFamily: 'SF_Pro_Display_Medium',
    fontSize: 16,
    lineHeight: 30,
    color: '#424242',
  },
  amount: {
    fontFamily: 'Helvetica_Neue_Medium',
    fontSize: 20,
    color: '#212121',
    marginRight: 10,
  },
  bgimage: {
    padding: 20,
    marginTop: 20,
  },
  iconbg: {
    backgroundColor: '#BDD9BA',

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 85,
    height: 85,
  },
  iconcontainer: {
    maxWidth: 150,
    height: 85,
    alignItems: 'center',
  },
  icontext: {
    fontFamily: 'SF_Pro_Display_Medium',
    fontSize: 14,
    lineHeight: 14,
    color: '#548E4E',
    marginTop: 10,
  },
  midicons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topicon: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  bottomicon: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  copycontainer: {
    alignItems: 'center',
  },
  copybox: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#BDD9BA',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 40,
  },
  acctitle: {
    fontSize: 12,
    fontFamily: 'SF_Pro_Display_Medium',
    color: '#548E4E',
  },
  accnum: {
    fontSize: 12,
    fontFamily: 'SF_Pro_Display_Regular',
    color: '#548E4E',
    marginRight: 5,
    marginLeft: 5,
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
  static: {
    display: 'flex',
    flexDirection: 'row',
    boxShadow: '0px 4px 4px rgba(62, 62, 62, 0.07)',
    width: 180,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 3,
  },
  staticcon: {
    paddingHorizontal: 20,

    paddingVertical: 10,
  },
  absolute: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Homepage;
