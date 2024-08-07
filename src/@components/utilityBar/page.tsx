import Image from 'next/image';
import React from 'react';

const UtilityBar: React.FC = () => {
  return (
    <div className="max-w-[1350px] mt-[20px] flex items-center justify-between p-2 rounded mx-auto">
      <div className="flex items-center">
        <div className="w-8 h-8 border border-gray-200 flex items-center justify-center rounded">
          icon
        </div>
        <div className="ml-2 border border-gray-200 px-4 py-2 rounded hidden md:block">
          결과 100개
        </div>
      </div>
      <div className="flex-1 mx-4">
        {/* flex-1로 하면 해당하는 컨테이너를 다 채움. */}
        <div className="flex items-center border border-gray-200 px-4 py-2 w-full sm:max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-6xl rounded">
          <Image
            src="/assets/logo/search.png"
            alt="Magnifying glass icon"
            width={24}
            height={24}
          />
          <input
            type="text"
            placeholder="검색"
            className="flex-1 outline-none text-sm sm:text-xs md:text-sm"
          />
        </div>
      </div>
      <div className="flex items-center">
        <select className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:border-purple-300 transition hidden md:block">
          <option value="낮은 가격 순">낮은 가격 순</option>
          <option value="높은 가격 순">높은 가격 순</option>
          <option value="최신 순">최신 순</option>
        </select>
        <div className="ml-2 flex items-center space-x-1 bg-green-200 px-2 py-2 rounded">
          {/*  space-x-1: 자식 요소들 사이에 수평 간격을 추가 */}
          <div className="w-4 h-4 bg-black"></div>
          <div className="w-4 h-4 bg-blue-500 hidden sm:block"></div>
          <div className="w-4 h-4 bg-orange-500 hidden sm:block"></div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
