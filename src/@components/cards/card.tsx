'use client';
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
  const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <Link
        href={`/assets/${id}`}
        className="bg-white rounded-lg shadow-md m-4 max-w-[250px] min-w-[200px] cursor-pointer flex-grow relative group overflow-hidden"
      >
        <div
          style={{ backgroundColor: background }}
          className={`aspect-square overflow-hidden rounded-lg outline-none`}
        >
          <img
            alt="이미지"
            src={process.env.NEXT_PUBLIC_Backend_URL + imageUrl}
            className="w-full h-full transition-transform transform group-hover:scale-110 duration-300"
          />
        </div>
        <div className="m-4">
          <p className="my-4 font-bold">{title}</p>
          <p className="my-2 font-semibold">{price} AQC</p>
          <p>마지막 판매 : {lastPrice} AQC</p>
        </div>
        <div
          onClick={handleButtonClick}
          className="absolute bottom-0 left-0 right-0 bg-theme-text-blue text-white text-center py-2 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        >
          지금 구매하기
        </div>
      </Link>
    </>
  );
};

export default Card;
