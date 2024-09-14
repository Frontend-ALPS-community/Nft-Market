'use client';

import { authApi } from '@/apis/authApi';
import useDecodedStore from '@/store/useDecode';
import React from 'react';
import CollectionPart from '../@components/CollectionPart';

const FavoritesPage: React.FC = () => {
  const { decoded } = useDecodedStore();
  const userId = decoded.userId;

  const fetchFavorites = async () => {
    if (userId) {
      return await authApi.favorites(userId);
    } else {
      return [];
    }
  };

  return <CollectionPart fetchData={fetchFavorites} />;
};

export default FavoritesPage;
