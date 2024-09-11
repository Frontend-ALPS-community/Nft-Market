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
    <div className={`flex-col m-4 ${isButtonClicked ? 'hidden' : 'display'}`}>
      <Property type="background" onColorChange={onColorChange}>
        Background
      </Property>
    </div>
  );
};

export default Navbar;
