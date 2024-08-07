'use client';
import { useEffect, useState } from 'react';
import Login from './form/login';
import Signup from './form/signup';

const Page: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      //search 속성은 URL의 쿼리 문자열을 포함
      const type = params.get('type');
      setIsSignup(type === 'signup');
    }
  }, []);

  const toggleForm = () => {
    setIsSignup(!isSignup);
    const newType = isSignup ? 'login' : 'signup';
    window.history.pushState({}, '', `/auth?type=${newType}`);
  };

  return (
    <div className="relative w-full h-[calc(100vh-8vh)] overflow-hidden flex justify-center items-center bg-slate-200">
      <div
        className={`w-[550px] h-[700px] transition-transform duration-500 transform ${
          isSignup ? 'translate-x-full' : ''
        } flex justify-center items-center bg-pink-50`}
      >
        {isSignup ? <Signup /> : <Login />}
      </div>
      <div
        className={`w-[550px] h-[700px] bg-blue-500 text-white flex justify-center items-center cursor-pointer transition-transform duration-500 transform ${
          isSignup ? '-translate-x-full' : ''
        }`}
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
