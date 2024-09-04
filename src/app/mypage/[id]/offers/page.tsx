import { authApi } from '@/apis/authApi';
import React from 'react';
import OffersList, { Offer } from './components/OfferList';

const offersData: Offer[] = [
  {
    id: 1,
    cardName: 'Fire Elemental',
    offeredPrice: '$100',
    date: '2024-08-01',
    status: 'Accepted',
    from: 'Alice',
    to: 'Bob',
  },
  {
    id: 2,
    cardName: 'Water Elemental',
    offeredPrice: '$150',
    date: '2024-08-03',
    status: 'Pending',
    from: 'Charlie',
    to: 'Dave',
  },
  {
    id: 3,
    cardName: 'Earth Elemental',
    offeredPrice: '$200',
    date: '2024-08-05',
    status: 'Declined',
    from: 'Eve',
    to: 'Frank',
  },
  {
    id: 4,
    cardName: 'Air Elemental',
    offeredPrice: '$120',
    date: '2024-08-07',
    status: 'Accepted',
    from: 'Grace',
    to: 'Helen',
  },
  {
    id: 5,
    cardName: 'Spirit Elemental',
    offeredPrice: '$180',
    date: '2024-08-09',
    status: 'Pending',
    from: 'Ian',
    to: 'Jack',
  },
  {
    id: 6,
    cardName: 'Shadow Elemental',
    offeredPrice: '$140',
    date: '2024-08-11',
    status: 'Accepted',
    from: 'Kelly',
    to: 'Liam',
  },
  {
    id: 7,
    cardName: 'Light Elemental',
    offeredPrice: '$220',
    date: '2024-08-13',
    status: 'Declined',
    from: 'Mia',
    to: 'Noah',
  },
  {
    id: 8,
    cardName: 'Ice Elemental',
    offeredPrice: '$250',
    date: '2024-08-15',
    status: 'Accepted',
    from: 'Olivia',
    to: 'Peter',
  },
  {
    id: 9,
    cardName: 'Lightning Elemental',
    offeredPrice: '$90',
    date: '2024-08-17',
    status: 'Pending',
    from: 'Quinn',
    to: 'Rachel',
  },
  {
    id: 10,
    cardName: 'Metal Elemental',
    offeredPrice: '$200',
    date: '2024-08-19',
    status: 'Accepted',
    from: 'Steve',
    to: 'Tina',
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
  //const res = await CardApi.getAllCard();
  // const res = await authApi.offers();
  const res = await authApi.status();
  console.log(res);
  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">제안</h1>
      <p>여기는 사용자가 제안한 아이템들을 보여주는 페이지입니다.</p>
      <OffersList offers={offersData} res={res} />
    </div>
  );
};

export default Page;
