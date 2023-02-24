import React, {useState} from 'react';
import LoginScreen from '../Views/Login/LoginScreen';
import {authenticate} from '../network';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AuthenticUser} from '../Redux/actions/Actions';
interface InputProps {
  navigation: any;
}
const LoginModel = (props: InputProps) => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (name: string, value: string) => {
    setFormData({...formData, [name]: value});
  };

  const onSubmit = async () => {
    try {
      let data = await authenticate(formData.email, formData.password);
      if (data.token) {
        dispatch(AuthenticUser());
        navigation.replace('Tab');
      } else {
        Alert.alert('Invalid Credentials');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <LoginScreen
      navigation={navigation}
      handleOnChange={handleOnChange}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
    />
  );
};

export default LoginModel;
