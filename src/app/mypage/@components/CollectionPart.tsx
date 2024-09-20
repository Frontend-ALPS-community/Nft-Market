'use client';

import Navbar from '@/@components/navbar/navbar';
import UtilityBar from '@/@components/utilityBar/page';
import CardCollection from '@/app/(home)/components/CardCollection';
import { CardData } from '@/app/assets/[id]/page';
import useUtilBar from '@/store/useUtilBar';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface CollectionPartProps {
  fetchData: () => Promise<CardData[]>;
}

const colorObj: { [key: string]: string } = {
  gray: '#CED4D9',
  green: '#95DBAD',
  pink: '#FCB5DB',
  yellow: '#F5CD71',
  purple: '#ABA3FF',
  blue: '#99CEFF',
};

// 색상 이름을 색상 코드로 변환하는 함수
const getColorCode = (colorName: string): string => {
  return colorObj[colorName] || colorName;
};

const CollectionPart: React.FC<CollectionPartProps> = ({ fetchData }) => {
  const router = useRouter();
  const { sortValue } = useUtilBar();
  const [card, setCard] = useState<CardData[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardData[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetchData();
        setCard(res);
        //console.log('전체 카드 데이터:', res);
      } catch (error) {
        console.error('Failed to fetch card data:', error);
      }
    };
    fetchCard();
  }, [fetchData]);

  // 필터링 로직
  useEffect(() => {
    //console.log('필터링 시작');
    //console.log('선택된 색상:', selectedColors);
    //console.log('전체 카드 데이터:', card);

    if (selectedColors.length > 0) {
      const selectedColorCodes = selectedColors.map((color) =>
        getColorCode(color).toLowerCase()
      );

      const filtered = card.filter((item) => {
        const itemBackground = item.attributes.background.trim().toLowerCase();
        const isMatch = selectedColorCodes.includes(itemBackground);
        // console.log(
        //   `카드 ${item._id} - background: ${item.attributes.background}, 매칭 여부: ${isMatch}`
        // );
        return isMatch;
      });
      setFilteredCards(filtered);
      //console.log('필터링된 카드:', filtered);
    } else {
      setFilteredCards(card);
      //console.log('선택된 색상이 없으므로 전체 카드 표시');
    }
  }, [selectedColors, card]);

  // CardCollection에 전달되는 카드 데이터 확인
  useEffect(() => {
    //console.log('CardCollection에 전달되는 카드 데이터:', filteredCards);
  }, [filteredCards]);

  const handleColorChange = (colors: string[]) => {
    setSelectedColors(colors);
    //console.log('선택된 색상:', colors);
  };

  const handleCardClick = (id: string) => {
    router.push(`/assets/${id}?modal=sell`);
  };

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };

  return (
    <div className="w-full">
      <UtilityBar
        cardLength={filteredCards.length}
        handleViewModeChange={handleViewModeChange}
        viewMode={viewMode}
      />
      <div className="flex">
        <Navbar onColorChange={handleColorChange} card={card} />
        <CardCollection
          card={filteredCards}
          onCardClick={handleCardClick}
          viewMode={viewMode}
        />
      </div>
    </div>
  );
};

export default CollectionPart;
