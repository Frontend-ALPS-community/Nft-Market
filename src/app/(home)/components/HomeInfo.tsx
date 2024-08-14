import { CardApi } from "@/apis/cardApi";

const HomeInfo = async () => {
  const res = await CardApi.getAllCard();
  return (
    <>
      <div className="text-theme-text-white absolute">HomeInfo</div>
    </>
  );
};

export default HomeInfo;
