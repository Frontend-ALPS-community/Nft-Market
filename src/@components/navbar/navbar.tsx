'use client';
import { CardData } from '@/app/assets/[id]/page';
import useUtilBar from '@/store/useUtilBar';
import Property from './property';

interface NavbarProps {
  card: CardData[];
  onColorChange: (colors: string[]) => void; // 색상 변경 핸들러
}

const Navbar: React.FC<NavbarProps> = ({ onColorChange }) => {
  const { isButtonClicked } = useUtilBar();
  return (
    <div className="sticky top-[150px] z-10 h-fit max-lg:hidden">
      <div className={`flex-col m-4 ${isButtonClicked ? 'hidden' : ''}`}>
        <Property type="background" onColorChange={onColorChange}>
          Background
        </Property>
      </div>
    </div>
  );
};

export default Navbar;
