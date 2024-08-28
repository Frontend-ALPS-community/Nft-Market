import { CardApi, IOfferBodyObj } from '@/apis/cardApi';
import { CardData } from '@/app/assets/[id]/page';
import useDecodedStore from '@/store/useDecode';
import useOfferModal from '@/store/useOfferModal';
import usePriceInfo from '@/store/usePriceInfo';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import Select, { StylesConfig } from 'react-select';

interface IOfferModal {
  id: string;
  card: CardData;
  onCardUpdated: () => void;
}
interface IOptions {
  value: number;
  label: string;
}
const customStyles: StylesConfig<IOptions, false> = {
  control: (provided) => ({
    ...provided,
    borderRadius: '0.5rem', // rounded-lg equivalent
    color: 'black',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '0.5rem', // rounded-lg equivalent
    marginTop: '4px',
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: '0.5rem', // rounded-lg equivalent
  }),
};

interface INowDate {
  month: string;
  day: string;
  year: string;
  time: string;
  period: string;
}

const OfferModal: React.FC<IOfferModal> = ({ id, card, onCardUpdated }) => {
  const [selectedOption, setSelectedOption] = useState<IOptions | null>(null);
  const [nowDate, setNowDate] = useState<INowDate>({
    month: dayjs().format('MMM'),
    day: dayjs().format('D'),
    year: dayjs().format('YYYY'),
    time: dayjs().format('HH:mm'),
    period: dayjs().format('A'),
  });
  const options: IOptions[] = [
    { value: 3, label: '3분' },
    { value: 30, label: '30분' },
    { value: 2, label: '2시간' },
    { value: 1, label: '1일' },
    { value: 3, label: '3일' },
    { value: 7, label: '7일' },
  ];

  const onChangeDate = (option: IOptions | null) => {
    setSelectedOption(option);
  };

  const { isButtonClicked, toggleButton } = useOfferModal();
  const proposer = useDecodedStore().decoded.username;
  const userId = useDecodedStore().decoded.userId;
  const lowerLimitPrice = usePriceInfo.getState().price?.min || 0;
  const [offerPrice, setOfferPrice] = useState<string>('');
  const onChangeOffer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOfferPrice(e.target.value);
  };

  const onClickOfferBtn = async () => {
    if (!offerPrice || !selectedOption)
      return window.alert('가격이나 날짜가 비어있습니다');
    if (isNaN(parseFloat(offerPrice)))
      return window.alert('가격을 올바르게 입력해주세요');
    if (lowerLimitPrice !== null) {
      const expiryDate = dayjs(
        `${nowDate.year}-${nowDate.month}-${nowDate.day} ${nowDate.time}`,
        'YYYY-MMM-D HH:mm'
      ).toDate();
      if (proposer) {
        const obj: IOfferBodyObj = {
          expiryDate,
          lowerLimitPrice,
          price: parseFloat(offerPrice),
          proposer,
          userId,
        };
        const res = await CardApi.createOffer(id, obj);
        onCardUpdated();
      }
    }
    toggleButton();
  };
  useEffect(() => {
    if (selectedOption) {
      let updatedDate = dayjs();

      if (selectedOption.label?.includes('분')) {
        updatedDate = updatedDate.add(selectedOption.value, 'minute');
      } else if (selectedOption.label?.includes('시간')) {
        updatedDate = updatedDate.add(selectedOption.value, 'hour');
      } else if (selectedOption.label?.includes('일')) {
        updatedDate = updatedDate.add(selectedOption.value, 'day');
      }

      setNowDate({
        month: updatedDate.format('MMM'),
        day: updatedDate.format('D'),
        year: updatedDate.format('YYYY'),
        time: updatedDate.format('HH:mm'),
        period: updatedDate.format('A'),
      });
    }
  }, [selectedOption]);
  return (
    <>
      <div className={`w-[700px] between-flex text-2xl font-semibold m-4`}>
        <div>제안하기</div>
        <div className="cursor-pointer" onClick={toggleButton}>
          <FiX />
        </div>
      </div>
      <div className="my-8 mx-8">
        <div className="flex-center">
          <img
            style={{ backgroundColor: card.attributes.background }}
            src={process.env.NEXT_PUBLIC_Backend_URL + card.image}
            className="w-[70px] h-[70px] m-4 rounded-xl"
          />
          <div>
            <div className="font-bold">{card.cardName}</div>
            <div className="text-sm">Monsters</div>
          </div>
        </div>
      </div>
      <div className="bg-theme-bg-gray rounded-lg p-4 m-4">
        <div className="between-flex m-1">
          <div>잔액</div>
          <div>0 ETH</div>
        </div>
        <div className="between-flex m-1">
          <div>하한가</div>
          <div>{lowerLimitPrice} ETH</div>
        </div>
        <div className="between-flex m-1">
          <div>최고 제안가</div>
          <div>0 ETH</div>
        </div>
      </div>
      <div className="m-4">
        <div className="border-2 h-14 flex-center rounded-lg">
          <input
            onChange={onChangeOffer}
            className="outline-none ml-4 w-5/6"
            placeholder="가격"
          />
          <div className="border-l-2 p-4 font-bold">ETH</div>
        </div>
        <div
          className={`text-right ${offerPrice === '' ? 'text-theme-text-gray' : isNaN(parseFloat(offerPrice)) ? 'text-red-500' : 'text-theme-text-gray'}`}
        >
          총 제안 금액: {!isNaN(parseFloat(offerPrice)) ? offerPrice : '--'}
          ETH
        </div>
      </div>
      <div className="m-4">
        <div className="text-lg font-bold my-2">기간</div>
        <div className="flex gap-2">
          <Select
            value={selectedOption}
            onChange={onChangeDate}
            options={options}
            placeholder="기간"
            className="w-[130px] flex-[1]"
            menuPlacement="top"
            maxMenuHeight={160}
            styles={customStyles}
          />
          <div className="between-flex border border-gray-300 rounded-lg flex-[4]">
            <div className="pl-4">
              {nowDate.month} {nowDate.day}, {nowDate.year}
            </div>
            <div className="pr-4">
              {nowDate.time} {nowDate.period}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={onClickOfferBtn}
        className="centered-flex bg-theme-text-blue m-4 rounded-lg p-4 text-white font-bold cursor-pointer"
      >
        제안하기
      </div>
    </>
  );
};

export default OfferModal;
