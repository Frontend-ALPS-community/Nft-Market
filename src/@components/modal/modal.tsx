'use client';
import { CardApi, IOfferBodyObj } from '@/apis/cardApi';
import { IDetailOffer } from '@/app/assets/[id]/components/price';
import useModal from '@/store/useModal';
import usePriceInfo from '@/store/usePriceInfo';
import dayjs from 'dayjs';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import Select, { StylesConfig } from 'react-select';
import ModalLayout from './modalLayout';

interface IModal extends IDetailOffer {}
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

const Modal: React.FC<IModal> = ({ id, card }) => {
  const [selectedOption, setSelectedOption] = useState<IOptions | null>(null);
  const options: IOptions[] = [
    { value: 30, label: '30분' },
    { value: 2, label: '2시간' },
    { value: 1, label: '1일' },
    { value: 3, label: '3일' },
    { value: 7, label: '7일' },
  ];

  const now = dayjs();
  const nowDate = {
    month: now.format('MMM'),
    day: now.format('D'),
    year: now.format('YYYY'),
    time: now.format('HH:mm'),
    period: now.format('A'),
  };
  const onChangeDate = (option: IOptions | null) => {
    setSelectedOption(option);
  };

  const { isButtonClicked, toggleButton } = useModal();
  const lowerLimitPrice = usePriceInfo.getState().price?.min || 0;
  const [offerPrice, setOfferPrice] = useState<number>(0);
  const onChangeOffer = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return setOfferPrice(0);
    setOfferPrice(parseFloat(e.target.value));
  };
  const onClickOfferBtn = async () => {
    if (lowerLimitPrice !== null) {
      const obj: IOfferBodyObj = {
        expiryDate: new Date(),
        lowerLimitPrice,
        price: offerPrice,
        proposer: 'Young Seung',
      };
      const res = await CardApi.createOffer(id, obj);
      console.log(res);
    }
  };
  return (
    <>
      <ModalLayout>
        <div className="between-flex text-2xl font-bold m-4">
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
            <div>0 FKC</div>
          </div>
          <div className="between-flex m-1">
            <div>하한가</div>
            <div>{lowerLimitPrice} ETH</div>
          </div>
          <div className="between-flex m-1">
            <div>최고 제안가</div>
            <div>0 FKC</div>
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
            className={`text-right text-theme-text-gray ${isNaN(offerPrice) ? 'text-red-500' : ''}`}
          >
            총 제안 금액: {offerPrice ? offerPrice : '--'}ETH
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
      </ModalLayout>
    </>
  );
};

export default Modal;
