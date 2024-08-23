import React from 'react';

interface SortButtonsProps {
  onSortByPrice: () => void;
  onSortByDate: () => void;
  priceAsc: boolean | null;
  dateAsc: boolean | null;
}

const SortButtons: React.FC<SortButtonsProps> = ({
  onSortByPrice,
  onSortByDate,
  priceAsc,
  dateAsc,
}) => {
  return (
    <div className="flex space-x-4 mt-4">
      <button
        onClick={onSortByPrice}
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        가격 순 정렬 {priceAsc ? '▲' : '▼'}
      </button>
      <button
        onClick={onSortByDate}
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        날짜 순 정렬 {dateAsc ? '▲' : '▼'}
      </button>
    </div>
  );
};

export default SortButtons;
