'use client';
import { authApi } from '@/apis/authApi';
import useStatusStore from '@/store/useStatus';
import React, { useEffect, useState } from 'react';
import OffersList, { Offer } from './components/OfferList';

export interface CardItem {
  _id: string;
  cardName: string;
  price: {
    lastPrice: number;
    currentPrice: number;
  };
  image: string;
  attributes: { background: string };
} //카드 콜렉션이랑 똑같음

const Page: React.FC = () => {
  // const res = await CardApi.getAllCard();
  // const res = await authApi.offers();
  // const res = await authApi.status();
  // console.log(res);
  const userId = useStatusStore((state) => state.userId);

  const [offers, setOffers] = useState<Offer[]>([]); // API에서 받은 제안 데이터를 저장하는 상태

  useEffect(() => {
    const fetchOffers = async () => {
      if (userId) {
        try {
          const res = await authApi.offers(userId);
          console.log('Fetched offers:', res); // 응답 데이터 확인
          setOffers(res); // 상태에 API에서 받은 데이터를 저장
        } catch (error) {
          console.error('Error fetching offers:', error);
        }
      } else {
        console.log('userId is null or not set yet');
      }
    };

    fetchOffers();
  }, [userId]);
  return (
    <div className="px-4    relative">
      {offers && <OffersList offers={offers} />}
    </div>
  );
};

export default Page;
