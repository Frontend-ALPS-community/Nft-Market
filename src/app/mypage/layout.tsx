'use client';
import Navbar from '@/@components/navbar/navbar';
import UtilityBar from '@/@components/utilityBar/page';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useRef } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // 현재 경로를 가져옴

  const toggleNavbarVisibility = () => {
    if (navbarRef.current) {
      navbarRef.current.style.display =
        navbarRef.current.style.display === 'none' ? 'block' : 'none';
    }
  };

  // 현재 경로가 /favorites 또는 /deals 인지 확인
  const isHiddenNavbarPage =
    pathname.includes('/mypage/') &&
    (pathname.includes('/favorites') || pathname.includes('/deals'));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="bg-white shadow-lg rounded-lg p-8 mx-4 md:mx-20 lg:mx-40 flex flex-col items-center relative">
        <div className="relative">
          <div className="w-48 h-48 bg-gradient-to-r from-pink-400 to-red-400 rounded-full overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            {/* 프로필 이미지 */}
          </div>
          <button className="absolute bottom-0 right-0 bg-red-500 text-white py-2 px-6 rounded-full shadow-md transform transition duration-300 hover:bg-red-600 translate-x-1/2 translate-y-1/2">
            프로필 수정
          </button>
        </div>
        <div className="mt-10 text-2xl font-semibold text-gray-700">
          User Name
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <Link href="/mypage/1/collections">
          <button className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out">
            수집됨
          </button>
        </Link>
        <Link href="/mypage/1/offers">
          <button className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out">
            내가 한 제안
          </button>
        </Link>
        <Link href="/mypage/1/deals">
          <button className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out">
            거래
          </button>
        </Link>
        <Link href="/mypage/1/favorites">
          <button className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out">
            즐겨찾기
          </button>
        </Link>
      </div>

      <UtilityBar onIconClick={toggleNavbarVisibility} />

      <div className="flex mt-8">
        {/* favorites 및 deals 페이지에서는 Navbar를 숨깁니다 */}
        {!isHiddenNavbarPage && (
          <div ref={navbarRef}>
            <Navbar />
          </div>
        )}
        <div className="ml-4 flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
