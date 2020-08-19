import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../components/Home';
import Payment from '../components/Payment';
// import BillingE from '../components/Payment/billing';
import BillingEnroll from '../components/PaymentEnroll/index';

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
      <Stack.Screen
        name={'Home'}
        options={{
          title: '홈',
        }}
        component={Home}
      />
      <Stack.Screen
        name={'Payment'}
        options={{
          title: '일반결제',
        }}
        component={Payment}
      />
      {/* <Stack.Screen
        name={'Billing'}
        options={{
          title: '정기결제',
        }}
        component={Billing}
      /> */}
      <Stack.Screen
        name={'PaymentEnroll'}
        options={{
          title: '간편 카드 등록',
        }}
        component={BillingEnroll}
      />
    </Stack.Navigator>
  );
};

export default RootNav;
