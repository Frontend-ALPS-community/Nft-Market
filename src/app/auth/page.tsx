'use client';
import { useState } from 'react';

const Page = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleClick = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="flex flex-col xl:flex-row min-h-screen relative overflow-hidden">
      <div
        className={`flex-1 bg-pink-50 flex justify-center items-center transition-transform duration-500 ${isSignup ? 'translate-x-0 xl:translate-x-full' : ''}`}
      >
        <div className="w-full max-w-md p-4 sm:p-6">
          <form className="bg-white p-4 sm:p-6 rounded shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700">이메일</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">비밀번호</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            {isSignup && (
              <div className="mb-6">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                  />
                  <span className="ml-2 text-gray-700">레이블</span>
                </label>
                <div className="text-gray-500 text-sm">설명</div>
              </div>
            )}
            <div className="items-center">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black text-white rounded-md"
              >
                {isSignup ? '회원가입' : '로그인'}
              </button>
              {!isSignup && (
                <div className="mt-2 text-sm text-gray-600 hover:text-gray-900">
                  비밀번호를 잊으셨나요?
                </div>
              )}
            </div>
            <div className="mt-6 text-center">
              <div
                onClick={handleClick}
                className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                {isSignup ? '로그인 하러가기' : '회원가입 하러가기'}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        onClick={handleClick}
        className={`flex-1 bg-blue-500 text-white flex justify-center items-center transition-transform duration-500 ${isSignup ? 'translate-x-0 xl:-translate-x-full' : ''}`}
      >
        <div className="text-2xl cursor-pointer">
          {isSignup ? '로그인 하러가기' : '회원가입 하러가기'}
        </div>
      </div>
    </div>
  );
};

export default Page;
