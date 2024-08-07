'use client';
import { authApi } from '@/apis/authApi';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const onClickLogOutBtn = async () => {
    const res = await authApi.logout();
  };
  return (
    <>
      <div className="min-w-[380px] w-full h-[80px] bg-slate-200 flex justify-between items-center px-[15px]">
        <Link href="/" className="flex items-center">
          <img width={50} src="assets/logo/miniLogo.png" alt="Logo" />
          <div>서비스명</div>
        </Link>
        <div className="flex text-xs sm:text-base items-center">
          <Link
            href="/auth?type=login"
            className="mr-[10px] h-10 rounded-lg p-2 bg-slate-300 hover:bg-slate-400"
          >
            로그인
          </Link>
          <Link
            href="/auth?type=signup"
            className="mr-[10px] h-10 rounded-lg p-2 bg-slate-300 hover:bg-slate-400"
          >
            회원가입
          </Link>
          <div className="relative group">
            <div className="hover:-rotate-180 transition-transform duration-300">
              <Image
                width={40}
                height={40}
                src="/assets/logo/drop.png"
                alt="Category Logo"
              />
            </div>
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg hidden group-hover:block ">
              <div className="py-1">
                <Link
                  href="/category/1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 1
                </Link>
                <Link
                  href="/category/2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 2
                </Link>
                <Link
                  href="/category/3"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Category 3
                </Link>
              </div>
            </div>
          </div>
          <button onClick={onClickLogOutBtn}>로그아웃</button>
        </div>
      </div>
    </>
  );
};

export default Header;
