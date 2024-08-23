import { CardApi } from '@/apis/cardApi';
import React from 'react';
import OffersList from './OfferList';

const offersData: Offer[] = [
  {
    id: 1,
    cardName: 'Fire Elemental',
    offeredPrice: '$100',
    date: '2024-08-01',
  },
  {
    id: 2,
    cardName: 'Water Elemental',
    offeredPrice: '$150',
    date: '2024-08-03',
  },
  {
    id: 3,
    cardName: 'Earth Elemental',
    offeredPrice: '$200',
    date: '2024-08-05',
  },
  {
    id: 4,
    cardName: 'Wind Elemental',
    offeredPrice: '$120',
    date: '2024-08-07',
  },
  {
    id: 5,
    cardName: 'Lightning Elemental',
    offeredPrice: '$180',
    date: '2024-08-09',
  },
  {
    id: 6,
    cardName: 'Ice Elemental',
    offeredPrice: '$140',
    date: '2024-08-11',
  },
  {
    id: 7,
    cardName: 'Shadow Elemental',
    offeredPrice: '$220',
    date: '2024-08-13',
  },
  {
    id: 8,
    cardName: 'Light Elemental',
    offeredPrice: '$250',
    date: '2024-08-15',
  },
];
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

const Page: React.FC = async () => {
  const res = await CardApi.getAllCard();
  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">제안</h1>
      <p>여기는 사용자가 제안한 아이템들을 보여주는 페이지입니다.</p>
      <OffersList offers={offersData} res={res} />
    </div>
  );
};

export default Page;
