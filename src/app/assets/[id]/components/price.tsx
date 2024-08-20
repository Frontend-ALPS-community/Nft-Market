'use client';
import DetailLayout from '@/@components/assets/DetailLayout';
import Modal from '@/@components/modal/modal';
import useModal from '@/store/useModal';

export interface IDetailPrice {
  id: string;
  card: {
    image: string;
    cardName: string;
    attributes: {
      background: string;
    };
  };
}

const DetailPrice: React.FC<IDetailPrice> = ({ id, card }) => {
  const { isButtonClicked, toggleButton } = useModal();
  return (
    <>
      {isButtonClicked ? <Modal id={id} card={card} /> : ''}
      <DetailLayout
        title={'판매종료 2024년 8월 15일 오후 10:47'}
        arrow={false}
        bold={false}
      >
        <div className="flex flex-col gap-4 m-4">
          <div className="text-theme-text-gray text-sm">현재가격</div>
          <div className="flex gap-4 items-baseline">
            <div className="font-bold text-3xl">0.03ETH</div>
            <div className="text-theme-text-gray">$940.23</div>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 rounded-lg bg-theme-text-blue py-2 text-white font-semibold">
              지금 구매하기
            </button>
            <button
              className="flex-1 rounded-lg bg-theme-bg-gray py-2 font-semibold"
              onClick={toggleButton}
            >
              제안하기
            </button>
          </div>
        </div>
      </DetailLayout>
    </>
  );
};

export default DetailPrice;
