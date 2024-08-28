'use client';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { FC } from 'react'; // FC 타입을 import합니다.

const Btn: FC = () => {
  const segments = useSelectedLayoutSegments();

  // 주어진 경로와 세그먼트를 비교하여 클래스를 반환하는 함수
  const getButtonClass = (pathSegment: string) => {
    // 세그먼트[1]이 해당 경로와 일치하는지 확인
    return segments[1] === pathSegment
      ? 'bg-black text-white py-2 px-6 rounded-lg  '
      : 'bg-white text-theme-black py-2 px-6 rounded-lg   ';
  };

  return (
    <div>
      <Link href="/mypage/1/collections">
        <button className={getButtonClass('collections')}>수집됨</button>
      </Link>
      <Link href="/mypage/1/offers">
        <button className={getButtonClass('offers')}>내가 한 제안</button>
      </Link>
      <Link href="/mypage/1/favorites">
        <button className={getButtonClass('favorites')}>즐겨찾기</button>
      </Link>
    </div>
  );
};

export default Btn;
