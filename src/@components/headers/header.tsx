'use client';
import { authApi } from '@/apis/authApi';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [authState, setAuthState] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onClickLogOutBtn = async () => {
    try {
      await authApi.logout();
      alert('로그아웃되었습니다.');
      setAuthState(false);
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const checkTokenStatus = async () => {
    try {
      const { loggedIn } = await authApi.status();
      setAuthState(loggedIn);
    } catch (error) {
      console.error('Failed to check token status:', error);
    }
  };

  useEffect(() => {
    // 초기화
    checkTokenStatus();

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        dropdownRef.current.classList.add('hidden');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    dropdownRef.current?.classList.toggle('hidden');
  };

  return (
    <div className="min-w-[380px] w-full h-[80px] bg-gradient-to-r from-blue-500 to-purple-500 between-flex px-[20px] shadow-lg">
      <Link href="/" className="flex-center">
        <img
          width={50}
          src="assets/logo/miniLogo.png"
          alt="Logo"
          className="mr-[10px]"
        />
        <div className="text-white font-semibold text-lg">Service Name</div>
      </Link>
      <div className="relative flex-center">
        {authState ? (
          <div className="relative z-50">
            <button
              onClick={toggleDropdown}
              className="h-10 w-10 rounded-full bg-white centered-flex"
            >
              <img src="/assets/logo/my.png" alt="My" />
            </button>
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden"
            >
              <Link
                href="/mypage"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-300 hover:text-white transition ease-in-out transform hover:scale-105"
              >
                마이 페이지
              </Link>
              <button
                onClick={() => {
                  onClickLogOutBtn();
                  dropdownRef.current?.classList.add('hidden');
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-300 hover:text-white transition ease-in-out transform hover:scale-105"
              >
                로그아웃
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link
              href="/auth?type=login"
              className="mr-[10px] h-10 rounded-full px-4 bg-white text-blue-500 hover:bg-blue-600 hover:text-white transition centered-flex"
            >
              로그인
            </Link>
            <Link
              href="/auth?type=signup"
              className="mr-[10px] h-10 rounded-full px-4 bg-white text-blue-500 hover:bg-blue-600 hover:text-white transition centered-flex"
            >
              회원가입
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
