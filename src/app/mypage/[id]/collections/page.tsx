import React from 'react';
import CardCollection from '../../components/MyCard';

const CollectedPage: React.FC = () => {
  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">수집됨</h1>
      <p>여기는 사용자가 수집한 아이템들을 보여주는 페이지입니다.</p>
      <CardCollection />
    </div>
  );
};

export default CollectedPage;
