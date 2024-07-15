interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  aspectRatio: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  aspectRatio,
}) => {
  return (
    <>
      <div className="bg-white border border-gray-300 rounded-lg shadow-md m-4 w-[250px]">
        <div className="aspect-square">
          <img
            alt="이미지"
            src="/"
            className="min-w-[200px] w-full h-full bg-red-400"
          />
        </div>
        <div className="m-4">
          <p className="my-4 font-bold">monster #1234</p>
          <p className="my-2 font-semibold">0.319 AQC</p>
          <p>마지막 판매 : 0.294 AQC</p>
        </div>
      </div>
    </>
  );
};

export default Card;
