import Card from '@/@components/cards/card';

export default function Home() {
  return (
    <div className="max-w-full">
      {/* <video className="object-cover" autoPlay loop muted>
        <source src="/assets/vide/main.mp4" />
      </video> */}
      <div className="flex">
        {/* <Card
          title="카드 제목 1"
          description="이 카드는 예시입니다."
          imageUrl="https://placekitten.com/300/200"
        /> */}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
        <Card
          title="카드 제목 1"
          description="이 카드는 예시입니다."
          imageUrl="https://placekitten.com/300/200"
          aspectRatio="16/9" // 예시: 16:9 비율
        />
        <Card
          title="카드 제목 2"
          description="또 다른 카드 예시입니다."
          imageUrl="https://placekitten.com/300/200"
          aspectRatio="4/3" // 예시: 4:3 비율
        />
      </div>
    </div>
  );
}
