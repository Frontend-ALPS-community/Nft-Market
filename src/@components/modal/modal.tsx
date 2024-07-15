import ModalLayout from './modalLayout';

const Modal = () => {
  return (
    <>
      <ModalLayout>
        <div className="between-flex text-2xl font-bold bg-red-200 m-4">
          <div>제안하기</div>
          <div>X</div>
        </div>
        <div className="bg-yellow-200 my-8 mx-12">
          <div>
            <div className="w-[70px] h-[70px] bg-purple-300"></div>
            <div></div>
          </div>
        </div>
      </ModalLayout>
    </>
  );
};

export default Modal;
