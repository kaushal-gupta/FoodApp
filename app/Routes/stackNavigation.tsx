import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './tabNavigation';
const Stack = createStackNavigator();
import {LoginModel} from '../ViewModels';
import {useDispatch, useSelector} from 'react-redux';

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabNav}></Stack.Screen>
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginModel} />
    </Stack.Navigator>
  );
};

const StackNav = () => {
  const check = useSelector((store: any) => store.authenticUser.authentic);
  console.log(check);

  return (
    <NavigationContainer>
      {check ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default StackNav;
