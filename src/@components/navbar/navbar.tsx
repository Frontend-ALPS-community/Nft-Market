'use client';
import useUtilBar from '@/store/useUtilBar';
import ModalLayout from '../modal/modalLayout';
import Property from './property';

interface NavbarProps {
  onColorChange: (colors: string[]) => void; // 색상 변경 핸들러
  filter: boolean;
  handleFilterChange: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onColorChange,
  filter,
  handleFilterChange,
}) => {
  const { isButtonClicked } = useUtilBar();
  return (
    <>
      <ModalLayout isOpen={filter}>
        <Property type="background" onColorChange={onColorChange}>
          Background
        </Property>
        <button
          onClick={handleFilterChange}
          className="bg-theme-text-blue p-2 w-full"
        >
          적용
        </button>
      </ModalLayout>
      <div className="sticky top-[150px] z-10 h-fit max-lg:hidden">
        <div className={`flex-col m-4 ${isButtonClicked ? 'hidden' : ''}`}>
          <Property type="background" onColorChange={onColorChange}>
            Background
          </Property>
        </div>
      </div>
    </>
  );
};

export default Navbar;
