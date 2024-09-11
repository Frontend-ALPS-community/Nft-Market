'use client';
import { CardApi } from '@/apis/cardApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SortButtons from './SortBtn';

export interface Offer {
  cardId: string;
  cardName: string;
  price: string;
  date: string;
  owner: string;
  _id: string; // 수신자
}

interface OffersListProps {
  offers: Offer[];
}

const OffersList: React.FC<OffersListProps> = ({ offers }) => {
  const [priceAsc, setPriceAsc] = useState<boolean | null>(true);
  const [dateAsc, setDateAsc] = useState<boolean | null>(null);
  const [cardsData, setCardsData] = useState<{ [key: string]: any }>({}); // cardId에 대한 카드 데이터를 저장하는 상태
  //console.log(offers);
  useEffect(() => {
    const fetchCardData = async (cardId: string) => {
      try {
        const cardData = await CardApi.getCard(cardId);
        //console.log(cardData); // 카드 정보를 가져오는 API 호출
        setCardsData((prevData) => ({
          ...prevData,
          [cardId]: cardData, // cardId에 대한 데이터 저장
        }));
        // console.log(cardData);
      } catch (error) {
        console.error(`Error fetching card with id ${cardId}:`, error);
      }
    };

    // 각 offer에 대한 카드 데이터를 가져오기
    offers.forEach((offer) => {
      if (!cardsData[offer.cardId]) {
        fetchCardData(offer.cardId); // 카드 데이터가 없는 경우에만 요청
      }
    });
  }, [offers, cardsData]); // offers 또는 cardsData가 변경될 때마다 실행

  const sortedOffers = offers.slice().sort((a, b) => {
    if (priceAsc !== null) {
      // price가 string일 경우 숫자로 변환
      const priceA: number =
        typeof a.price === 'string' ? parseFloat(a.price) : a.price;
      const priceB: number =
        typeof b.price === 'string' ? parseFloat(b.price) : b.price;

      return priceAsc ? priceA - priceB : priceB - priceA;
    } else {
      const dateA: number = new Date(a.date).getTime(); // date는 number로 변환
      const dateB: number = new Date(b.date).getTime(); // date는 number로 변환
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
        {sortedOffers.map((offer) => (
          <Link key={offer.cardId} href={`/assets/${offer.cardId}`} passHref>
            <div className="block p-4 bg-gray-50 hover:bg-gray-200 rounded-lg shadow-sm transition duration-150 ease-in-out mb-4">
              <div className="grid grid-cols-4 items-center">
                {cardsData[offer.cardId] ? (
                  <>
                    {/* 카드 데이터가 있을 때 렌더링 */}
                    <Image
                      className="col-span-1"
                      width={50}
                      height={50}
                      alt={cardsData[offer.cardId].cardName}
                      src={
                        process.env.NEXT_PUBLIC_Backend_URL
                          ? process.env.NEXT_PUBLIC_Backend_URL +
                            cardsData[offer.cardId].image
                          : '/fallback-image.jpg'
                      }
                      unoptimized
                    />
                    <div className="col-span-1 text-center">
                      {cardsData[offer.cardId].cardName}
                    </div>
                  </>
                ) : (
                  <>
                    {/* 로딩 중일 때 또는 카드 데이터가 없을 때 */}
                    <div className="col-span-1 text-center">Loading...</div>
                  </>
                )}
                <div className="col-span-1 text-center">{offer.price}ETH</div>
                <div className="col-span-1 text-center text-[9px] sm:text-base">
                  To: {offer.owner} {/* 수신자 정보 유지 */}
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
