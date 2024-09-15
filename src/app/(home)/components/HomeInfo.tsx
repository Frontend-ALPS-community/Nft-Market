'use client';
import usePriceInfo from '@/store/usePriceInfo';
import { useState } from 'react';
import { FiInstagram, FiMoreHorizontal, FiTwitter } from 'react-icons/fi';
import { HiOutlineCheckBadge } from 'react-icons/hi2';
import { PiLineVertical } from 'react-icons/pi';

const HomeInfo = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { price } = usePriceInfo();
  return (
    <>
      <div className="text-theme-text-white absolute bottom-0 ml-14 z-10 mb-4">
        <div className="flex flex-col gap-4">
          <img
            width={100}
            height={100}
            src="/assets/logo/logoball.png"
            className="bg-black rounded-xl"
          />
          <div className="text-xl font-bold flex flex-col gap-1">
            <div className="flex gap-2 items-center ">
              <div>Monsterz</div>
              <div className="flex items-center gap-4 ">
                <HiOutlineCheckBadge size={25} fill="#2081E2" />
                <PiLineVertical />
                <FiInstagram className="hover:opacity-70 cursor-pointer" />
                <FiTwitter
                  fill="white"
                  className="hover:opacity-70 cursor-pointer"
                />
                <FiMoreHorizontal className="hover:opacity-70 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center gap-2 relative right-2">
              <div className="font-light text-base opacity-80">
                Jang&Lee_XYZ
              </div>
              <HiOutlineCheckBadge size={20} fill="#2081E2" />
            </div>
          </div>
          <div>
            <div className={`${isExpanded ? 'flex flex-col' : 'flex'} gap-2`}>
              <div
                className={`w-[480px] flex flex-col gap-4 ${isExpanded ? 'h-28 overflow-y-scroll' : 'text-ellipsis overflow-hidden whitespace-nowrap'}`}
              >
                <div>
                  Monsterz is a home for creatives, dreamers, and collectors
                  seeking real connection as we all contribute to the future of
                  web3 art, culture, and technology.
                </div>
                <div className={`${isExpanded ? 'visible' : 'hidden'}`}>
                  Monster art is entirely in-chain, meaning the images are
                  outputted directly from the smart contract, with no need for
                  storage on IPFS or the like. There are also a number of
                  customisable backgrounds available to holders based on their
                  on-chain activity (such as other NFT holdings)—which disappear
                  when the bird is transferred.
                </div>
              </div>
              <div
                className="font-semibold cursor-pointer hover:opacity-70 w-fit"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? '간단히보기' : '자세히 보기'}
              </div>
            </div>
            <ul className="flex opacity-90">
              <li>
                <span className="font-semibold">Sep 2024</span>에 생성됨
                <span className="mx-2">·</span>
              </li>
              <li>
                제작자 수익 <span className="font-semibold">1%</span>
                <span className="mx-2">·</span>
              </li>
              <li>
                체인 <span className="font-semibold">Ethereum</span>
                <span className="mx-2">·</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-theme-text-white absolute right-0 bottom-0 mr-14 mb-4">
        <div className="flex gap-8">
          <ul className="flex flex-col text-xl font-bold">
            <li>{price?.total} ETH</li>
            <li className="text-base font-normal opacity-80">총크기</li>
          </ul>
          <ul className="flex flex-col text-xl font-bold">
            <li>{price?.min} ETH</li>
            <li className="text-base font-normal opacity-80">하한가</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeInfo;
