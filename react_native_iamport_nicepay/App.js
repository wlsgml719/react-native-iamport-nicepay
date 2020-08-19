/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import IMP from 'iamport-react-native';

const App = () => {
  const [product, setProduct] = useState({prod_amount: '', prod_name: ''});

  const handleChange = (text) => {
    console.log(text);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>iamport Nicepay Payments</Text>
      <View>
        <Text htmlFor={'prod_name'}>상품명</Text>
        <TextInput
          style={styles.prod_name}
          type={'text'}
          name={'prod_name'}
          onChange={handleChange}
        />
        <Text htmlFor={'prod_amount'}>가격</Text>
        <TextInput
          style={styles.prod_amount}
          type={'text'}
          name={'prod_amount'}
          onChange={handleChange}
        />
      </View>
      <View>
        <Text>간편 카드 등록 결제</Text>
        <TouchableOpacity
          style={styles.pay_billing}
          onPress={() => console.log('간편 카드 등록 결제')}
        />
      </View>
      <View>
        <TextInput
          style={styles.pay_title}
          type={'radio'}
          name={'payment_type'}
        />
        <Text htmlFor={'default'}>일반 결제</Text>

        <View>
          <TouchableOpacity
            style={styles.pay_default}
            onPress={() => console.log('신용카드')}>
            <Text>신용카드</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.pay_default}
            onPress={() => console.log('휴대전화')}>
            <Text>휴대전화</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    margin: 20,
  },
  pay_btn: {
    width: 300,
    height: 50,
    margin: 10,
  },
  pay_title: {
    marginBottom: 18,
    marginRight: 5,
  },
  pay_billing: {
    width: 300,
    height: 200,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  pay_default: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  prod_name: {display: 'flex', width: 200, marginRight: 5, borderWidth: 1},
  prod_amount: {display: 'flex', width: 200, marginRight: 5, borderWidth: 1},
});
export default App;
