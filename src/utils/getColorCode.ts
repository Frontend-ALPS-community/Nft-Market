import { colorObj } from '@/constant/constant';

export const getColorCode = (colorName: string): string => {
  return (
    Object.keys(colorObj).find((key) => colorObj[key] === colorName) ||
    colorName
  );
};
