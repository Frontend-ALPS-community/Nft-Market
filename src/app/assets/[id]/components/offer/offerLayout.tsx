import { calculateRemainingTime } from '@/utils/calcRemaintime';

interface IOfferLayout {
  price: string;
  usdPrice: string;
  differ: string;
  expire: Date | string;
  from: string;
  item?: boolean;
  isOwner?: boolean;
  onSellClick?: () => void;
}

const OfferLayout: React.FC<IOfferLayout> = ({
  price,
  usdPrice,
  differ,
  expire,
  from,
  item,
  isOwner,
  onSellClick,
}) => {
  const remain = calculateRemainingTime(expire);
  return (
    <>
      <div className="mx-4 flex-center min-w-[750px] overflow-x-auto">
        <div className={`flex-[2.5] ${item ? 'font-semibold' : ''}`}>
          {price}
        </div>
        <div
          className={`flex-[2.5] ${item ? 'text-sm text-theme-text-gray' : ''} `}
        >
          {usdPrice}
        </div>
        <div
          className={`flex-[3] ${item ? 'text-sm text-theme-text-gray' : ''}`}
        >
          {differ}
        </div>
        <div
          className={`flex-[2.5] ${item ? 'text-sm text-theme-text-gray' : ''}`}
        >
          {item ? remain : '만료'}
        </div>
        <div
          className={`flex-[4] ${item ? 'text-theme-text-blue font-semibold' : ''}`}
        >
          {from}
        </div>
        <button
          className={`bg-theme-text-blue text-white ${isOwner ? 'visible' : 'invisible'} text-sm p-2 rounded-lg hover:opacity-80`}
          onClick={onSellClick}
        >
          판매
        </button>
      </div>
    </>
  );
};

export default OfferLayout;
