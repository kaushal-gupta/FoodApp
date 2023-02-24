import React from 'react';
import {View, ImageBackground, Text, Dimensions} from 'react-native';
import Constants from '../../Constants';
import styles from './style';
const {width, height} = Dimensions.get('window');
interface InputProps {
  item: any;
  index: number;
}
const ResturantItem = (props: InputProps) => {
  const {item, index} = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        source={item.image}
        imageStyle={styles.imageStyle}>
        <View style={styles.innerContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <Text>{item.extraMessage}</Text>
        <Text>{item.time}</Text>
      </View>
    </View>
  );
};

export default ResturantItem;
