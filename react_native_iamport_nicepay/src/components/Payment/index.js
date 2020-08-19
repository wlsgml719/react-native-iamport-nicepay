import React from 'react';
import {View, Text} from 'react-native';
import IMP from 'iamport-react-native';

const Payment = () => {
  const data = {
    pg: 'html5_inicis',
    pay_method: 'card',
    name: '아임포트 결제데이터 분석',
    merchant_uid: `mid_${new Date().getTime()}`,
    amount: '39000',
    buyer_name: '홍길동',
    buyer_tel: '01012345678',
    buyer_email: 'example@naver.com',
    buyer_addr: '서울시 강남구 신사동 661-16',
    buyer_postcode: '06018',
    app_scheme: 'example',
    // [Deprecated v1.0.3]: m_redirect_url
  };
  return (
    <IMP.Payment
      userCode={'iamport'} // 가맹점 식별코드
      loading={<Text>로딩</Text>} // 웹뷰 로딩 컴포넌트
      data={data} // 결제 데이터
      callback={() => console.log('콜백실행')} // 결제 종료 후 콜백
    />
  );
};

export default Payment;
