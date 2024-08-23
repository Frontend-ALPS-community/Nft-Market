'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SortButtons from './SortBtn';
import { CardItem } from './page';

interface Offer {
  id: number;
  cardName: string;
  offeredPrice: string;
  date: string;
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

  //정렬 로직 : page.tsx에서 정보 요청-> 리스트컴포넌트에서 받음->
  // 정렬함수에 넣음-> 모듈화 된 버튼에 따라 함수 실행. 가격순 정렬인지/날짜순 정렬인지 boolean체크

  return (
    <div>
      <SortButtons
        onSortByPrice={() => setPriceAsc(!priceAsc)}
        onSortByDate={() => {
          setPriceAsc(null);
          setDateAsc(!dateAsc);
        }}
        priceAsc={priceAsc}
        dateAsc={dateAsc}
      />
      <div className="mt-6 space-y-4">
        {res.map((offer) => (
          <Link key={offer._id} href={`/assets/${offer._id}`} className="mb-2">
            <div className="block p-4 bg-gray-100 rounded-lg shadow-sm justify-between items-center cursor-pointer mb-4">
              <div className="flex">
                {/* 이미지 컴포넌트 또는 이미지 태그가 위치할 곳 */}
                <Image
                  width={100}
                  height={100}
                  alt="offerImage"
                  src={process.env.NEXT_PUBLIC_Backend_URL + offer.image}
                />
                <div>
                  <h2 className="text-lg font-semibold">{offer.cardName}</h2>
                  <p className="text-gray-600">
                    제안 가격: {offer.price.lastPrice}
                  </p>
                  {/* <p className="text-gray-500">날짜: {offer.date}</p> */}
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
