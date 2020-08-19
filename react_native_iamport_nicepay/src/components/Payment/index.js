import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import IMP from 'iamport-react-native';
import Data from '../../../personal.json';

const Payment = ({navigation, route}) => {
  const data = {
    pg: 'nice',
    pay_method: route.params?.type || 'card',
    name: '아임포트 결제데이터 분석',
    merchant_uid: `mid_${new Date().getTime()}`,
    amount: '1000',
    buyer_name: Data.UserData.buyer_name,
    buyer_tel: Data.UserData.buyer_tel,
    buyer_email: Data.UserData.buyer_email,
    buyer_addr: Data.UserData.buyer_addr,
    buyer_postcode: Data.UserData.buyer_postcode,
    app_scheme: 'example',
    digital: route.params?.digital,
  };

  //   useEffect(() => {
  //     if(route.params) { setData(route.params) }
  //   }, [])

  const callBack = (res) => {
    console.group('callback');
    console.log(res);
    console.groupEnd('callback');

    console.group('userData');
    console.log(data);
    console.groupEnd('userData');
  };

  return (
    <IMP.Payment
      userCode={Data.Iamport.code}
      loading={<Text>로딩중입니다.</Text>}
      data={data}
      callback={callBack}
    />
  );
};

export default Payment;
