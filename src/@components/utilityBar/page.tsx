const UtilityBar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-2 rounded">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-purple-400 text-white flex items-center justify-center rounded">
          icon
        </div>
        <div className="ml-2 bg-red-300 text-white px-4 py-2 rounded">
          결과 100개
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center bg-yellow-200 px-4 py-2 rounded">
          <span role="img" aria-label="search" className="mr-2">
            🔍
          </span>
          검색
        </div>
        <div className="ml-2 bg-purple-200 px-4 py-2 rounded">낮은 가격 순</div>
        <div className="ml-2 flex items-center space-x-1 bg-green-200 px-2 py-2 rounded">
          <div className="w-4 h-4 bg-black"></div>
          <div className="w-4 h-4 bg-black"></div>
          <div className="w-4 h-4 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
