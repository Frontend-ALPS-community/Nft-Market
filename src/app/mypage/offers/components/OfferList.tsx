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

      {/* 헤더 부분 */}
      <div className="hidden sm:flex items-center font-semibold border-b p-2 mt-4">
        <div className="flex items-center flex-[1.7]">아이템</div>
        <div className="flex-[1] text-left">제안 가격</div>
        <div className="flex-[1] text-left">마지막 판매</div>
        <div className="flex-[1] text-left">소유자</div>
        <div className="flex-[1] text-left">제안 일자</div>
      </div>

      {/* 리스트 아이템 부분 */}
      <div>
        {sortedOffers.map((offer) => {
          const cardData = offer.cardId;
          const cardId = cardData._id;
          return (
            <Link key={offer._id} href={`/assets/${cardId}`} passHref>
              <div className="border-b p-2 cursor-pointer hover:bg-theme-bg-gray group">
                {/* 모바일 뷰 */}
                <div className="sm:hidden">
                  <div className="flex items-center">
                    <div
                      className="w-[60px] h-[60px] flex items-center justify-center rounded-xl mr-4"
                      style={{
                        backgroundColor: cardData.attributes.background,
                      }}
                    >
                      <Image
                        width={50}
                        height={50}
                        alt={cardData.cardName}
                        src={
                          process.env.NEXT_PUBLIC_Backend_URL + cardData.image
                        }
                        className="rounded-xl"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base mb-1">
                        {cardData.cardName}
                      </div>
                      <div className="text-sm ">
                        제안 가격:{' '}
                        <span className="bg-theme-bg-gray p-1 rounded-md font-semibold">
                          {offer.price ? `${offer.price} ETH ✨` : '--'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        마지막 판매: {offer.lastPrice} ETH
                      </div>
                      <div className="text-sm text-gray-600">
                        제안 일자:{' '}
                        {dayjs(offer.date).format('MMM D, YYYY HH:mm A')}
                      </div>
                      <div className="text-sm text-gray-600">
                        소유자: {offer.owner}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 데스크탑 뷰 */}
                <div className="hidden sm:flex items-center">
                  <ul className="flex items-center w-full text-sm">
                    <li className="flex-[1.7] flex items-center gap-6">
                      <Image
                        width={40}
                        height={40}
                        style={{
                          backgroundColor: cardData.attributes.background,
                        }}
                        src={
                          process.env.NEXT_PUBLIC_Backend_URL + cardData.image
                        }
                        className="rounded-xl"
                        alt="Card Img"
                      />
                      <div className="font-semibold">{cardData.cardName}</div>
                    </li>
                    <li className="flex-[1] text-left">
                      <span className="bg-theme-bg-gray px-2 py-1 rounded-md font-semibold group-hover:bg-[#e3e3e3]">
                        {offer.price ? `${offer.price} ETH ✨` : '--'}
                      </span>
                    </li>
                    <li className="flex-[1] text-theme-text-gray text-left">
                      {offer.lastPrice} ETH
                    </li>

                    <li className="flex-[1] text-theme-text-blue text-left">
                      {offer.owner}
                    </li>
                    <li className="flex-[1] text-theme-text-gray text-left">
                      {dayjs(offer.date).format('MMM D, YYYY HH:mm A')}
                    </li>
                  </ul>
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
