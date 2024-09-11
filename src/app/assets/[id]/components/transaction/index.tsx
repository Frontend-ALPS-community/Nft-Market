import DetailLayout from '@/@components/assets/DetailLayout';
import { CardData } from '../../page';
import TransactionItem from './TransactionItem';

interface ITransProps {
  card: CardData;
  id: string;
}

const DetailTransaction: React.FC<ITransProps> = ({ card, id }) => {
  return (
    <div className="my-8">
      <DetailLayout arrow={true} bold={true} title={'아이템 거래'}>
        <div className="max-h-[400px] overflow-auto">
          <div className={`flex sticky top-0 px-4 py-2 bg-white`}>
            <div className={`flex-[0.8]`}>이벤트</div>
            <div className={`flex-[0.8]`}>가격</div>
            <div className={`flex-1`}>From</div>
            <div className={`flex-1`}>To</div>
            <div className={`flex-1`}>날짜</div>
          </div>
          {card.transaction.map((item) => (
            <TransactionItem item={item} />
          ))}
        </div>
      </DetailLayout>
    </div>
  );
};

export default DetailTransaction;
