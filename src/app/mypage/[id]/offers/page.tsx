'use client';
import React, { useState } from 'react';

interface Offer {
  id: number;
  cardName: string;
  offeredPrice: string;
  date: string;
}

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

const Page: React.FC = () => {
  const [priceAsc, setPriceAsc] = useState<boolean | null>(true);
  const [dateAsc, setDateAsc] = useState<boolean | null>(null);

  const getSortedOffers = () => {
    if (priceAsc !== null) {
      return offersData.slice().sort((a, b) => {
        const priceA = parseFloat(a.offeredPrice.replace('$', ''));
        const priceB = parseFloat(b.offeredPrice.replace('$', ''));
        return priceAsc ? priceA - priceB : priceB - priceA;
      });
    } else {
      return offersData.slice().sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateAsc ? dateA - dateB : dateB - dateA;
      });
    }
  };

  const handleSortByPrice = () => {
    setPriceAsc(!priceAsc);
  };

  const handleSortByDate = () => {
    setPriceAsc(null); // 가격 정렬을 비활성화
    setDateAsc(!dateAsc);
  };

  const sortedOffers = getSortedOffers();

  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">제안</h1>
      <p>여기는 사용자가 제안한 아이템들을 보여주는 페이지입니다.</p>

      {/* 정렬 버튼들 */}
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleSortByPrice}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          가격 순 정렬 {priceAsc ? '▲' : '▼'}
        </button>
        <button
          onClick={handleSortByDate}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          날짜 순 정렬 {dateAsc ? '▲' : '▼'}
        </button>
      </div>

      {/* 제안 목록 */}
      <div className="mt-6 space-y-4">
        {sortedOffers.map((offer) => (
          <div
            key={offer.id}
            className="p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{offer.cardName}</h2>
              <p className="text-gray-600">제안 가격: {offer.offeredPrice}</p>
              <p className="text-gray-500">날짜: {offer.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
