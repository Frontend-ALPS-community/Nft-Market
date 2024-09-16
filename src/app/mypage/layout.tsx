import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Btn = dynamic(() => import('./@components/Btn'), { ssr: false });

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* 배경 및 헤더 섹션 */}
      <div className="bg-theme-bg-gray h-48 md:h-80 p-4 md:p-8 w-full flex flex-col relative">
        <div className="absolute top-20 md:top-32 left-1/2 transform -translate-x-1/2 md:left-0 md:-translate-x-0 md:ml-8">
          <div className="relative w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg transform transition duration-500 bg-gradient-to-r from-cyan-300 to-sky-400">
            <span className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/assets/logo/edit.png"
                alt="Edit Icon"
                width={24} // 모바일에서 크기를 줄임
                height={24} // 모바일에서 크기를 줄임
              />
            </span>
          </div>
        </div>
      </div>

      {/* 버튼 섹션 */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start md:ml-8 mt-12 md:mt-28 space-y-4 md:space-y-0 md:space-x-4">
        <Btn />
      </div>

      {/* 콘텐츠 섹션 */}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Layout;
