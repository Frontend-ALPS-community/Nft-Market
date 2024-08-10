import { childProps } from '@/types/type';
import React from 'react';

interface IDetailLayOut extends childProps {
  title: string;
}

const DetailLayout: React.FC<IDetailLayOut> = ({ title, children }) => {
  return (
    <div className="border rounded-lg">
      <div className="bg- bg-yellow-200 m-4">
        <span>⚡</span>
        {title}
      </div>
      {children}
    </div>
  );
};

export default DetailLayout;
