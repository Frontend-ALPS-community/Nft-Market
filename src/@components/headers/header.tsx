'use client';
import { authApi } from '@/apis/authApi';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [tokenBool, setTokenBool] = useState(false);

  const onClickLogOutBtn = async () => {
    const res = await authApi.logout();
  };

  useEffect(() => {
    //쿠키 읽기.
    const getCookie = (name: string): string | undefined => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const token = getCookie('token');
    //console.log('Token stored in cookie:', token);
    if (token) {
      setTokenBool(true);
      //console.log(tokenBool);
    }
  }, []);

  return (
    <>
      <div className="min-w-[380px] w-full h-[80px] bg-gradient-to-r from-blue-500 to-purple-500 flex justify-between items-center px-[20px] shadow-lg">
        <Link href="/" className="flex items-center">
          <img
            width={50}
            src="assets/logo/miniLogo.png"
            alt="Logo"
            className="mr-[10px]"
          />
          <div className="text-white font-semibold text-lg">Service Name</div>
        </Link>
        <div className="flex text-xs sm:text-base items-center">
          {!tokenBool && (
            <>
              <Link
                href="/auth?type=login"
                className="mr-[10px] h-10 rounded-full px-4 bg-white text-blue-500 hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              >
                로그인
              </Link>
              <Link
                href="/auth?type=signup"
                className="mr-[10px] h-10 rounded-full px-4 bg-white text-blue-500 hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              >
                회원가입
              </Link>
            </>
          )}
          {tokenBool && (
            <button
              onClick={onClickLogOutBtn}
              className="h-10 rounded-full px-4 bg-white text-blue-500 hover:bg-gray-100 transition duration-300 flex items-center justify-center"
            >
              로그아웃
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
