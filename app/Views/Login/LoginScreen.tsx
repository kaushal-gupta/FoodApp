import React from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import Constants from '../../Constants';
import styles from './styles';
import {InputField, PrimaryButton} from '../../Components';
interface InputProps {
  navigation: any;
  handleOnChange: (name: string, value: string) => void;
  formData: {
    email: string;
    password: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
  onSubmit: () => void;
}
const LoginScreen = (props: InputProps) => {
  const {navigation, formData, handleOnChange, onSubmit} = props;
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Constants.colors.white}
        animated
        barStyle={'dark-content'}
      />
      <Image source={Constants.images.logo} style={styles.logo} />
      <Text style={styles.headText}>Login</Text>
      <InputField
        name="Email"
        value={formData.email}
        onChange={value => handleOnChange('email', value)}
      />
      <InputField
        name="Password"
        value={formData.password}
        onChange={value => handleOnChange('password', value)}
      />

      <View style={styles.submitContainer}>
        <PrimaryButton name={'Submit'} onClick={onSubmit} />
      </View>
    </View>
  );
};

export default LoginScreen;
