interface IBoxLayout {
  property: string;
  value: string;
}

const BoxLayout: React.FC<IBoxLayout> = ({ property, value }) => {
  return (
    <div className={`bg-theme-bg-gray flex flex-col gap-1 py-2 w-[170px]`}>
      <div className="text-xs font-bold text-theme-text-gray text-center">
        {property}
      </div>
      <div className="text-sm text-center">
        <span className="font-semibold">{value}</span>{' '}
        <span className="text-theme-text-gray">16%</span>
      </div>
      <div className="text-theme-text-gray text-sm text-center">
        하한가 : 0.341 ETH
      </div>
    </div>
  );
};

export default BoxLayout;
