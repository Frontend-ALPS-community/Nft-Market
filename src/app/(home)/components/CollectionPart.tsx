'use client';

import Navbar from '@/@components/navbar/navbar';
import UtilityBar from '@/@components/utilityBar/page';
import { CardApi } from '@/apis/cardApi';
import { CardData } from '@/app/assets/[id]/page';
import useUtilBar from '@/store/useUtilBar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CardCollection from './CardCollection';

const CollectionPart = () => {
  const router = useRouter();
  const { sortValue } = useUtilBar();
  const [card, setCard] = useState<CardData[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'); // 뷰 모드 상태 추가
  const [filter, setFilter] = useState<boolean>(false);
  const [arrowDownUp, setArrowDownUp] = useState<boolean>(false);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await CardApi.getAllCard(sortValue, selectedColors);
        setCard(res);
      } catch (error) {
        console.error('Failed to fetch card data:', error);
      }
    };
    fetchCard();
  }, [sortValue, selectedColors]);

  const handleColorChange = (colors: string[]) => {
    setSelectedColors(colors); // 색상 변경 시 상태 업데이트
  };

  const handleCardClick = (id: string) => {
    router.push(`/assets/${id}?modal=sell`);
  };

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };
  const handleFilterChange = () => {
    setFilter(!filter);
  };

  const handleArrowDownUp = () => {
    setArrowDownUp(!arrowDownUp);
  };
  return (
    <div>
      <UtilityBar
        cardLength={card.length}
        handleViewModeChange={handleViewModeChange}
        viewMode={viewMode}
        handleFilterChange={handleFilterChange}
        arrowDownUp={arrowDownUp}
        handleArrowDownUp={handleArrowDownUp}
      />
      <div className="flex">
        <Navbar
          onColorChange={handleColorChange}
          handleFilterChange={handleFilterChange}
          filter={filter}
        />
        <CardCollection
          card={card}
          onCardClick={handleCardClick}
          viewMode={viewMode}
        />
      </div>
    </div>
  );
};

export default CollectionPart;
