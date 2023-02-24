import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

interface InputProps {
  name: string;
  onClick: () => void;
}
const PrimaryButton = (props: InputProps) => {
  const {name, onClick} = props;
  return (
    <TouchableOpacity onPress={() => onClick()} style={styles.button}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
