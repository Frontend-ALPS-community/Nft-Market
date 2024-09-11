'use client';
import Card from '@/@components/cards/card';
import { CardData } from '@/app/assets/[id]/page';

export interface CardItem {
  _id: string;
  cardName: string;
  price: {
    lastPrice: number;
    currentPrice: number;
  };
  image: string;
  attributes: { background: string };
}

interface ICardCollectionProps {
  card: CardData[];
  onCardClick: (id: string) => void;
  viewMode: 'grid' | 'list';
}

const CardCollection: React.FC<ICardCollectionProps> = ({
  card,
  onCardClick,
  viewMode,
}) => {
  return (
    <>
      {viewMode === 'list' && (
        <ul className="flex font-semibold border-b-2 h-fit w-full bg-red-200 mt-4 p-2">
          <li className="flex-[2]">아이템</li>
          <li className="flex-[1]">현재 가격</li>
          <li className="flex-[1]">마지막 판매</li>
          <li className="flex-[1]">소유자</li>
          <li className="flex-[1]">판매 기간</li>
        </ul>
      )}
      <div className="flex flex-wrap">
        {card.map((item) => (
          <Card
            id={item._id}
            title={item.cardName}
            price={item.price.currentPrice}
            lastPrice={item.price.lastPrice}
            imageUrl={item.image}
            background={item.attributes.background}
            onClick={() => onCardClick(item._id)}
            viewMode={viewMode}
          />
        ))}
      </div>
    </>
  );
};

export default CardCollection;
