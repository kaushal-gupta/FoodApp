import React from 'react';
import {View, Text} from 'react-native';
interface InputProps {
  navigation: any;
}
const DeliveryScreen = (props: InputProps) => {
  const {navigation} = props;
  return (
    <View>
      <Text>DeliveryScreen</Text>
    </View>
  );
};

export default DeliveryScreen;
