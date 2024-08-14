'use client';
import Navbar from '@/@components/navbar/navbar';
import UtilityBar from '@/@components/utilityBar/page';
import { useRef } from 'react';
import CardCollection from './components/CardCollection';
import HomeInfo from './components/HomeInfo';

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
        <div className="w-full h-[500px] bg-red-400 relative">
          <HomeInfo />
          <video
            className="object-cover w-full h-full mx-auto"
            autoPlay
            loop
            muted
          >
            <source src="/assets/video/high.mp4" />
          </video>
        </div>
      </div>
      <UtilityBar onIconClick={toggleNavbarVisibility} />

      <div className="flex">
        <Navbar />
        <CardCollection />
      </div>
      {/* <Modal /> */}
    </>
  );
}
