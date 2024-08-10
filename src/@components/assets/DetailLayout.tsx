'use client';
import { childProps } from '@/types/type';
import React, { useState } from 'react';

interface IDetailLayOut extends childProps {
  title: string;
  arrow: boolean;
}

const DetailLayout: React.FC<IDetailLayOut> = ({ title, children, arrow }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  return (
    <div className="border rounded-lg">
      <div className="m-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div>⚡</div>
            <div>{title}</div>
          </div>
          <div
            className={`cursor-pointer ${arrow ? '' : 'hidden'}`}
            onClick={() => setIsClick(!isClick)}
          >
            🔽
          </div>
        </div>
      </div>
      <hr />
      <div className={`m-4 ${isClick ? 'hidden' : ''}`}>{children}</div>
    </div>
  );
};

export default DetailLayout;
