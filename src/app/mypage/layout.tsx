import Image from 'next/image';
import React, { ReactNode } from 'react';
import Btn from './@components/Btn';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen ">
      <div className="bg-theme-bg-gray h-64 md:h-80 p-4 md:p-8 w-full flex flex-col relative ">
        <div className=" md:ml-8 absolute top-24 md:top-40 left-0">
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg transform transition duration-500 bg-gradient-to-r from-cyan-300 to-sky-400">
            <span className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/assets/logo/edit.png"
                alt="Edit Icon"
                width={30} // 모바일에서 크기를 줄임
                height={30} // 모바일에서 크기를 줄임
              />
            </span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row  md:ml-8 mt-16 md:mt-28 space-y-4 md:space-y-0 md:space-x-4">
        <Btn />
      </div>

      <div className="p-4 md:p-8">{children}</div>
    </div>
  );
};

export default Layout;
