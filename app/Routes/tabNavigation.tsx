import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DeliveryModel,
  DinningModel,
  GroceryModel,
  MoneyModel,
} from '../ViewModels';
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Delivery" component={DeliveryModel} />
      <Tab.Screen name="Dinning" component={DinningModel} />
      <Tab.Screen name="Grocery" component={GroceryModel} />
      <Tab.Screen name="Money" component={MoneyModel} />
    </Tab.Navigator>
  );
};

export default TabNav;
