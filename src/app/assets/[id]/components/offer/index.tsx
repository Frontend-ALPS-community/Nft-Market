import DetailLayout from '@/@components/assets/DetailLayout';
import ModalLayout from '@/@components/modal/modalLayout';
import { CardApi } from '@/apis/cardApi';
import { useEffect, useState } from 'react';
import { CardData, Offer } from '../../page';
import OfferLayout from './offerLayout';
import OfferSellModal from './offerSellModal';

export interface IDetailOffer {
  card: CardData;
  username: string;
  updateCard: () => void;
  cardId: string;
}

const DetailOffer: React.FC<IDetailOffer> = ({
  card,
  username,
  updateCard,
  cardId,
}) => {
  const [selectedOffer, setSelectedOffer] = useState<Offer>(); // 선택된 제안 정보 저장
  const [isSellModalOpen, setIsSellModalOpen] = useState(false); // 모달 상태 추가

  const isOwner = card.owner === username ? true : false;

  const openSellModal = (offer: Offer) => {
    setSelectedOffer(offer); // 선택된 제안을 저장
    setIsSellModalOpen(true); // 모달 열기
  };

  const handleOfferSellBtn = async () => {
    await CardApi.acceptOffer(cardId, {
      username,
      offerId: selectedOffer?._id,
    });
    updateCard();
    closeSellModal();
  };

  const closeSellModal = () => {
    setIsSellModalOpen(false); // 모달 닫기
  };

  useEffect(() => {
    if (isSellModalOpen) {
      // 모달이 열렸을 때 body에 overflow-hidden 클래스를 추가하여 스크롤 방지
      document.body.classList.add('overflow-hidden');
    } else {
      // 모달이 닫혔을 때 overflow-hidden 클래스를 제거하여 스크롤 가능
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup 함수: 컴포넌트가 언마운트될 때 원래 상태로 복구
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isSellModalOpen]);

  return (
    <>
      <ModalLayout isOpen={isSellModalOpen}>
        <OfferSellModal
          card={card}
          offer={selectedOffer}
          onClose={closeSellModal}
          handleOfferSellBtn={handleOfferSellBtn}
        />
      </ModalLayout>

      <DetailLayout title={'offers'} arrow={true} bold={true}>
        <div className="max-h-[300px] overflow-auto">
          <div className="text-theme-text-gray sticky top-0 z-10 bg-white">
            <OfferLayout
              price={'가격'}
              usdPrice={'USD 가격'}
              differ={'하한가와의 차이'}
              expire={'만료'}
              from={'From'}
              item={false}
              isOwner={false}
            />
          </div>
          {card?.offers.map((item) => (
            <div className="py-4 border-t">
              <OfferLayout
                price={`${item.price} ETH`}
                usdPrice={`$${item.usdPrice}`}
                differ={item.priceDifference}
                expire={item.expiryDate}
                from={item.proposer}
                item={true}
                isOwner={isOwner}
                onSellClick={() => openSellModal(item)}
              />
            </div>
          ))}
        </div>
      </DetailLayout>
    </>
  );
};

export default DetailOffer;
