'use client';
import useUtilBar from '@/store/useUtilBar';
import { BsArrowDownUp } from 'react-icons/bs';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';
import ModalLayout from '../modal/modalLayout';

interface IUtilityBarProps {
  cardLength: number;
  handleViewModeChange: (mode: 'grid' | 'list') => void;
  viewMode: 'grid' | 'list';
  handleFilterChange: () => void;
  handleArrowDownUp: () => void;
  arrowDownUp: boolean;
}

const UtilityBar: React.FC<IUtilityBarProps> = ({
  cardLength,
  handleViewModeChange,
  viewMode,
  handleFilterChange,
  handleArrowDownUp,
  arrowDownUp,
}) => {
  const { toggleButton, setSortValue, sortValue } = useUtilBar();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setSortValue(sortValue); // 부모 컴포넌트에 정렬 값 전달
  };

  const handleSortChangeArrowDownUp = (sort: string) => {
    setSortValue(sort);
  };

  return (
    <div className="sticky top-[80px] z-20">
      <ModalLayout isOpen={arrowDownUp}>
        <div className="absolute z-20 bg-white bottom-0 w-full left-0">
          <button
            className={`w-full text-center py-2 px-4 ${sortValue === 'price_asc' ? 'bg-theme-border-gray' : ''}`}
            onClick={() => handleSortChangeArrowDownUp('price_asc')}
          >
            낮은 가격 순
          </button>
          <button
            className={`w-full text-center py-2 px-4 mt-2 ${sortValue === 'price_desc' ? 'bg-theme-border-gray' : ''}`}
            onClick={() => handleSortChangeArrowDownUp('price_desc')}
          >
            높은 가격 순
          </button>
          <button
            onClick={handleArrowDownUp}
            className="w-full text-center bg-theme-text-blue p-2"
          >
            적용
          </button>
        </div>
      </ModalLayout>
      <div className="mt-6 h-[70px] between-flex p-2 mx-auto bg-white">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition max-lg:hidden">
            <FiFilter
              className="text-gray-700"
              size={20}
              onClick={toggleButton}
            />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition lg:hidden">
            <FiFilter
              className="text-gray-700"
              size={20}
              onClick={handleFilterChange}
            />
          </div>
          <div className="text-gray-600 font-semibold">결과 {cardLength}개</div>
        </div>

        <div className="flex gap-4 items-center">
          <select
            className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:border-purple-300 transition hidden md:block"
            onChange={handleSortChange} // 정렬 값 변경 시 실행
          >
            <option value="price_asc">낮은 가격 순</option>
            <option value="price_desc">높은 가격 순</option>
          </select>
          <div className="flex gap-2 items-center bg-theme-bg-gray rounded-lg p-1">
            <div className="sm:hidden cursor-pointer rounded-lg p-2 bg-white">
              <BsArrowDownUp onClick={handleArrowDownUp} size={20} />
            </div>
            <div
              className={`${
                viewMode === 'grid' ? 'bg-white opacity-100' : 'opacity-70'
              } cursor-pointer rounded-lg p-2 transition max-sm:hidden`}
              onClick={() => handleViewModeChange('grid')}
            >
              <FiGrid size={25} />
            </div>
            <div
              className={`${
                viewMode === 'list' ? 'bg-white opacity-100' : 'opacity-70'
              } cursor-pointer rounded-lg p-2 transition max-sm:hidden`}
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
