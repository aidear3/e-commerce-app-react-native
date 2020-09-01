import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
//Text
import CustomText from '../../../components/UI/CustomText';
//Colors
import Colors from '../../../utils/Colors';
import NumberFormat from '../../../components/UI/NumberFormat';

const TotalButton = ({ total, navigation, cartItems, cartId }) => {
  return (
    <View style={styles.total}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <CustomText
          style={{ fontSize: 14, fontWeight: '500', color: Colors.text }}
        >
          Thành tiền
        </CustomText>
        <NumberFormat price={total.toString()} style={{ fontSize: 14 }} />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PreOrderScreen', {
            cartItems,
            total,
            cartId,
          });
        }}
      >
        <View style={styles.btn}>
          <CustomText style={{ color: '#fff', fontSize: 16 }}>
            Tiến hành đặt hàng
          </CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.red,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  price: {
    color: 'red',
    fontSize: 16,
  },
});

export default TotalButton;
