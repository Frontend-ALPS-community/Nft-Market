'use client';
import useUtilBar from '@/store/useUtilBar';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';

interface IUtilityBarProps {
  cardLength: number;
  handleViewModeChange: (mode: 'grid' | 'list') => void;
  viewMode: 'grid' | 'list';
}

const UtilityBar: React.FC<IUtilityBarProps> = ({
  cardLength,
  handleViewModeChange,
  viewMode,
}) => {
  const { toggleButton, setSortValue, sortValue } = useUtilBar();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setSortValue(sortValue); // 부모 컴포넌트에 정렬 값 전달
  };

  return (
<<<<<<< HEAD
    <div className="sticky top-[80px] z-20 bg-white">
      <div className="mt-6 h-[70px] between-flex p-2 rounded-lg mx-auto">
        <div className="flex items-center">
=======
    <div className="sticky top-[80px] z-20">
      <div className="mt-6 h-[70px] between-flex p-2 mx-auto bg-white">
        <div className="flex gap-4 items-center">
>>>>>>> 65536e0c126190861ed610480b16ab8cc9e69382
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition">
            <FiFilter
              className="text-gray-700"
              size={20}
              onClick={toggleButton}
            />
          </div>
          <div className="text-gray-600 hidden md:block font-semibold">
            결과 {cardLength}개
          </div>
        </div>

        <div className="flex items-center">
          <select
            className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-full shadow-sm focus:outline-none focus:border-purple-300 transition hidden md:block"
            onChange={handleSortChange} // 정렬 값 변경 시 실행
          >
            <option value="price_asc">낮은 가격 순</option>
            <option value="price_desc">높은 가격 순</option>
          </select>
          <div className="mx-8 flex gap-2 items-center bg-theme-bg-gray rounded-lg p-1">
            <div
              className={`${
                viewMode === 'grid' ? 'bg-white opacity-100' : 'opacity-70'
              } cursor-pointer rounded-lg p-2 transition`}
              onClick={() => handleViewModeChange('grid')}
            >
              <FiGrid size={25} />
            </div>
            <div
              className={`${
                viewMode === 'list' ? 'bg-white opacity-100' : 'opacity-70'
              } cursor-pointer rounded-lg p-2 transition`}
              onClick={() => handleViewModeChange('list')}
            >
              <FiList size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
