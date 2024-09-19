'use client';

import { authApi } from '@/apis/authApi';
import useDecodedStore from '@/store/useDecode';
import React from 'react';
import CollectionPart from '../@components/CollectionPart';

const CollectPage: React.FC = () => {
  const { decoded } = useDecodedStore();
  const userId = decoded.userId;

  const fetchCollections = async () => {
    if (userId) {
      return await authApi.collections(userId);
    } else {
      return [];
    }
  };

  return <CollectionPart fetchData={fetchCollections} />;
};

export default CollectPage;
