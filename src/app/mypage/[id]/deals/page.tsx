'use client';
import React from 'react';

interface Deal {
  id: number;
  title: string;
  amount: string;
  status: string;
}

interface PageProps {
  filteredDeals: Deal[];
}

const Page: React.FC<PageProps> = ({ filteredDeals = [] }) => {
  console.log(filteredDeals);
  return (
    <div className="flex p-8 w-full bg-white shadow rounded-lg">
      {/* 오른쪽 콘텐츠 영역 */}
      <div className="border w-full border-gray-300 rounded-lg p-8 bg-gray-50">
        {filteredDeals.length > 0 ? (
          <ul className="space-y-4">
            {filteredDeals.map((deal) => (
              <li key={deal.id} className="flex justify-between items-center">
                <span className="w-1/3">{deal.title}</span>
                <span className="w-1/3 text-right">{deal.amount}</span>
                <span className="w-1/3 text-right text-gray-500">
                  {deal.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">No deals to display</div>
        )}
      </div>
    </div>
  );
};

export default Page;
