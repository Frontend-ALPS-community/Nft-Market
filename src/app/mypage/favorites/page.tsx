// src/app/mypage/favorites/page.tsx

'use client';
import { authApi } from '@/apis/authApi';
import React from 'react';
import MyPage from '../@components/mypage';

const FavoritesPage: React.FC = () => {
  const fetchFavorites = async (userId: string) => {
    return await authApi.favorites(userId);
  };

  return (
    <MyPage
      title="즐겨찾기"
      description="사용자가 즐겨찾기한 아이템들을 보여주는 페이지입니다."
      fetchData={fetchFavorites}
    />
  );
};

export default FavoritesPage;
