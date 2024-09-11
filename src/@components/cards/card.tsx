'use client';

interface CardProps {
  id: string;
  title: string;
  price: number | null;
  lastPrice: number;
  imageUrl: string;
  background: string;
  onClick: () => void; // onClick 속성 추가
  viewMode: 'grid' | 'list';
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  price,
  lastPrice,
  imageUrl,
  background,
  onClick,
  viewMode,
}) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClick();
  };
  if (viewMode === 'grid') {
    return (
      <div
        className="bg-white rounded-lg shadow-md m-4 max-w-[250px] min-w-[200px] cursor-pointer flex-grow relative group overflow-hidden"
        onClick={handleButtonClick}
      >
        <div
          style={{ backgroundColor: background }}
          className="aspect-square overflow-hidden rounded-lg outline-none"
        >
          <img
            alt="이미지"
            src={process.env.NEXT_PUBLIC_Backend_URL + imageUrl}
            className="w-full h-full transition-transform transform group-hover:scale-110 duration-300"
          />
        </div>
        <div className="m-4">
          <p className="my-4 font-bold">{title}</p>
          <p className={`my-2 font-semibold ${price ? '' : 'invisible'}`}>
            {price} ETH
          </p>
          <p>마지막 판매: {lastPrice} ETH</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-theme-text-blue text-white text-center py-2 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          지금 구매하기
        </div>
      </div>
    );
  }
  return <></>;
};

export default Card;
