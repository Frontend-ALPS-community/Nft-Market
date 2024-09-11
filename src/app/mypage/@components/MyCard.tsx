import Card from '@/@components/cards/card';
import { CardItem } from '@/types/type';

interface CardListProps {
  res: CardItem[];
}
const CardCollection: React.FC<CardListProps> = ({ res }) => {
  //const res = CardApi.getAllCard();

  return (
    <div className="grid gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2">
      {res.map((item: CardItem) => (
        <Card
          key={item._id}
          id={item._id}
          title={item.cardName}
          price={item.price.currentPrice}
          lastPrice={item.price.lastPrice}
          imageUrl={item.image}
          background={item.attributes.background}
          onClick={() => {}}
          viewMode="grid"
        />
      ))}
    </div>
  );
};

export default CardCollection;
