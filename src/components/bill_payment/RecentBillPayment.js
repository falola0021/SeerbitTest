import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import Img1 from '../../../assets/images/mtn1.png';
import Img2 from '../../../assets/images/mtn2.png';
import Img3 from '../../../assets/images/mtn3.png';
import Img4 from '../../../assets/images/mtn4.png';
import Img5 from '../../../assets/images/img5.png';
import Img6 from '../../../assets/images/img6.png';
import Img7 from '../../../assets/images/img7.png';
import Img8 from '../../../assets/images/img8.png';
import Img9 from '../../../assets/images/img9.png';
import Img10 from '../../../assets/images/img10.png';

const billData = [
  {
    id: '1',
    title: 'Airtime',
    image: [
      { id: 'a', img: Img1 },
      { id: 'b', img: Img2 },
      { id: 'c', img: Img3 },
      { id: 'd', img: Img4 },
    ],
  },
  {
    id: '2',
    title: 'Electricity',
    image: [
      { id: 'a', img: Img5 },
      { id: 'b', img: Img6 },
      { id: 'c', img: Img7 },
      { id: 'd', img: Img8 },
    ],
  },
  {
    id: '3',
    title: 'Internet Services',
    image: [{ id: 'a', img: Img10 }],
  },
];

const BillPayment = () => {
  return (
    <>
      {billData.map((item) => {
        return (
          <View key={item.id} style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.imagelist}>
              {item?.image.map((val) => {
                return (
                  <Image key={val.id} style={styles.img} source={val.img} />
                );
              })}
            </View>
          </View>
        );
      })}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    borderBottomWidth: 0.8,
    borderBottomColor: '#F1F1F1',
    paddingHorizontal: 20,
  },
  title: {
    color: '#11173A',
    fontSize: 12,
    fontFamily: 'Helvetica_Neue_Medium',
    marginBottom: 20,
    marginTop: 20,
  },
  img: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  imagelist: {
    displa: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
export default BillPayment;
