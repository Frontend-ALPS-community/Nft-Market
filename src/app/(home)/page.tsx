import Navbar from '@/@components/navbar/navbar';

export default function Home() {
  return (
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
      {/* <div className="flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      <Navbar />
      {/* <Modal /> */}
    </div>
  );
}
