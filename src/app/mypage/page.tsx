import React from 'react';

const MyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center">
      <div className="w-full max-w-4xl mx-auto p-4 flex items-center">
        <div className="w-48 h-48 bg-red-300 rounded-full flex-shrink-0"></div>
        <div className="ml-6">
          <button className="bg-red-500 text-white py-2 px-4 rounded flex items-center">
            프로필 수정
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
