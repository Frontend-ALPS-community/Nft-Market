'use client';
import { CardApi } from '@/apis/cardApi';
import { CardData } from '@/app/assets/[id]/page';
import useSellModal from '@/store/useSellModal';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';

interface ISellModal {
  card: CardData;
  id: string;
  onCardUpdated: () => void;
}

const SellModal: React.FC<ISellModal> = ({ id, card, onCardUpdated }) => {
  const { toggleButton } = useSellModal();
  const [sellPrice, setSellPrice] = useState<string>('');
  const onClickSellBtn = async () => {
    if (/^\d*\.?\d*$/.test(sellPrice)) {
      const price = parseFloat(sellPrice);
      const res = await CardApi.sellStart(id, price);
      onCardUpdated();
      toggleButton();
    } else {
      console.error('유효하지 않은 입력입니다. 숫자만 입력하세요.');
    }
  };
  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSellPrice(e.target.value);
  };
  return (
    <>
      <div className="w-[450px] m-4 relative">
        <div className={`between-flex text-2xl font-semibold my-8`}>
          <div>MonsterPay로 결제</div>
          <div className="cursor-pointer" onClick={toggleButton}>
            <FiX />
          </div>
        </div>
        <div className="centered-flex flex-col border border-theme-border-gray rounded-xl p-12">
          <div>
            <img
              style={{ backgroundColor: card.attributes.background }}
              src={process.env.NEXT_PUBLIC_Backend_URL + card.image}
              className="w-[140px] h-[140px] m-4 rounded-xl"
            />
            <div className="font-bold text-xl text-center">{card.cardName}</div>
          </div>
          <div className="border-2 flex-center rounded-lg mt-4">
            <input
              onChange={onChangePrice}
              className="outline-none ml-4 w-5/6"
              placeholder="가격"
            />
            <div className="border-l-2 p-2 font-bold">ETH</div>
          </div>
          <div
            className="w-full centered-flex bg-theme-text-blue my-8 rounded-lg p-4 text-white font-bold cursor-pointer"
            onClick={onClickSellBtn}
          >
            판매하기
          </div>
          <div className="absolute bottom-2 text-sm text-center">
            powered by ✨<span className="font-semibold">MonsterPay</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellModal;
