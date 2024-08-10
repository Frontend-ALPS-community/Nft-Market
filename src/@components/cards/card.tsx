import Link from 'next/link';

interface CardProps {
  id: string;
  title: string;
  price: number;
  lastPrice: number;
  imageUrl: string;
  background: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  price,
  lastPrice,
  imageUrl,
  background,
}) => {
  return (
    <>
      <Link
        href={`/assets/${id}`}
        className="bg-white rounded-lg shadow-md m-4 w-[250px] cursor-pointer"
      >
        <div
          style={{ backgroundColor: background }}
          className={`aspect-square overflow-hidden rounded-lg outline-none`}
        >
          <img
            alt="이미지"
            src={process.env.NEXT_PUBLIC_Backend_URL + imageUrl}
            className="min-w-[200px] w-full h-full transition-transform transform hover:scale-110 duration-300"
          />
        </div>
        <div className="m-4">
          <p className="my-4 font-bold">{title}</p>
          <p className="my-2 font-semibold">{price} AQC</p>
          <p>마지막 판매 : {lastPrice} AQC</p>
        </div>
      </Link>
    </>
  );
};

export default Card;
