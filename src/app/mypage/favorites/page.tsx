'use client';
import { authApi } from '@/apis/authApi';
import useStatusStore from '@/store/useStatus';
import { CardItem } from '@/types/type';
import React, { useEffect, useState } from 'react';
import CardCollection from '../@components/MyCard';

const Page: React.FC = () => {
  const [favorites, setFavorites] = useState<CardItem[]>([]);
  const userId = useStatusStore((state) => state.userId);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (userId) {
        try {
          const res = await authApi.favorites(userId);
          console.log(res);
          setFavorites(res); // 상태에 API에서 받은 데이터를 저장
          console.log('Fetched favorites:', favorites); // 응답 데이터 확인
        } catch (error) {
          console.error('Error fetching offers:', error);
        }
      } else {
        console.log('userId is null or not set yet');
      }
    };

    fetchFavorites();
  }, [userId]);

  return (
    <div className="p-8 bg-white ">
      <h1 className="text-2xl md:text-xl sm:text-lg font-bold mb-4">
        즐겨찾기
      </h1>
      <p className="md:text-base text-xs">
        사용자가 즐겨찾기한 아이템들을 보여주는 페이지입니다.
      </p>
      <CardCollection res={favorites} />
    </div>
  );
};

export default Page;
