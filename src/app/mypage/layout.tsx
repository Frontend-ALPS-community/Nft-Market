import Image from 'next/image';

import React, { ReactNode } from 'react';
import Btn from './components/btn';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen ">
      <div className="bg-theme-bg-gray  h-80   p-8  w-full flex flex-col  relative">
        <div className="ml-8  absolute top-40 left-0">
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg transform transition duration-500  bg-gradient-to-r from-cyan-300 to-sky-400">
            <span className="absolute inset-0 flex items-center justify-center text-white text-lg  opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/assets/logo/edit.png"
                alt="Edit Icon"
                width={40}
                height={40}
              />
            </span>
          </div>
          <div className="mt-4 text-2xl font-semibold ">User Name</div>
        </div>
      </div>

      <div className="flex ml-8  mt-28 space-x-4">
        <Btn />
      </div>

      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
