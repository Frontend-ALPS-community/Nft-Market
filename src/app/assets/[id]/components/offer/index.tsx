import DetailLayout from '@/@components/assets/DetailLayout';
import { useState } from 'react';
import { CardData } from '../../page';
import OfferLayout from './offerLayout';

export interface IDetailOffer {
  card: CardData;
  username: string;
}

const DetailOffer: React.FC<IDetailOffer> = ({ card, username }) => {
  const isOwner = card.owner === username ? true : false;
  const [sellPrice, setSellPrice] = useState<number>();
  return (
    <>
      <DetailLayout title={'offers'} arrow={true} bold={true}>
        <div className="max-h-[300px] overflow-auto">
          <div className="text-theme-text-gray sticky top-0 z-10 bg-white">
            <OfferLayout
              price={'가격'}
              usdPrice={'USD 가격'}
              differ={'하한가와의 차이'}
              expire={'만료'}
              from={'From'}
              item={false}
              isOwner={false}
            />
          </div>
          {card?.offers.map((item) => (
            <div className="py-4 border-t">
              <OfferLayout
                price={`${item.price} ETH`}
                usdPrice={`$${item.usdPrice}`}
                differ={item.priceDifference}
                expire={item.expiryDate}
                from={item.proposer}
                item={true}
                isOwner={isOwner}
              />
            </div>
          ))}
        </div>
      </DetailLayout>
    </>
  );
};

export default DetailOffer;
