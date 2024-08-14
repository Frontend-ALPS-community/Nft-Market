'use client';
import Navbar from '@/@components/navbar/navbar';
import UtilityBar from '@/@components/utilityBar/page';
import { useRef } from 'react';

export default function Home() {
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleNavbarVisibility = () => {
    if (navbarRef.current) {
      navbarRef.current.style.display =
        navbarRef.current.style.display === 'none' ? 'block' : 'none';
    }
  };

  return (
    <>
      <div className="max-w-full">
        <div className="w-full h-[500px] bg-red-400">
          <video
            className="object-cover w-full h-full mx-auto"
            autoPlay
            loop
            muted
          >
            <source src="/assets/video/fixmain.mp4" />
          </video>
        </div>
      </div>
      <UtilityBar onIconClick={toggleNavbarVisibility} />

      {/* Navbar의 가시성을 Ref를 사용해 제어 */}
      <div ref={navbarRef}>
        <Navbar />
      </div>

      {/* <Modal /> */}
    </>
  );
}
