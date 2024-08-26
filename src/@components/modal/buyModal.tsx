import { CardData } from '@/app/assets/[id]/page';
import useBuyModal from '@/store/userBuyModal';
import { FiX } from 'react-icons/fi';

interface IBuyModal {
  card: CardData;
  usdPrice: number;
}

const BuyModal: React.FC<IBuyModal> = ({ card, usdPrice }) => {
  const { isButtonClicked, toggleButton } = useBuyModal();
  return (
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
          <div className="text-sm text-center">Buying for US ${usdPrice}</div>
        </div>
        <div className="w-full centered-flex bg-theme-text-blue my-8 rounded-lg p-4 text-white font-bold cursor-pointer">
          구매하기
        </div>
        <div className="absolute bottom-2 text-sm text-center">
          powered by ✨<span className="font-semibold">MonsterPay</span>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;
