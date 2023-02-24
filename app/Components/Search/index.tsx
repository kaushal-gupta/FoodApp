import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import Constants from '../../Constants';
import styles from './styles';

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={Constants.icons.search} style={styles.icon} />
      <TextInput
        style={styles.inputText}
        placeholder={
          Constants.strings.PlacholderLabels.Delivery.search
        }></TextInput>
      <TouchableOpacity>
        <Image source={Constants.icons.voice} style={styles.icon}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;
