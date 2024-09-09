'use client';
import { authApi } from '@/apis/authApi';
import useUserIdStore from '@/store/useUserId';
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
  const userId = useUserIdStore((state) => state.userId);

  const [offers, setOffers] = useState<Offer[]>([]); // API에서 받은 제안 데이터를 저장하는 상태

  useEffect(() => {
    const fetchOffers = async () => {
      if (userId) {
        try {
          const res = await authApi.offers(userId);
          // console.log('Fetched offers:', res); // 응답 데이터 확인
          setOffers(res.offers); // 상태에 API에서 받은 데이터를 저장
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
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">제안</h1>
      <p>여기는 사용자가 제안한 아이템들을 보여주는 페이지입니다.</p>
      <OffersList offers={offers} />
    </div>
  );
};

export default Page;
/*

const offersData: Offer[] = [
  {
    id: 1,
    cardName: 'Fire Elemental',
    offeredPrice: '$100',
    date: '2024-08-01',

    to: 'Bob',
  },
  {
    id: 2,
    cardName: 'Water Elemental',
    offeredPrice: '$150',
    date: '2024-08-03',

    to: 'Dave',
  },
  {
    id: 3,
    cardName: 'Earth Elemental',
    offeredPrice: '$200',
    date: '2024-08-05',

    to: 'Frank',
  },
  {
    id: 4,
    cardName: 'Air Elemental',
    offeredPrice: '$120',
    date: '2024-08-07',

    to: 'Helen',
  },
  {
    id: 5,
    cardName: 'Spirit Elemental',
    offeredPrice: '$180',
    date: '2024-08-09',

    to: 'Jack',
  },
  {
    id: 6,
    cardName: 'Shadow Elemental',
    offeredPrice: '$140',
    date: '2024-08-11',

    to: 'Liam',
  },
  {
    id: 7,
    cardName: 'Light Elemental',
    offeredPrice: '$220',
    date: '2024-08-13',

    to: 'Noah',
  },
  {
    id: 8,
    cardName: 'Ice Elemental',
    offeredPrice: '$250',
    date: '2024-08-15',

    to: 'Peter',
  },
  {
    id: 9,
    cardName: 'Lightning Elemental',
    offeredPrice: '$90',
    date: '2024-08-17',
    to: 'Rachel',
  },
  {
    id: 10,
    cardName: 'Metal Elemental',
    offeredPrice: '$200',
    date: '2024-08-19',
    to: 'Tina',
  },
];
*/
