import React from 'react';
import CardCollection from '../../components/MyCard';

const Page: React.FC = () => {
  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">즐겨찾기</h1>
      <p>여기는 사용자가 즐겨찾기한 아이템들을 보여주는 페이지입니다.</p>
      <div className="flex">
        {' '}
        <CardCollection />
      </div>
    </div>
  );
};

export default Page;
