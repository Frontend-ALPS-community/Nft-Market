'use client';
import { colorArr } from '@/constant/constant';
import { ReactNode, useState } from 'react';

interface PropertyProps {
  children: ReactNode;
  type: string;
  onColorChange: (colors: string[]) => void; // 색상 변경 핸들러
}

const Property: React.FC<PropertyProps> = ({
  type,
  children,
  onColorChange,
}) => {
  const [toggle, setToggle] = useState(true);
  const [checkedColors, setCheckedColors] = useState<string[]>([]); // 체크된 색상 배열

  // 체크 상태를 업데이트하는 함수
  const handleCheck = (color: string) => {
    let updatedColors;
    if (checkedColors.includes(color)) {
      updatedColors = checkedColors.filter((item) => item !== color);
    } else {
      updatedColors = [...checkedColors, color];
    }
    setCheckedColors(updatedColors);
    onColorChange(updatedColors); // 색상 변경 시 상위 컴포넌트로 상태 전달
  };

  // type에 따라 다른 데이터를 출력하는 로직
  const renderContent = () => {
    switch (type) {
      case 'background':
        return (
          <>
            {colorArr.map((item) => (
              <div
                key={item}
                className={`${toggle ? `` : `hidden`} text-[#121212] rounded-xl p-4 cursor-pointer hover:bg-theme-bg-gray`}
                onClick={() => handleCheck(item)} // 체크박스를 클릭할 때 상태 업데이트
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mx-4">
                      <input
                        className="scale-150"
                        type="checkbox"
                        checked={checkedColors.includes(item)} // 각각의 checkbox 상태에 따라 체크 여부 결정
                      />
                    </div>
                    <div>{item}</div>
                  </div>
                </div>
              </div>
            ))}
          </>
        );
      case 'types':
        return <div>Type 관련 옵션이나 데이터를 여기에 표시</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-64">
      <div
        className="flex justify-between items-center p-4 rounded-xl  bg-theme-bg-gray hover:bg-theme-bg-gray cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <div className="font-bold">{children}</div>
        <div className="flex">
          <div className="text-[#545454] text-sm">{}</div>
          <div className="cursor-pointer">{toggle ? '🔼' : '🔽'}</div>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default Property;
