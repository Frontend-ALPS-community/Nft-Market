interface IDetailInfo {
  card: {
    owner: string;
    cardName: string;
    views: number;
    favorites: string[];
  };
}

const DetailInfo: React.FC<IDetailInfo> = ({ card }) => {
  const length = card.favorites.length;
  return (
    <div className="flex my-4 flex-col gap-4">
      <div className="text-theme-text-blue">Monsters ✔</div>
      <div className="text-3xl font-semibold">{card?.cardName}</div>
      <div>소유 : {card?.owner}</div>
      <div className="flex gap-8">
        <div>{card?.views} 조회수</div>
        <div>{length} 즐겨찾기</div>
      </div>
    </div>
  );
};

export default DetailInfo;
