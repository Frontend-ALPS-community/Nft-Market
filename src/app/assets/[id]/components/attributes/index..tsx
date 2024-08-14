import DetailLayout from '@/@components/assets/DetailLayout';
import BoxLayout from './attributeLayout';

const DetailProp = () => {
  return (
    <div className="my-4">
      <DetailLayout title="특성" arrow={true} bold={true}>
        <div className="flex flex-wrap gap-2 m-2">
          <BoxLayout property={'BACKGROUND'} />
          <BoxLayout property={'BACKGROUND'} />
          <BoxLayout property={'BACKGROUND'} />
          <BoxLayout property={'BACKGROUND'} />
          <BoxLayout property={'BACKGROUND'} />
          <BoxLayout property={'BACKGROUND'} />
          <BoxLayout property={'BACKGROUND'} />
          <BoxLayout property={'BACKGROUND'} />
        </div>
      </DetailLayout>
    </div>
  );
};

export default DetailProp;
