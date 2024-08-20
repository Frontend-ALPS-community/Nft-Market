interface IOfferLayout {
  price: string;
  usdPrice: string;
  differ: string;
  expire: string;
  from: string;
  item?: boolean;
}

const OfferLayout: React.FC<IOfferLayout> = ({
  price,
  usdPrice,
  differ,
  expire,
  from,
  item,
}) => {
  return (
    <>
      <div className="mx-4 flex-center">
        <div className={`flex-[2.5] ${item ? 'font-semibold' : ''}`}>
          {price}
        </div>
        <div
          className={`flex-[2.5] ${item ? 'text-sm text-theme-text-gray' : ''} `}
        >
          {usdPrice}
        </div>
        <div
          className={`flex-[3.5] ${item ? 'text-sm text-theme-text-gray' : ''}`}
        >
          {differ}
        </div>
        <div
          className={`flex-[2] ${item ? 'text-sm text-theme-text-gray' : ''}`}
        >
          {expire}
        </div>
        <div
          className={`flex-[4] ${item ? 'text-theme-text-blue font-semibold' : ''}`}
        >
          {from}
        </div>
      </div>
    </>
  );
};

export default OfferLayout;
