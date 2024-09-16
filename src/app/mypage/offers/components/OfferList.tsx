'use client';
import dayjs from 'dayjs';
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
    <div className="px-4">
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

      {/* 헤더 부분 수정 */}
      <div className="hidden sm:flex items-center font-semibold border-b p-2 mt-4">
        <div className="flex items-center flex-[1.7]">아이템</div>
        <div className="flex-[1] text-center">제안 가격</div>
        <div className="flex-[1] text-center">제안 일자</div>
        <div className="flex-[1] text-center">제안자</div>
      </div>

      {/* 리스트 아이템 부분 */}
      <div className="mt-2">
        {sortedOffers.map((offer) => {
          const cardData = offer.cardId;
          const cardId = cardData._id;
          return (
            <Link key={offer._id} href={`/assets/${cardId}`} passHref>
              <div className="border-b p-2 cursor-pointer hover:bg-gray-100">
                {/* 모바일 뷰 */}
                <div className="sm:hidden">
                  <div className="flex items-center">
                    <div
                      className="w-[60px] h-[60px] flex items-center justify-center rounded-md mr-4"
                      style={{
                        backgroundColor: cardData.attributes.background,
                      }}
                    >
                      <Image
                        width={50}
                        height={50}
                        alt={cardData.cardName}
                        src={
                          process.env.NEXT_PUBLIC_Backend_URL
                            ? process.env.NEXT_PUBLIC_Backend_URL +
                              cardData.image
                            : '/fallback-image.jpg'
                        }
                        unoptimized
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base">
                        {cardData.cardName}
                      </div>
                      <div className="text-sm text-gray-600">
                        가격: {offer.price} ETH
                      </div>
                      <div className="text-sm text-gray-600">
                        일자: {dayjs(offer.date).format('YYYY-MM-DD')}
                      </div>
                      <div className="text-sm text-gray-600">
                        제안자: {offer.owner}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 데스크탑 뷰 */}
                <div className="hidden sm:flex items-center">
                  {/* 아이템 */}
                  <div className="flex items-center flex-[1.7]">
                    <div
                      className="w-[60px] h-[60px] flex items-center justify-center rounded-md mr-4"
                      style={{
                        backgroundColor: cardData.attributes.background,
                      }}
                    >
                      <Image
                        width={50}
                        height={50}
                        alt={cardData.cardName}
                        src={
                          process.env.NEXT_PUBLIC_Backend_URL
                            ? process.env.NEXT_PUBLIC_Backend_URL +
                              cardData.image
                            : '/fallback-image.jpg'
                        }
                        unoptimized
                      />
                    </div>
                    <div className="text-base">{cardData.cardName}</div>
                  </div>
                  {/* 제안 가격 */}
                  <div className="flex-[1] text-center">{offer.price} ETH</div>
                  {/* 제안 일자 */}
                  <div className="flex-[1] text-center">
                    {dayjs(offer.date).format('YYYY-MM-DD')}
                  </div>
                  {/* 제안자 */}
                  <div className="flex-[1] text-center">{offer.owner}</div>
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
