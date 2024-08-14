import Card from '@/@components/cards/card';
import { CardApi } from '@/apis/cardApi';

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

const CardCollection = async () => {
  const res = await CardApi.getAllCard();
  return (
    <>
      {res.map((item: CardItem) => (
        <Card
          id={item._id}
          title={item.cardName}
          price={item.price.currentPrice}
          lastPrice={item.price.lastPrice}
          imageUrl={item.image}
          background={item.attributes.background}
        />
      ))}
    </>
  );
};

export default CardCollection;
