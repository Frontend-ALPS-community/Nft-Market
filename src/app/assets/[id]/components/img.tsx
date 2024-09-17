'use client';
import { CardApi } from '@/apis/cardApi';
import useDecodedStore from '@/store/useDecode';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { CardAttributes } from '../page';

interface IDetailImg {
  id: string;
  card: {
    image: string;
    attributes: CardAttributes;
    favorites: string[];
  };
  onCardUpdated: () => void;
}

const DetailImg: React.FC<IDetailImg> = ({ id, card, onCardUpdated }) => {
  const { username, userId } = useDecodedStore().decoded;
  const [fillHeart, setFillHeart] = useState<boolean>(false);
  const onClickHeart = async () => {
    if (username) {
      await CardApi.updateFavorite(id, { username, userId });
      onCardUpdated();
    }
  };
  useEffect(() => {
    if (username) {
      setFillHeart(card.favorites.includes(username));
    }
  }, [username, card.favorites]);
  return (
    <div>
      <div
        style={{ backgroundColor: card?.attributes.background }}
        className={`aspect-square rounded-lg centered-flex relative`}
      >
        <div className="absolute right-2 top-2 text-2xl">
          <FiHeart
            color={`${fillHeart ? 'red' : ''}`}
            fill={`${fillHeart ? 'red' : 'none'}`}
            onClick={onClickHeart}
            className="cursor-pointer"
          />
        </div>
        <Image
          alt="Card Img"
          src={process.env.NEXT_PUBLIC_Backend_URL + card?.image}
        />
      </div>
    </div>
  );
};

export default DetailImg;
