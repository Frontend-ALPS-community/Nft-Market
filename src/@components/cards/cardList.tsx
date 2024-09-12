import { CardData } from '@/app/assets/[id]/page';
import dayjs from 'dayjs';

interface ICardListProps {
  card: CardData;
}

const CardList: React.FC<ICardListProps> = ({ card }) => {
  const saleEndDate = card.saleEndDate
    ? dayjs(card.saleEndDate).format('MMM D, YYYY HH:mm A')
    : '--';
  return (
    <>
      <ul className="flex items-center border-b-2 p-2 text-sm">
        <li className="flex-[1.7] flex items-center gap-6">
          <img
            width={40}
            style={{ backgroundColor: card.attributes.background }}
            src={process.env.NEXT_PUBLIC_Backend_URL + card.image}
            className="rounded-xl"
          />
          <div className="font-semibold">{card.cardName}</div>
        </li>
        <li className="flex-[1]">
          <span className=" bg-theme-bg-gray px-2 py-1 rounded-md font-semibold">
            {card.price.currentPrice
              ? `${card.price.currentPrice} ETH ✨`
              : '--'}
          </span>
        </li>
        <li className="flex-[1] text-theme-text-gray">
          {card.price.lastPrice} ETH
        </li>
        <li className="flex-[1]">{card.owner}</li>
        <li className="flex-[1.2]">{saleEndDate}</li>
      </ul>
    </>
  );
};

export default CardList;
