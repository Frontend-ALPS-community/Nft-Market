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
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-end sm:justify-end items-end sm:items-center sm:absolute sm:top-10 sm:right-8 mt-4 sm:mt-0">
      <button
        onClick={onSortByPrice}
        className="w-full sm:w-auto px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        가격 순 정렬 {priceAsc !== null ? (priceAsc ? '▲' : '▼') : ''}
      </button>
      <button
        onClick={onSortByDate}
        className="w-full sm:w-auto px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        날짜 순 정렬 {dateAsc !== null ? (dateAsc ? '▲' : '▼') : ''}
      </button>
    </div>
  );
};

export default SortButtons;
