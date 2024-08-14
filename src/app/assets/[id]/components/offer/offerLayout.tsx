interface IOfferLayout {
  price: string;
  usdPrice: string;
  differ: string;
  expire: string;
  from: string;
}

const OfferLayout: React.FC<IOfferLayout> = ({
  price,
  usdPrice,
  differ,
  expire,
  from,
}) => {
  return (
    <>
      <div className="flex mx-4">
        <div className="flex-[2.5]">{price}</div>
        <div className="flex-[2.5]">{usdPrice}</div>
        <div className="flex-[3.5]">{differ}</div>
        <div className="flex-[2]">{expire}</div>
        <div className="flex-[4]">{from}</div>
      </div>
    </>
  );
};

export default OfferLayout;
