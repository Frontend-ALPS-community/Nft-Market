import Modal from '@/@components/modal/modal';
import Navbar from '@/@components/navbar/navbar';
import UtilityBar from '@/@components/utilityBar/page';

export default function Home() {
  return (
    <>
      <div className="max-w-full">
        <div className="w-full h-[500px] bg-red-400">
          <video
            className="object-cover w-full h-full mx-auto"
            autoPlay
            loop
            muted
          >
            <source src="/assets/video/fixmain.mp4" />
          </video>
        </div>
      </div>
      <UtilityBar />

      {/* <div className="flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      <Navbar />
      <Modal />
    </>
  );
}
