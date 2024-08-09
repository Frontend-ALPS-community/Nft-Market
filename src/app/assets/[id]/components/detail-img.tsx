interface IDetailImg {
  img: string;
  background: string;
}

const DetailImg: React.FC<IDetailImg> = ({ img, background }) => {
  return (
    <>
      <div className={`bg-[${background}] w-[650px] aspect-square rounded-lg`}>
        <img
          alt="이미지"
          src={process.env.NEXT_PUBLIC_Backend_URL + img}
          className=""
        />
      </div>
    </>
  );
};

export default DetailImg;
