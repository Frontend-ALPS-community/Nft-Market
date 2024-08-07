'use client';
import { useState } from 'react';
import Login from './components/login';
import Signup from './components/signup';

const Page: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="relative w-full h-[calc(100vh-8vh)] overflow-hidden flex justify-center items-center bg-slate-400">
      <div
        className={`w-[550px] h-[700px] transition-transform duration-500 transform ${isSignup ? 'translate-x-full' : ''} flex justify-center items-center bg-pink-50`}
      >
        {isSignup ? <Signup /> : <Login />}
      </div>
      <div
        className={`w-[550px] h-[700px] bg-blue-500 text-white flex justify-center items-center cursor-pointer transition-transform duration-500 transform  ${isSignup ? '-translate-x-full' : ''} `}
        onClick={toggleForm}
      >
        <div className="text-2xl">
          {isSignup ? '로그인 하러가기' : '회원가입 하러가기'}
        </div>
      </div>
    </div>
  );
};

export default Page;
