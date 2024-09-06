import DetailLayout from '@/@components/assets/DetailLayout';
import { CardData } from '../../page';
import BoxLayout from './attributeLayout';

interface IDetailProp {
  card: CardData;
}

const colorArr = {
  '#CED4D9': 'gray',
  '#95DBAD': 'green',
  '#FCB5DB': 'pink',
  '#F5CD71': 'yellow',
  '#ABA3FF': 'purple',
  '#99CEFF': 'blue',
};

const DetailProp: React.FC<IDetailProp> = ({ card }) => {
  return (
    <div className="my-4">
      <DetailLayout title="특성" arrow={true} bold={true}>
        <div className="flex flex-wrap gap-2 m-2">
          {Object.entries(card.attributes).map(([key, value]) => (
            <BoxLayout property={key.toUpperCase()} value={value} />
          ))}
        </div>
      </DetailLayout>
    </div>
  );
};

export default DetailProp;
