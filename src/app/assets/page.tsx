import DetailImg from '@/@components/assets/detail-img';
import DetailInfo from '@/@components/assets/detail-info';
import DetailProp from '@/@components/assets/detail-property';

const page = () => {
  return (
    <div className="flex bg-orange-200 my-8">
      <div>
        <DetailImg />
        <DetailProp />
      </div>
      <div>
        <DetailInfo />
      </div>
    </div>
  );
};

export default page;
