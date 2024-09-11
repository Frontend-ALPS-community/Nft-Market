import { ReactNode } from 'react';

export interface childProps {
  children: ReactNode;
}

export interface IDecoded {
  userId: string;
  username: string;
  wallet: number;
}

export interface CardItem {
  _id: string;
  cardName: string;
  price: {
    lastPrice: number;
    currentPrice: number;
  };
  image: string;
  attributes: { background: string };
}
