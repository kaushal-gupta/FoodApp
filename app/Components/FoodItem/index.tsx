import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
interface InputProps {
  item: any;
  index: number;
}

const FoodItem = (props: InputProps) => {
  const {item, index} = props;
  return (
    <View style={styles.container}>
      <Image source={item.icon} style={styles.image} resizeMode={'contain'} />
      <Text style={styles.labelText}>{item.name}</Text>
    </View>
  );
};

export default FoodItem;
