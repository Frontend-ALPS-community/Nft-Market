import DetailLayout from '@/@components/assets/DetailLayout';
import BoxLayout from './attributeLayout';

const DetailProp = () => {
  return (
    <div className="my-4">
      <DetailLayout title="특성" arrow={true}>
        <div className="flex gap-2">
          <BoxLayout property={'BACKGROUND'} />
          <BoxLayout property={'BACKGROUND'} />
          <BoxLayout property={'BACKGROUND'} />
        </div>
      </DetailLayout>
    </div>
  );
};

export default DetailProp;
