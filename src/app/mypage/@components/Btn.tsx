'use client';
import useStatusStore from '@/store/useStatus';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

const Btn = () => {
  const username = useStatusStore((state) => state.username);
  //console.log(username);
  const segments = useSelectedLayoutSegments();

  // 주어진 경로와 세그먼트를 비교하여 클래스를 반환하는 함수
  const getButtonClass = (pathSegment: string) => {
    return segments[0] === pathSegment
      ? 'bg-black text-white py-2 px-4 md:px-6 rounded-lg w-full md:w-auto'
      : 'bg-white text-theme-black py-2 px-4 md:px-6 rounded-lg w-full md:w-auto';
  };

  return (
    <div className="relative">
      <div className="mb-8 text-lg md:text-2xl font-semibold">{username}</div>
      <div className=" flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 px-2 sm:px-0">
        <Link href="/mypage/collections">
          <button className={getButtonClass('collections')}>수집됨</button>
        </Link>
        <Link href="/mypage/offers">
          <button className={getButtonClass('offers')}>내가 한 제안</button>
        </Link>
        <Link href="/mypage/favorites">
          <button className={getButtonClass('favorites')}>즐겨찾기</button>
        </Link>
      </div>
    </div>
  );
};

export default Btn;
