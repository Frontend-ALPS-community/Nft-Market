import { CardApi } from '@/apis/cardApi';
import DetailProp from '@/app/assets/[id]/components/attributes/index.';
import DetailImg from '@/app/assets/[id]/components/img';
import DetailInfo from '@/app/assets/[id]/components/info';
import DetailGraph from './components/graph';
import DetailOffer from './components/offer';
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
      <div className="flex-[4] flex flex-col gap-8">
        <DetailInfo />
        <DetailPrice card={card} id={id} />
        <DetailGraph />
        <DetailOffer />
      </div>
    </div>
  );
};

export default page;
