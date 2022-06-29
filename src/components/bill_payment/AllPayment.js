import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
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
import Img11 from '../../../assets/images/img11.png';
import Img12 from '../../../assets/images/img12.png';

const billData = [
  {
    id: '1',
    title: 'Airtime',
    image: [
      { id: 'a', img: Img1, name: 'MTN' },
      { id: 'b', img: Img2, name: 'Airtel' },
      { id: 'c', img: Img3, name: 'GLO' },
      { id: 'd', img: Img4, name: '9Mobile' },
    ],
  },
  {
    id: '2',
    title: 'Electricity',
    image: [
      { id: 'a', img: Img5, name: 'EKEDC' },
      { id: 'b', img: Img6, name: 'EKEDC' },
      { id: 'c', img: Img8, name: 'Abuja' },
      { id: 'd', img: Img8, name: 'Abuja' },
    ],
  },
  {
    id: '3',
    title: 'TV Bills',
    image: [
      { id: 'a', img: Img12, name: 'DSTV' },
      { id: 'b', img: Img11, name: 'GOTV' },
      { id: 'c', img: Img12, name: 'DSTV' },
      { id: 'd', img: Img12, name: 'DSTV' },
    ],
  },
  {
    id: '4',
    title: 'Internet Services',
    image: [
      { id: 'a', img: Img10, name: 'Smile' },
      { id: 'a', img: Img9, name: 'Spectranet' },
      { id: 'a', img: Img9, name: 'Spectranet' },
      { id: 'a', img: Img9, name: 'Spectranet' },
    ],
  },
];

const BillPayment = ({ handleAGoToSelectedBill }) => {
  return (
    <>
      {billData.map((item) => {
        return (
          <View key={item.id} style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.imagelist}>
              {item?.image.map((val) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      item.title == 'Airtime' && handleAGoToSelectedBill(val)
                    }
                    style={styles.imagelistcont}
                  >
                    <Image key={val.id} style={styles.img} source={val.img} />
                    <Text style={styles.imgname}>{val.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {item.title !== 'Airtime' && (
              <View style={styles.viewallbox}>
                <TouchableOpacity>
                  <Text style={styles.viewall}>view all</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        );
      })}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    elevation: 0.2,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginBottom: 20,
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
  imagelistcont: {
    alignItems: 'center',
    display: 'flex',
  },
  imgname: {
    color: '#636363',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Helvetica_Neue_Medium',
  },
  viewallbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewall: {
    color: '#548E4E',
    fontSize: 12,

    fontFamily: 'Helvetica_Neue_Medium',
  },
});
export default BillPayment;
