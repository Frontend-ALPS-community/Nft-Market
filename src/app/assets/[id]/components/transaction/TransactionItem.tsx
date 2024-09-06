import dayjs from 'dayjs';
import { Transaction } from '../../page';

interface ITransactionItemProps {
  item: Transaction;
}

const TransactionItem: React.FC<ITransactionItemProps> = ({ item }) => {
  const date = dayjs(item.date);
  const day = {
    month: dayjs().format('MMM'),
    day: dayjs().format('D'),
    year: dayjs().format('YYYY'),
    time: dayjs().format('HH:mm'),
    period: dayjs().format('A'),
  };

  return (
    <div className="border-t">
      <div className="flex px-4 py-4">
        <div className={`flex-[0.8]`}>판매</div>
        <div className={`flex-[0.8] font-semibold`}>{item.price} ETH</div>
        <div className={`flex-1 font-semibold text-theme-text-blue`}>
          {item.from}
        </div>
        <div className={`flex-1 font-semibold text-theme-text-blue`}>
          {item.to}
        </div>
        <div className={`flex-1 font-semibold text-theme-text-blue`}>
          {day.month} {day.day}, {day.year} {day.time}
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
