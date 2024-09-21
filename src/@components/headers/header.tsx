'use client';
import Login from '@/@components/headers/components/login';
import Signup from '@/@components/headers/components/signup';
import { authApi } from '@/apis/authApi';
import useAuthStore from '@/store/useAuth';
import useDecodedStore from '@/store/useDecode';
import usePriceInfo from '@/store/usePriceInfo';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BiSolidWallet } from 'react-icons/bi';
import { FiX } from 'react-icons/fi';
import { IoPersonCircle } from 'react-icons/io5';
import ModalLayout from '../modal/modalLayout';
const Header = () => {
  const { price, setPrice } = usePriceInfo((state) => ({
    price: state.price,
    setPrice: state.setPrice,
  }));
  const setDecoded = useDecodedStore().setDecoded;
  const { wallet, username } = useDecodedStore().decoded;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);

  const handleIsModalOpen = (modalType: 'login' | 'signup') => {
    if (modalType === 'login') {
      setIsLoginModalOpen(!isLoginModalOpen);
    } else if (modalType === 'signup') {
      setIsSignUpModalOpen(!isSignUpModalOpen);
    }
  };
  const fetchUserStatus = async () => {
    try {
      const res = await authApi.status();
      if (res.loggedIn === true) {
        setDecoded({
          userId: res.decoded.userId,
          username: res.decoded.username,
          wallet: res.decoded.wallet,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setPrice();
    fetchUserStatus();
  }, []);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { authState, setAuthState } = useAuthStore((state) => ({
    authState: state.authState,
    setAuthState: state.setAuthState,
  }));

  const onClickLogOutBtn = async () => {
    try {
      await authApi.logout();
      alert('로그아웃되었습니다.');
      setAuthState(false);
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const checkTokenStatus = async () => {
    try {
      const { loggedIn } = await authApi.status();
      setAuthState(loggedIn);
    } catch (error) {
      console.error('Failed to check token status:', error);
    }
  };

  useEffect(() => {
    checkTokenStatus();

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        dropdownRef.current.classList.add('hidden');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    dropdownRef.current?.classList.toggle('hidden');
  };

  return (
    <div className="sticky top-0 z-30 w-full h-[80px] bg-white flex justify-between items-center px-4 sm:px-6">
      <ModalLayout isOpen={isLoginModalOpen}>
        <div className="flex justify-end p-2">
          <FiX
            className="cursor-pointer"
            size={30}
            onClick={() => handleIsModalOpen('login')}
          />
        </div>
        <Login handleIsModalOpen={() => handleIsModalOpen('login')} />
      </ModalLayout>
      <ModalLayout isOpen={isSignUpModalOpen}>
        <div className="flex justify-end p-2">
          <FiX
            className="cursor-pointer"
            size={30}
            onClick={() => handleIsModalOpen('signup')}
          />
        </div>
        <Signup handleIsModalOpen={() => handleIsModalOpen('signup')} />
      </ModalLayout>
      <Link href="/" className="flex items-center">
        <img
          width={60}
          height={60}
          src="/assets/logo/header.png"
          alt="Logo"
          className="max-sm:w-[30px] max-sm:h-[30px]"
        />
        <Image
          alt="title"
          src="/assets/logo/NftMarket.png"
          width={150}
          height={150}
          className="max-sm:w-[100px]"
        />
      </Link>
      <div className="relative flex items-center">
        {authState ? (
          <div className="relative flex gap-2">
            <div className="bg-theme-bg-gray flex items-center gap-2 p-2 rounded-lg ">
              <div>
                <BiSolidWallet size={30} />
              </div>
              <div className="font-bold text-lg max-sm:text-base">
                {wallet} ETH
              </div>
            </div>
            <button
              onClick={toggleDropdown}
              className="bg-theme-bg-gray p-2 rounded-lg flex gap-2 items-center justify-center "
            >
              <IoPersonCircle size={30} />
              <div className="font-semibold text-lg max-sm:hidden">
                {username}
              </div>
            </button>
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-16 w-40 sm:w-48  bg-white rounded-md shadow-lg py-1 hidden"
            >
              <Link
                href="/mypage/collections"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                마이 페이지
              </Link>
              <button
                onClick={() => {
                  onClickLogOutBtn();
                  dropdownRef.current?.classList.add('hidden');
                }}
                className="block w-full text-left px-4 py-2  text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                로그아웃
              </button>
            </div>
          </div>
        ) : (
          <>
            <div
              className="mr-2 h-8 w-16 sm:mr-4 sm:w-auto sm:h-10 rounded-lg sm:px-6 border hover:bg-theme-bg-gray transition-all duration-300 flex items-center justify-center text-xs sm:text-base cursor-pointer font-semibold"
              onClick={() => handleIsModalOpen('login')}
            >
              로그인
            </div>
            <div
              className="h-8 w-16 sm:w-auto sm:h-10 rounded-lg  sm:px-6 border hover:bg-theme-bg-gray transition-all duration-300 flex items-center justify-center text-xs sm:text-base cursor-pointer font-semibold"
              onClick={() => handleIsModalOpen('signup')}
            >
              회원가입
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
