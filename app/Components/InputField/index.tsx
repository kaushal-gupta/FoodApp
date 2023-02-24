import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style';

interface InputProps {
  name: string;
  value: string;
  onChange: (value: any) => void;
}

const InputField = (props: InputProps) => {
  const {name, value, onChange} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{name}</Text>
      <TextInput
        style={styles.inputText}
        placeholder={name}
        onChangeText={value => onChange(value)}
        value={value}></TextInput>
    </View>
  );
};

export default InputField;
