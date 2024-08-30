import DetailLayout from '@/@components/assets/DetailLayout';
import OfferLayout from './offerLayout';

const DetailOffer = () => {
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
            />
          </div>
          <div className="py-4 border-t">
            <OfferLayout
              price={'0.5088 ETH'}
              usdPrice="$1,329.80"
              differ="82% 위"
              expire="1일 전"
              from="LeO_eth"
            />
          </div>
          <div className="py-4 border-t">
            <OfferLayout
              price={'0.5088 ETH'}
              usdPrice="$1,329.80"
              differ="82% 위"
              expire="1일 전"
              from="LeO_eth"
            />
          </div>
        </div>
      </DetailLayout>
    </>
  );
};

export default DetailOffer;
