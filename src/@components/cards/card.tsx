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
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md m-4">
        <div style={{ aspectRatio }} className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
