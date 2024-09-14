// src/app/mypage/collections/page.tsx

'use client';
import { authApi } from '@/apis/authApi';
import React from 'react';
import MyPage from '../@components/mypage';

const CollectedPage: React.FC = () => {
  const fetchCollections = async (userId: string) => {
    return await authApi.collections(userId);
  };

  return (
    <MyPage
      title="수집됨"
      description="여기는 사용자가 수집한 아이템들을 보여주는 페이지입니다."
      fetchData={fetchCollections}
    />
  );
};

export default CollectedPage;
