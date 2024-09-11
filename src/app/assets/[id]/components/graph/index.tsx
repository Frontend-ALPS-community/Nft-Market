import DetailLayout from '@/@components/assets/DetailLayout';
import { CardData } from '../../page';
import Graph from './graph';

interface IDetailGraphProps {
  card: CardData;
}

const DetailGraph: React.FC<IDetailGraphProps> = ({ card }) => {
  return (
    <>
      <DetailLayout title={'가격기록'} arrow={true} bold={true}>
        <Graph card={card} currencyUnit={'ETH'} />
      </DetailLayout>
    </>
  );
};

export default DetailGraph;
