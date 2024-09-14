'use client';
import dayjs from 'dayjs'; // day.js 라이브러리 import
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SortButtons from './SortBtn';

interface Price {
  currentPrice: number;
  lastPrice: number;
  priceHistory: any[];
}

interface Attributes {
  background: string;
  type: string;
  wing: string | null;
}

interface Card {
  _id: string;
  price: Price;
  attributes: Attributes;
  image: string;
  saleEndDate: string | null;
  cardName: string;
  owner: string;
  views: number;
  favorites: string[];
  offers: any[];
  transaction: any[];
  __v: number;
}

export interface Offer {
  cardId: Card;
  date: string;
  owner: string;
  price: number;
  lastPrice: number;
  _id: string;
}

interface OffersListProps {
  offers: Offer[];
}

const OffersList: React.FC<OffersListProps> = ({ offers }) => {
  const [priceAsc, setPriceAsc] = useState<boolean | null>(true);
  const [dateAsc, setDateAsc] = useState<boolean | null>(null);

  const sortedOffers = offers.slice().sort((a, b) => {
    if (priceAsc !== null) {
      return priceAsc ? a.price - b.price : b.price - a.price;
    } else {
      const dateA = dayjs(a.date).valueOf();
      const dateB = dayjs(b.date).valueOf();
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
      <div className="mt-6 space-y-4 md:text-base text-xs">
        {sortedOffers.map((offer) => {
          const cardData = offer.cardId;
          const cardId = cardData._id;
          return (
            <Link key={cardId} href={`/assets/${cardId}`} passHref>
              <div className="block p-4 bg-gray-50 hover:bg-gray-200 rounded-lg shadow-sm transition duration-150 ease-in-out mb-4">
                <div className="grid grid-cols-4 items-center">
                  <div
                    className="w-[60px] h-[60px] flex items-center justify-center rounded-md"
                    style={{ backgroundColor: cardData.attributes.background }}
                  >
                    <Image
                      width={50}
                      height={50}
                      alt={cardData.cardName}
                      src={
                        process.env.NEXT_PUBLIC_Backend_URL
                          ? process.env.NEXT_PUBLIC_Backend_URL + cardData.image
                          : '/fallback-image.jpg'
                      }
                      unoptimized
                    />
                  </div>

                  <div className="col-span-1 text-center">
                    {cardData.cardName}
                  </div>
                  <div className="col-span-1 text-center">
                    {offer.price} ETH
                  </div>
                  <div className="col-span-1 text-center text-[9px] sm:text-base">
                    To: {offer.owner}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OffersList;
