'use client';
import useUtilBar from '@/store/useUtilBar';
import Property from './property';

const Navbar = () => {
  const { isButtonClicked } = useUtilBar();
  return (
    <div className={`flex-col ${isButtonClicked ? 'hidden' : 'display'}`}>
      <div>특성</div>
      <div className="flex"></div>
      <Property a={'a'}>Background</Property>
      <Property a={'a'}>Types</Property>
    </div>
  );
};

export default Navbar;
