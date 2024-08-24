import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const calculateRemainingTime = (expiryDate: Date | string): string => {
  const now = dayjs(); // 현재 시간
  const expiry = dayjs(expiryDate); // 만료 시간

  const diffInDays = expiry.diff(now, 'day'); // 일 단위로 남은 시간 계산

  if (diffInDays > 0) {
    return `${diffInDays}일 전`;
  } else {
    const diffInHours = expiry.diff(now, 'hour'); // 시간 단위로 남은 시간 계산
    if (diffInHours > 0) {
      const hours = diffInHours;
      const minutes = expiry.diff(now, 'minute') % 60; // 분 단위 계산
      return `${hours}시간 후`;
    } else {
      const diffInMinutes = expiry.diff(now, 'minute'); // 분 단위로 남은 시간 계산
      if (diffInMinutes > 0) {
        const minutes = diffInMinutes;
        const seconds = expiry.diff(now, 'second') % 60; // 초 단위 계산
        return `${minutes}분 ${minutes < 10 ? `${seconds}초 후` : '후'}`;
      } else {
        return '만료';
      }
    }
  }
};
