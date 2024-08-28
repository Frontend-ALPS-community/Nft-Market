'use client';
import { childProps } from '@/types/type';
import React, { useState } from 'react';

interface IDetailLayOut extends childProps {
  title: string;
  arrow: boolean;
  bold: boolean;
  saleDate: Date | null;
}

const DetailLayout: React.FC<IDetailLayOut> = ({
  title,
  children,
  arrow,
  bold,
  saleDate,
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  return (
    <div className="border rounded-lg">
      <div className="m-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div>⚡</div>
            {saleDate ? (
              <div className={`${bold ? 'font-semibold' : ''}`}>{title}</div>
            ) : (
              <div className={`font-semibold`}>가격정보</div>
            )}
          </div>
          <div
            className={`cursor-pointer ${arrow ? '' : 'hidden'}`}
            onClick={() => setIsClick(!isClick)}
          >
            🔽
          </div>
        </div>
      </div>
      <hr className={`${isClick ? 'hidden' : ''}`} />
      <div className={`${isClick ? 'hidden' : ''}`}>{children}</div>
    </div>
  );
};

export default DetailLayout;
