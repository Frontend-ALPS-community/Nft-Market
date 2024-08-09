import DetailImg from '@/app/assets/[id]/components/detail-img';
import DetailInfo from '@/app/assets/[id]/components/detail-info';
import DetailProp from '@/app/assets/[id]/components/detail-property';
import { CardApi } from '@/apis/cardApi';

interface IParams {
  params: { id: string };
}

const page: React.FC<IParams> = async ({ params: { id } }) => {
  const card = await CardApi.getCard(id);
  return (
    <div className="flex bg-orange-200 my-8">
      <div>
        <DetailImg img={card.image} background={card.attributes.background} />
        <DetailProp />
      </div>
      <div>
        <DetailInfo />
      </div>
    </div>
  );
};

export default page;
