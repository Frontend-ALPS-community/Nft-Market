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
          <Link key={offer.id} href={`/assets/${offer.id}`} passHref>
            <div className="block p-4 bg-gray-50 hover:bg-gray-200 rounded-lg shadow-sm transition duration-150 ease-in-out mb-4">
              <div className="grid grid-cols-5 items-center">
                <Image
                  className="col-span-1"
                  width={50}
                  height={50}
                  alt={offer.cardName}
                  src="/path/to/default/image.jpg"
                  unoptimized
                />
                <div className="col-span-1 text-center">{offer.cardName}</div>
                <div className="col-span-1 text-center">
                  {offer.offeredPrice}
                </div>
                <div className="col-span-1 text-center">{offer.status}</div>
                <div className="col-span-1 text-center">
                  From: {offer.from} ➡️ To: {offer.to}
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
