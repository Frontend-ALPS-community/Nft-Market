'use client';
import { ReactNode, useState } from 'react';

interface PropertyProps {
  children: ReactNode;
  a: string;
}

const Property: React.FC<PropertyProps> = ({ a, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-64">
      <div className="flex justify-between items-center p-4 rounded-xl bg-orange-300">
        <div className="font-bold">{children}</div>
        <div className="flex">
          <div className="text-[#545454] text-sm">10</div>
          <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
            🔽
          </div>
        </div>
      </div>
      <div
        className={`${toggle ? `` : `hidden`} text-[#121212] rounded-xl p-4 bg-red-100`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mx-4">✔</div>
            <div>Green</div>
          </div>
          <div className="text-[#545454]  text-sm">1234</div>
        </div>
      </div>
    </div>
  );
};

export default Property;
