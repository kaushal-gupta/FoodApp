import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, Text} from 'react-native';

import {
  DeliveryModel,
  DinningModel,
  GroceryModel,
  MoneyModel,
} from '../ViewModels';
import Constants from '../Constants';
import styles from './styles';
const Tab = createBottomTabNavigator();

interface TabBarProps {
  focused: boolean;
  label: string;
  icon: any;
}
const TabBarIcon = (props: TabBarProps) => {
  const {focused, label, icon} = props;
  return (
    <View style={styles.iconsContainer}>
      <Image
        source={icon}
        style={[
          styles.icons,
          {
            tintColor: focused
              ? Constants.colors.primary1
              : Constants.colors.primary2,
          },
        ]}
      />
      <Text
        style={{
          color: focused ? Constants.colors.black : Constants.colors.primary2,
        }}>
        {label}
      </Text>
    </View>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: 5,
          height: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name="Delivery"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                focused={focused}
                label={Constants.strings.TabBarLabels.Delivery}
                icon={Constants.icons.delivery}
              />
            );
          },
        }}
        component={DeliveryModel}
      />
      <Tab.Screen
        name="Dinning"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                focused={focused}
                label={Constants.strings.TabBarLabels.Dining}
                icon={Constants.icons.dining}
              />
            );
          },
        }}
        component={DinningModel}
      />
      <Tab.Screen
        name="Grocery"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                focused={focused}
                label={Constants.strings.TabBarLabels.Grocery}
                icon={Constants.icons.grocery}
              />
            );
          },
        }}
        component={GroceryModel}
      />
      <Tab.Screen
        name="Money"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                focused={focused}
                label={Constants.strings.TabBarLabels.Money}
                icon={Constants.icons.money}
              />
            );
          },
        }}
        component={MoneyModel}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
