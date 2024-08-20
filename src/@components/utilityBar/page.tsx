'use client';
import useUtilBar from '@/store/useUtilBar';
import { useRef, useState } from 'react';
import { FiFilter, FiSearch } from 'react-icons/fi';

const UtilityBar = () => {
  const { toggleButton } = useUtilBar();
  const [isFocused, setIsFocused] = useState(false);
  const searchTermRef = useRef<HTMLInputElement>(null);
  const suggestions = ['Eyes', 'Adorable', 'Angry', 'Diamond'];

  const handleSearchChange = () => {
    // 입력 필드에서 searchTerm 값을 가져옴
    const searchTerm = searchTermRef.current?.value.toLowerCase() || '';
    return suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(searchTerm)
    );
  };

  return (
    <div className="max-w-[1350px] mt-6 flex items-center justify-between p-4 rounded-lg shadow-md bg-white mx-auto">
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition">
          <FiFilter
            className="text-gray-700"
            size={20}
            onClick={toggleButton}
          />
        </div>
        <div className="ml-4 text-gray-600 text-sm hidden md:block">
          결과 100개
        </div>
      </div>

      <div className="relative flex-1 mx-4">
        <div
          className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full shadow-sm focus-within:shadow-lg transition"
          onClick={() => setIsFocused(true)}
        >
          <FiSearch className="text-gray-500 mr-3" size={20} />
          <input
            ref={searchTermRef}
            type="text"
            placeholder="이름 또는 특성으로 검색"
            className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleSearchChange}
          />
        </div>

        {isFocused && handleSearchChange().length > 0 && (
          <div className="absolute mt-1 bg-white shadow-lg rounded-lg w-full max-h-60 overflow-y-auto z-50">
            {handleSearchChange().map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => {
                  if (searchTermRef.current) {
                    searchTermRef.current.value = suggestion;
                  }
                  setIsFocused(false);
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center">
        <select className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-full shadow-sm focus:outline-none focus:border-purple-300 transition hidden md:block">
          <option value="낮은 가격 순">낮은 가격 순</option>
          <option value="높은 가격 순">높은 가격 순</option>
          <option value="최신 순">최신 순</option>
        </select>
        <div className="ml-4 flex items-center space-x-2 bg-purple-100 px-3 py-2 rounded-full">
          <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
          <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
          <div className="w-4 h-4 bg-purple-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
