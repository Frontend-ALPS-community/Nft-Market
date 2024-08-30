import { childProps } from '@/types/type';

const ModalLayout: React.FC<childProps> = ({ children }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.7)] centered-flex z-50">
        <div className="w-[700px] h-[600px] bg-white  rounded-xl shadow-xl">
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalLayout;
