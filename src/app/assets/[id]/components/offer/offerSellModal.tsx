import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import { CardData, Offer } from '../../page';

interface IOfferSellModalProps {
  card: CardData;
  offer: Offer | undefined;
  onClose: () => void;
  handleOfferSellBtn: () => void;
}

const OfferSellModal: React.FC<IOfferSellModalProps> = ({
  card,
  offer,
  onClose,
  handleOfferSellBtn,
}) => {
  return (
    <>
      <div className="w-[450px] m-4 relative">
        <div className={`between-flex text-2xl font-semibold my-8`}>
          <div>MonsterPay로 결제</div>
          <div className="cursor-pointer" onClick={onClose}>
            <FiX />
          </div>
        </div>
        <div className="centered-flex flex-col border border-theme-border-gray rounded-xl p-12">
          <div>
            <Image
              style={{ backgroundColor: card.attributes.background }}
              src={process.env.NEXT_PUBLIC_Backend_URL + card.image}
              className="w-[140px] h-[140px] m-4 rounded-xl"
              alt="Card Img"
            />
            <div className="font-bold text-xl text-center">{card.cardName}</div>
          </div>
          <div className="border-2 flex-center rounded-lg mt-4">
            <input
              disabled={true}
              value={offer?.price}
              className="outline-none ml-4 w-5/6"
              placeholder="가격"
            />
            <div className="border-l-2 p-2 font-bold">ETH</div>
          </div>
          <div
            className="w-full centered-flex bg-theme-text-blue my-8 rounded-lg p-4 text-white font-bold cursor-pointer"
            onClick={handleOfferSellBtn}
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

export default OfferSellModal;
