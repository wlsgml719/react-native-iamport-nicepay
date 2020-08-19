import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../components/Home';
import Payment from '../components/Payment';

const RootNav = () => {
  return (
    <NavigationContainer>
      <MainStackNav />
    </NavigationContainer>
  );
};

const MainStackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Payment'} component={Payment} />
    </Stack.Navigator>
  );
};

export default RootNav;
