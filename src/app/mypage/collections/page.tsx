'use client';
import { authApi } from '@/apis/authApi';
import useDecodedStore from '@/store/useDecode';
import { CardItem } from '@/types/type';
import React, { useEffect, useState } from 'react';
import CardCollection from '../@components/MyCard';

const CollectedPage: React.FC = () => {
  const { decoded } = useDecodedStore();
  const [collections, setCollections] = useState<CardItem[]>([]);
  //console.log(decoded.userId);
  const userId = decoded.userId;
  useEffect(() => {
    const fetchOffers = async () => {
      if (userId) {
        try {
          const res = await authApi.collections(userId);
          console.log('Fetched :', res); // 응답 데이터 확인
          setCollections(res); // 상태에 API에서 받은 데이터를 저장
        } catch (error) {
          console.error('Error fetching offers:', error);
        }
      } else {
        console.log('userId is null or not set yet');
      }
    };

    fetchOffers();
  }, [userId]);

  return (
    <div className="p-8 bg-white  rounded-lg">
      <h1 className="text-2xl font-bold mb-4">수집됨</h1>
      <p>여기는 사용자가 수집한 아이템들을 보여주는 페이지입니다.</p>
      {/* <UtilityBar /> */}
      {collections && <CardCollection res={collections} />}
    </div>
  );
};

export default CollectedPage;
