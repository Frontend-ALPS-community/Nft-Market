import CollectionPart from './components/CollectionPart';
import HomeInfo from './components/HomeInfo';

export default function Home() {
  return (
    <>
      <div className="max-w-full">
        <div className="w-full h-[500px] relative">
          <HomeInfo />
          <video
            className="object-cover w-full h-full mx-auto"
            autoPlay
            loop
            muted
            controls={false}
          >
            <source src="/assets/video/high.mp4" />
          </video>
        </div>
      </div>
      <CollectionPart />
    </>
  );
}
