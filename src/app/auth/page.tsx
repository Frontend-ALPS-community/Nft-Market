'use client';
import { useState } from 'react';
import Form from './form/form';

const Page = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleClick = () => {
    setIsSignup(!isSignup);
  };

  return (
    <>
      <div className="flex sm:h-[calc(100vh-5rem)] h-[calc(100vh-4rem)] bg-slate-500  relative overflow-hidden">
        <Form isSignup={isSignup} handleClick={handleClick} />
        <div
          onClick={handleClick}
          className={`flex-1 md:w-1/2 bg-blue-500 text-white flex justify-center items-center transition-transform duration-500 ${isSignup ? 'translate-x-0 -translate-x-full' : ''}`}
        >
          <div className="text-2xl cursor-pointer">
            {isSignup ? '로그인 하러가기' : '회원가입 하러가기'}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
