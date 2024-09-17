'use client';
import useDecodedStore from '@/store/useDecode';
import { CardItem } from '@/types/type';
import React, { useEffect, useState } from 'react';
import CardCollection from '../@components/MyCard';

interface MyPageProps {
  title: string;
  description: string;
  fetchData: (userId: string) => Promise<CardItem[]>;
}

const MyPage: React.FC<MyPageProps> = ({ title, description, fetchData }) => {
  const { decoded } = useDecodedStore();
  const [items, setItems] = useState<CardItem[]>([]);
  const userId = decoded.userId;

  useEffect(() => {
    const fetchItems = async () => {
      if (userId) {
        try {
          const res = await fetchData(userId);
          //console.log('Fetched items:', res);
          setItems(res);
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      } else {
        console.log('userId is null or not set yet');
      }
    };

    fetchItems();
  }, [userId, fetchData]);

  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p>{description}</p>
      {items && <CardCollection res={items} />}
    </div>
  );
};

export default MyPage;
