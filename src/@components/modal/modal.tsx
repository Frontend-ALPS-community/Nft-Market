'use client';
import { IDetailOffer } from '@/app/assets/[id]/components/price';
import useModal from '@/store/store';
import ModalLayout from './modalLayout';

interface IModal extends IDetailOffer {}

const Modal: React.FC<IModal> = ({ id, card }) => {
  const { isButtonClicked, toggleButton } = useModal();
  return (
    <>
      <ModalLayout>
        <div className="between-flex text-2xl font-bold bg-red-200 m-4">
          <div>제안하기</div>
          <div className="cursor-pointer" onClick={toggleButton}>
            X
          </div>
        </div>
        <div className="bg-yellow-200 my-8 mx-8">
          <div className="flex-center">
            <div className="w-[70px] h-[70px] bg-purple-300 m-4"></div>
            <div>
              <div className="font-bold">Monsters # 4087</div>
              <div className="text-sm">Monsters</div>
            </div>
          </div>
        </div>
        <div className="bg-[#f0f0f0] rounded-lg p-4 m-4">
          <div className="between-flex m-1">
            <div>잔액</div>
            <div>0 FKC</div>
          </div>
          <div className="between-flex m-1">
            <div>하한가</div>
            <div>0 FKC</div>
          </div>
          <div className="between-flex m-1">
            <div>최고 제안가</div>
            <div>0 FKC</div>
          </div>
        </div>
        <div className="border-2 h-14 m-4 flex-center rounded-lg">
          <input className="outline-none ml-4 w-5/6" placeholder="가격" />
          <div className="border-l-2 p-4 font-bold">FKC</div>
        </div>
        <div>기간</div>
        <div>달력</div>
        <div className="centered-flex bg-blue-300 m-4 rounded-lg p-4 text-white font-bold">
          제안하기
        </div>
      </ModalLayout>
    </>
  );
};

export default Modal;
