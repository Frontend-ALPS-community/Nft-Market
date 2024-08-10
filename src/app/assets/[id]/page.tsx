import { CardApi } from '@/apis/cardApi';
import DetailImg from '@/app/assets/[id]/components/img';
import DetailInfo from '@/app/assets/[id]/components/info';
import DetailProp from '@/app/assets/[id]/components/attributes/index.';
import DetailPrice from './components/price';

interface IParams {
  params: { id: string };
}

const page: React.FC<IParams> = async ({ params: { id } }) => {
  const card = await CardApi.getCard(id);

  return (
    <div className="flex gap-8 m-8">
      <div className="flex-[3]">
        <DetailImg img={card.image} background={card.attributes.background} />
        <DetailProp />
      </div>
      <div className="flex-[4]">
        <DetailInfo />
        <DetailPrice />
      </div>
    </div>
  );
};

export default page;
