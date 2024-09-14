import { FiInstagram, FiMoreHorizontal, FiTwitter } from 'react-icons/fi';
import { HiOutlineCheckBadge } from 'react-icons/hi2';

const HomeInfo = () => {
  return (
    <>
      <div className="text-theme-text-white absolute bottom-0 ml-14 z-10">
        <div className="flex flex-col gap-6">
          <img
            width={100}
            height={100}
            src="/assets/logo/logoball.png"
            className="bg-black rounded-xl"
          />
          <div className="text-xl font-bold flex flex-col gap-1">
            <div className="flex gap-2">
              <div>Monsterz</div>
              <div className="flex items-center gap-4">
                <HiOutlineCheckBadge size={25} fill="#2081E2" />
                <span className="text-theme-border-gray font-normal">|</span>
                <FiInstagram className="hover:opacity-70 cursor-pointer" />
                <FiTwitter
                  fill="white"
                  className="hover:opacity-70 cursor-pointer"
                />
                <FiMoreHorizontal className="hover:opacity-70 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center gap-2 relative right-2">
              <div className="font-light text-sm">PROOF_XYZ</div>
              <HiOutlineCheckBadge size={20} fill="#2081E2" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default HomeInfo;
