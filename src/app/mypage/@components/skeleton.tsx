export const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md m-4 max-w-[250px] min-w-[200px] flex-grow relative overflow-hidden animate-pulse">
      <div className="aspect-square bg-gray-300 rounded-lg"></div>
      <div className="m-4">
        <div className="h-6 bg-gray-300 mb-4 rounded"></div>
        <div className="h-4 bg-gray-300 mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};
