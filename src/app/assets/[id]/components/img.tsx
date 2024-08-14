interface IDetailImg {
  img: string;
  background: string;
}

const DetailImg: React.FC<IDetailImg> = ({ img, background }) => {
  return (
    <div>
      <div
        style={{ backgroundColor: background }}
        className={`aspect-square rounded-lg centered-flex relative`}
      >
        <div className="absolute right-2 top-2 text-2xl">❤</div>
        <img
          alt="이미지"
          src={process.env.NEXT_PUBLIC_Backend_URL + img}
          className=""
        />
      </div>
    </div>
  );
};

export default DetailImg;
