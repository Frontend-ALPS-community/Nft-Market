'use client';
import { useEffect, useState } from 'react';
import Login from './components/login';
import Signup from './components/signup';

const Page: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
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
    <div className="relative w-full h-[calc(100vh-8vh)] overflow-hidden centered-flex bg-gradient-to-r from-blue-400 to-purple-600">
      <div
        className={`w-[550px] h-[700px] transition-transform duration-500 transform ${
          isSignup ? 'translate-x-full' : ''
        } centered-flex bg-pink-50`}
      >
        {isSignup ? <Signup /> : <Login />}
      </div>
      <div
        className={`w-[550px] h-[700px] bg-blue-500 text-white centered-flex cursor-pointer transition-transform duration-500 transform ${
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
