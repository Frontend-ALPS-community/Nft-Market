'use client';
import BuyModal from '@/@components/modal/buyModal';
import ModalLayout from '@/@components/modal/modalLayout';
import OfferModal from '@/@components/modal/offerModal';
import SellModal from '@/@components/modal/sellModal';
import { CardApi } from '@/apis/cardApi';
import DetailProp from '@/app/assets/[id]/components/attributes/index.';
import DetailImg from '@/app/assets/[id]/components/img';
import DetailInfo from '@/app/assets/[id]/components/info';
import useDecodedStore from '@/store/useDecode';
import useOfferModal from '@/store/useOfferModal';
import useBuyModal from '@/store/userBuyModal';
import useSellModal from '@/store/useSellModal';
import { calcUsdPrice } from '@/utils/calcUsdPrice';
import { useEffect, useState } from 'react';
import DetailGraph from './components/graph';
import DetailOffer from './components/offer';
import DetailPrice from './components/price';
import DetailTransaction from './components/transaction';

interface IParams {
  params: { id: string };
}
export interface CardAttributes {
  background: string;
  type: string;
  // 추가 특성이 있다면 여기 추가
}

export interface Offer {
  _id: string;
  price: number;
  usdPrice: number;
  expiryDate: Date;
  priceDifference: string;
  proposer: string;
}

export interface Transaction {
  price: number;
  from: string;
  to: string;
  date: Date;
}

interface Price {
  currentPrice: number | null;
  lastPrice: number;
  priceHistory: number[];
}

export interface CardData {
  _id: string;
  image: string; // 이미지 URL 또는 경로
  saleEndDate: Date | null;
  cardName: string; // 카드 이름
  owner: string; // 소유자 이름
  price: Price; // 가격 정보
  views: number; // 조회수
  favorites: string[]; // 즐겨찾기한 유저들 이름
  attributes: CardAttributes; // 카드의 특성
  offers: Offer[]; // 제안 리스트
  transaction: Transaction[]; // 거래 정보
}

const Page: React.FC<IParams> = ({ params: { id } }) => {
  const initialState: CardData = {
    _id: '',
    image: '', // 기본값 빈 문자열
    saleEndDate: null,
    cardName: '', // 기본값 빈 문자열
    owner: '', // 기본값 빈 문자열
    price: {
      currentPrice: null, // 기본값 null
      lastPrice: 0, // 기본값 0
      priceHistory: [], // 기본값 빈 배열
    },
    views: 0, // 기본값 0
    favorites: [], // 기본값 빈 배열
    attributes: {
      background: '', // 기본값 빈 문자열
      type: '', // 기본값 빈 문자열
    },
    offers: [], // 기본값 빈 배열
    transaction: [], // 기본값 빈 배열
  };
  const [card, setCard] = useState<CardData>(initialState);
  const isOfferClicked = useOfferModal().isButtonClicked;
  const isBuyClicked = useBuyModal().isButtonClicked;
  const isSellClicked = useSellModal().isButtonClicked;
  const { username } = useDecodedStore().decoded;
  const usdPrice = calcUsdPrice(card.price.currentPrice ?? 0);
  const maxOffer =
    card.offers.length > 0
      ? Math.max(...card.offers.map((offer) => offer.price))
      : 0;

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const cardData = await CardApi.getCard(id);
        setCard(cardData);
      } catch (error) {
        console.error('Failed to fetch card data:', error);
      }
    };
    fetchCard();
  }, []);

  const updateCard = async () => {
    try {
      const cardData = await CardApi.getCard(id);
      setCard(cardData);
    } catch (error) {
      console.error('Failed to update card data:', error);
    }
  };

  useEffect(() => {
    if (isOfferClicked || isBuyClicked || isSellClicked) {
      // 모달이 열렸을 때 body에 overflow-hidden 클래스를 추가하여 스크롤 방지
      document.body.classList.add('overflow-hidden');
    } else {
      // 모달이 닫혔을 때 overflow-hidden 클래스를 제거하여 스크롤 가능
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup 함수: 컴포넌트가 언마운트될 때 원래 상태로 복구
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOfferClicked, isBuyClicked, isSellClicked]);

  return (
    <>
      <ModalLayout isOpen={isOfferClicked}>
        <OfferModal
          id={id}
          card={card}
          onCardUpdated={updateCard}
          maxOffer={maxOffer}
        />
      </ModalLayout>
      <ModalLayout isOpen={isBuyClicked}>
        <BuyModal
          id={id}
          card={card}
          usdPrice={usdPrice}
          onCardUpdated={updateCard}
        />
      </ModalLayout>
      <ModalLayout isOpen={isSellClicked}>
        <SellModal id={id} card={card} onCardUpdated={updateCard} />
      </ModalLayout>
      <div className="m-8">
        <div className="flex gap-8">
          <div className="flex-[3]">
            <DetailImg id={id} card={card} onCardUpdated={updateCard} />
            <DetailProp card={card} />
          </div>
          <div className="flex-[4] flex flex-col gap-8">
            <DetailInfo card={card} />
            <DetailPrice
              card={card}
              id={id}
              usdPrice={usdPrice}
              username={username}
            />
            <DetailGraph card={card} />
            <DetailOffer
              card={card}
              username={username}
              updateCard={updateCard}
              cardId={id}
            />
          </div>
        </div>
        <DetailTransaction card={card} id={id} />
      </div>
    </>
  );
};

export default Page;
