import React from 'react';
import DeliveryScreen from '../Views/Delivery/deliveryScreen';

interface InputProps {
  navigation: any;
}
const DeliveryModel = (props: InputProps) => {
  const {navigation} = props;
  return <DeliveryScreen navigation={navigation}></DeliveryScreen>;
};

export default DeliveryModel;
