'use client';
import DetailLayout from '@/@components/assets/DetailLayout';
import useDecodedStore from '@/store/useDecode';
import useOfferModal from '@/store/useOfferModal';
import useBuyModal from '@/store/userBuyModal';
import useSellModal from '@/store/useSellModal';
import dayjs from 'dayjs';
import { CardData } from '../page';

export interface IDetailPrice {
  id: string;
  card: CardData;
  usdPrice: number;
}

const DetailPrice: React.FC<IDetailPrice> = ({ id, card, usdPrice }) => {
  const toggleOfferButton = useOfferModal().toggleButton;
  const toggleBuyButton = useBuyModal().toggleButton;
  const toggleSellButton = useSellModal().toggleButton;
  const { username } = useDecodedStore().decoded;
  const cardOwner = card.owner;
  const isOwner = username === cardOwner ? true : false;
  const price = card.price.currentPrice;
  const saleDate = card.saleEndDate;
  const date = {
    year: dayjs(card.saleEndDate).format('YYYY'),
    month: dayjs(card.saleEndDate).format('MM'),
    day: dayjs(card.saleEndDate).format('DD'),
    hour: dayjs(card.saleEndDate).format('HH'),
    minute: dayjs(card.saleEndDate).format('mm'),
  };

  return (
    <>
      <DetailLayout
        title={
          saleDate
            ? `판매종료 ${date.year}년 ${date.month}월 ${date.day}일 ${date.hour}:${date.minute}`
            : '가격정보'
        }
        arrow={false}
        bold={false}
      >
        <div className={`flex flex-col gap-4 m-4`}>
          <div className={`${price ? '' : 'hidden'}`}>
            <div className="text-theme-text-gray text-sm">현재가격</div>
            <div className="flex gap-4 items-baseline">
              <div className="font-bold text-3xl">
                {card.price.currentPrice}ETH
              </div>
              <div
                className={`text-theme-text-gray ${usdPrice ? '' : 'hidden'}`}
              >
                ${usdPrice}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              className={`flex-1 rounded-lg bg-theme-text-blue py-2 text-white font-semibold ${!isOwner && !price ? 'hidden' : ''}`}
              onClick={isOwner ? toggleSellButton : toggleBuyButton}
            >
              {isOwner ? '판매하기' : '지금 구매하기'}
            </button>
            <button
              className={`flex-1 rounded-lg bg-theme-bg-gray py-2 font-semibold ${isOwner ? 'hidden' : ''}`}
              onClick={toggleOfferButton}
            >
              제안하기
            </button>
          </div>
        </div>
      </DetailLayout>
    </>
  );
};

export default DetailPrice;
