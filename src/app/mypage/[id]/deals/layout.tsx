'use client';

import React, { ReactNode, useState } from 'react';
import Page from './page';
// Page 컴포넌트를 import

interface Deal {
  id: number;
  title: string;
  amount: string;
  status: string;
}

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  // 거래 데이터를 Layout 컴포넌트 내에 위치
  const deals: Deal[] = [
    { id: 1, title: 'Deal 1', amount: '$100', status: 'Active' },
    { id: 2, title: 'Deal 2', amount: '$200', status: 'Accepted' },
    { id: 3, title: 'Deal 3', amount: '$150', status: 'Canceled' },
    { id: 4, title: 'Deal 4', amount: '$300', status: 'Active' },
    { id: 5, title: 'Deal 5', amount: '$450', status: 'Expired' },
    { id: 6, title: 'Deal 6', amount: '$600', status: 'Inactive' },
    { id: 7, title: 'Deal 7', amount: '$750', status: 'Active' },
    { id: 8, title: 'Deal 8', amount: '$50', status: 'Accepted' },
    { id: 9, title: 'Deal 9', amount: '$90', status: 'Canceled' },
    { id: 10, title: 'Deal 10', amount: '$200', status: 'Expired' },
    { id: 11, title: 'Deal 11', amount: '$125', status: 'Inactive' },
  ];

  const [status, setStatus] = useState<string>('All');

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };

  // status에 따라 거래 목록 필터링
  const filteredDeals =
    status === 'All' ? deals : deals.filter((deal) => deal.status === status);

  const getButtonClass = (buttonStatus: string) => {
    return `block w-full text-left text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-lg ${
      status === buttonStatus ? 'bg-gray-100' : ''
    }`;
  };

  return (
    <div className="flex p-8 bg-white ">
      {/* 왼쪽 사이드바 */}
      <div className="w-1/4">
        <div className="space-y-4">
          <button
            onClick={() => handleStatusChange('All')}
            className={getButtonClass('All')}
          >
            All
          </button>
          <button
            onClick={() => handleStatusChange('Active')}
            className={getButtonClass('Active')}
          >
            Active
          </button>
          <button
            onClick={() => handleStatusChange('Accepted')}
            className={getButtonClass('Accepted')}
          >
            Accepted
          </button>
          <button
            onClick={() => handleStatusChange('Canceled')}
            className={getButtonClass('Canceled')}
          >
            Canceled
          </button>
          <button
            onClick={() => handleStatusChange('Inactive')}
            className={getButtonClass('Inactive')}
          >
            Inactive
          </button>
          <button
            onClick={() => handleStatusChange('Expired')}
            className={getButtonClass('Expired')}
          >
            Expired
          </button>
        </div>
      </div>

      {/* 오른쪽 콘텐츠 영역 */}
      <div className="w-3/4 pl-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Deals</h2>
          <div className="flex space-x-4">
            <select className="border border-gray-300 rounded-lg p-2">
              <option>All deals</option>
              <option>Deals sent</option>
              <option>Deals received</option>
            </select>

            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Make a deal
            </button>
          </div>
        </div>

        <div className="ml-4 flex-1">
          <Page filteredDeals={filteredDeals} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
