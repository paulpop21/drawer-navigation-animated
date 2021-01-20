import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import text from '../../constants/text';

const CartScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Your Cart Screen Content</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    ...text.mediumStyles,
  },
});

export default CartScreen;
