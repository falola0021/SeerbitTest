import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import Nav from '../components/navbar/Nav';
import Title from '../components/titles/Title';
import PayMethods from '../components/pay_methods/PayMethods';
import { useNavigation } from '@react-navigation/native';

const BillPay = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  const [bill, setBill] = React.useState(item.name);
  const [showdrop, setShowdrop] = React.useState(false);
  const [switchdata, setSwitchdata] = React.useState(false);
  const [switchtopup, setSwitchtopup] = React.useState(true);
  const handleData = () => {
    setSwitchdata(true);
    setSwitchtopup(false);
  };
  const handleTopup = () => {
    setSwitchdata(false);
    setSwitchtopup(true);
  };

  const hidedropdown = () => {
    setShowdrop(!showdrop);
  };

  const selectBillMethod = (item) => {
    setBill(item);
    setShowdrop(false);
  };

  const handleAGoToConfirmScreen = () => {
    navigation.navigate('ConfirmPayment', { item });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.topsec}>
            <Nav title={'Airtime'} />
          </View>
          <>
            <View style={styles.title}>
              <Title title='Network Provider' />
            </View>
            <View style={styles.formcont}>
              <TouchableOpacity
                onPress={() => hidedropdown()}
                style={styles.selectbox}
              >
                <Text style={styles.innertext}>{bill}</Text>
                <FontAwesome name='angle-down' size={24} color='black' />
              </TouchableOpacity>
              {showdrop && (
                <View>
                  <TouchableOpacity
                    onPress={() => selectBillMethod('MTN')}
                    style={styles.options}
                  >
                    <Text>Mtn</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => selectBillMethod('Airtel')}
                    style={styles.options}
                  >
                    <Text>Airtel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => selectBillMethod('Glo')}
                    style={styles.options}
                  >
                    <Text>Glo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => selectBillMethod('9Mobile')}
                    style={styles.options}
                  >
                    <Text>9Mobile</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </>
          <>
            <View style={styles.title2}>
              <Title title='Category' />
            </View>
            <View style={styles.formcont}>
              <View style={styles.selectbox2}>
                <TouchableOpacity
                  onPress={handleTopup}
                  style={switchtopup ? styles.mobiletopup : styles.mobiletopupb}
                >
                  <Text
                    style={
                      switchtopup
                        ? styles.mobiletopuptext
                        : styles.mobiletopuptextb
                    }
                  >
                    Mobile Top-up
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleData}
                  style={switchdata ? styles.mobiletopup : styles.mobiletopupb}
                >
                  <Text
                    style={
                      switchdata
                        ? styles.mobiletopuptext
                        : styles.mobiletopuptextb
                    }
                  >
                    {' '}
                    Data Bundle{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
          <>
            <View style={styles.title2}>
              <Title title='Amount' />
            </View>
            <View style={styles.formcont}>
              <View style={styles.selectbox}>
                <TextInput style={styles.inputbox} placeholder='Enter Amount' />
              </View>
            </View>
          </>
          <>
            <View style={styles.title2}>
              <Title title='Phone Number' />
            </View>

            <View style={styles.formcont}>
              <View style={styles.selectboxc}>
                <TextInput
                  style={styles.inputbox}
                  placeholder='Enter Phone Number'
                />

                <View style={styles.selectboxb}>
                  <AntDesign name='contacts' size={16} color='#9C9C9C' />

                  <Text style={styles.selectboxbtext}>Contacts</Text>
                </View>
              </View>
            </View>
          </>
          <View style={styles.linecont}>
            <View style={styles.lines}></View>
            <Text style={styles.linetext}>Pay With</Text>
            <View style={styles.lines}></View>
          </View>
          <View style={styles.paycontainer}>
            <PayMethods />
            <TouchableOpacity
              onPress={handleAGoToConfirmScreen}
              style={styles.submit}
            >
              <Text style={styles.submittext}>Purchase</Text>
            </TouchableOpacity>
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

  title: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title2: {
    paddingHorizontal: 20,
    paddingVertical: 15,

    marginTop: 10,
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
  formcont: {
    paddingHorizontal: 20,
  },
  selectbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FDFDFD',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  selectboxb: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FDFDFD',
    paddingVertical: 20,
    paddingLeft: 20,
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#EAEAEA',
    width: 110,
  },
  selectbox2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FDFDFD',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  selectboxc: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  innertext: {
    fontFamily: 'SF_Pro_Display_Medium',
    fontSize: 12,
  },
  selectboxbtext: {
    fontFamily: 'SF_Pro_Display_Medium',
    fontSize: 14,
    color: '#9C9C9C',
  },
  options: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
    backgroundColor: '#F1F1F1',
  },
  inputbox: {
    display: 'flex',
    flexGrow: 1,
    fontFamily: 'SF_Pro_Display_Medium',
    fontSize: 12,
  },
  mobiletopup: {
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(84, 142, 78, 0.08)',
    flexGrow: 1,
  },
  mobiletopuptext: {
    color: '#548E4E',
    fontFamily: 'SF_Pro_Display_Medium',
    fontSize: 14,
  },

  mobiletopupb: {
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexGrow: 1,
  },
  mobiletopuptextb: {
    color: '#000000',
    fontFamily: 'SF_Pro_Display_Medium',
    fontSize: 14,
  },
  linecont: {
    paddingHorizontal: 20,
    marginVertical: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  linetext: {
    fontFamily: 'SF_Pro_Display_Medium',
    fontSize: 12,
    paddingHorizontal: 10,
  },
  lines: {
    borderWidth: 0.8,
    borderColor: '#C4C4C4',
    flexGrow: 1,
  },
  paycontainer: {
    paddingHorizontal: 20,
  },
  submit: {
    backgroundColor: 'rgba(192, 215, 62, 0.4)',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    marginVertical: 40,
    borderRadius: 15,
  },
  submittext: {
    color: '#FDFDFD',
    fontSize: 16,
    fontFamily: 'Helvetica_Neue_Medium',
  },
});

export default BillPay;
