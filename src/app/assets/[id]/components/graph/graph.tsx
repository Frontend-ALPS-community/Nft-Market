import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import dayjs from 'dayjs';
import { Line } from 'react-chartjs-2';
import { CardData } from '../../page';

// Chart.js에서 사용할 컴포넌트 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IGraphProps {
  card: CardData;
  currencyUnit: string; // 거래 단위 (예: '₩', '$')
}

const Graph: React.FC<IGraphProps> = ({ card, currencyUnit }) => {
  const data = {
    // 날짜를 YYYY-MM-DD 형식으로 포맷
    labels: card.transaction.map((item) =>
      dayjs(item.date).format('YYYY-MM-DD')
    ),
    datasets: [
      {
        label: '거래 금액',
        data: card.transaction.map((item) => item.price), // 거래 금액을 y축 데이터로 사용
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
        pointRadius: 5, // 데이터 포인트의 크기 지정 (픽셀 단위)
        pointHoverRadius: 8, // 마우스를 올렸을 때의 포인트 크기 지정
      },
    ],
  };

  // 차트 옵션 설정
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '월별 거래 금액',
      },
    },
    scales: {
      y: {
        type: 'linear' as const, // 'linear' 타입을 명시적으로 지정
        ticks: {
          callback: function (tickValue: string | number) {
            // tickValue가 string인지 number인지 확인
            if (typeof tickValue === 'number') {
              return `${tickValue.toLocaleString()} ${currencyUnit}`; // y축 라벨에 거래 단위 추가
            }
            return tickValue;
          },
        },
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default Graph;
