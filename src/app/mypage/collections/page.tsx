import { authApi } from '@/apis/authApi';
import { CardItem } from '@/types/type';
import { cookies } from 'next/headers'; // 쿠키에 접근하기 위해 import
import React from 'react';
import CardCollection from '../@components/MyCard';

const CollectedPage: React.FC = async () => {
  // 쿠키에서 토큰 가져오기
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  let userId = null;

  if (token) {
    try {
      // JWT 토큰을 디코딩하여 userId를 얻습니다.
      const decoded = JSON.parse(atob(token.split('.')[1]));
      userId = decoded.userId;
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  let collections: CardItem[] = [];

  if (userId) {
    try {
      const res = await authApi.collections(userId);
      //console.log('Fetched :', res); // 응답 데이터 확인
      collections = res; // 서버 컴포넌트에서는 상태를 사용할 필요가 없습니다.
    } catch (error) {
      console.error('Error fetching collections:', error);
    }
  } else {
    console.log('userId is null or not set yet');
    // 필요한 경우 로그인 페이지로 리다이렉트할 수 있습니다.
  }

  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">수집</h1>
      <p>여기는 사용자가 수집한 아이템들을 보여주는 페이지입니다.</p>
      {collections.length > 0 ? (
        <CardCollection res={collections} />
      ) : (
        <p>수집한 아이템이 아직 없습니다.</p>
      )}
    </div>
  );
};

export default CollectedPage;
