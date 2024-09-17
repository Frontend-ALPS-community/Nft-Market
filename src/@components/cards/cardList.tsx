import { CardData } from '@/app/assets/[id]/page';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

interface ICardListProps {
  card: CardData;
}

const CardList: React.FC<ICardListProps> = ({ card }) => {
  const saleEndDate = card.saleEndDate
    ? dayjs(card.saleEndDate).format('MMM D, YYYY HH:mm A')
    : '--';
  return (
    <Link href={`/assets/${card._id}`}>
      <ul className="flex items-center border-b-2 p-2 text-sm cursor-pointer hover:bg-theme-bg-gray group">
        <li className="flex-[1.7] flex items-center gap-6">
          <Image
            width={40}
            height={40}
            style={{ backgroundColor: card.attributes.background }}
            src={process.env.NEXT_PUBLIC_Backend_URL + card.image}
            className="rounded-xl"
            alt="Card Img"
          />
          <div className="font-semibold">{card.cardName}</div>
        </li>
        <li className="flex-[1]">
          <span className="bg-theme-bg-gray px-2 py-1 rounded-md font-semibold group-hover:bg-[#e3e3e3]">
            {card.price.currentPrice
              ? `${card.price.currentPrice} ETH ✨`
              : '--'}
          </span>
        </li>
        <li className="flex-[1] text-theme-text-gray">
          {card.price.lastPrice} ETH
        </li>
        <li className="flex-[1] text-theme-text-blue">{card.owner}</li>
        <li className="flex-[1.2]">{saleEndDate}</li>
      </ul>
    </Link>
  );
};

export default CardList;
