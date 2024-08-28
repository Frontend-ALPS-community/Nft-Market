'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SortButtons from './SortBtn';
import { CardItem } from './page';

export interface Offer {
  id: number;
  cardName: string;
  offeredPrice: string;
  date: string;
  status: 'Pending' | 'Accepted' | 'Declined'; // 제안 상태 추가
  from: string; // 발신자 추가
  to: string; // 수신자 추가
}

interface OffersListProps {
  offers: Offer[];
  res: CardItem[];
}

const OffersList: React.FC<OffersListProps> = ({ offers, res }) => {
  const [priceAsc, setPriceAsc] = useState<boolean | null>(true);
  const [dateAsc, setDateAsc] = useState<boolean | null>(null);

  const sortedOffers = offers.slice().sort((a, b) => {
    if (priceAsc !== null) {
      const priceA = parseFloat(a.offeredPrice.replace('$', ''));
      const priceB = parseFloat(b.offeredPrice.replace('$', ''));
      return priceAsc ? priceA - priceB : priceB - priceA;
    } else {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateAsc ? dateA - dateB : dateB - dateA;
    }
  });

  return (
    <div>
      <SortButtons
        onSortByPrice={() => {
          setDateAsc(null);
          setPriceAsc(!priceAsc);
        }}
        onSortByDate={() => {
          setPriceAsc(null);
          setDateAsc(!dateAsc);
        }}
        priceAsc={priceAsc}
        dateAsc={dateAsc}
      />
      <div className="mt-6 space-y-4">
        {sortedOffers.map((offer) => (
          <Link key={offer.id} href={`/assets/${offer.id}`}>
            <div className="block p-4 bg-gray-100 rounded-lg shadow-sm justify-between items-center cursor-pointer mb-4">
              <div className="flex">
                <Image
                  width={100}
                  height={100}
                  alt={offer.cardName}
                  src={process.env.NEXT_PUBLIC_Backend_URL + offer.image}
                  unoptimized // Next.js 환경에서 최적화 설정을 무시
                  //sortedOffers로하면 목데이터, res로 하면 불러온 데이터 사용.
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{offer.cardName}</h2>
                  <p>제안 가격: {offer.offeredPrice}</p>
                  <p>상태: {offer.status}</p>
                  <p>날짜: {offer.date}</p>
                  <p>
                    From: {offer.from} ➡️ To: {offer.to}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OffersList;
