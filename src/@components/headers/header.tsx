'use client';
import { authApi } from '@/apis/authApi';
import useAuthStore from '@/store/useAuth';
import useDecodedStore from '@/store/useDecode';
import usePriceInfo from '@/store/usePriceInfo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { IoPersonCircle } from 'react-icons/io5';

const Header = () => {
  const { price, setPrice } = usePriceInfo((state) => ({
    price: state.price,
    setPrice: state.setPrice,
  }));
  const setDecoded = useDecodedStore().setDecoded;
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
    <div className="sticky top-0 left-0 z-50   w-full h-[80px] bg-white flex justify-between items-center px-4 sm:px-6 shadow-md">
      <Link href="/" className="flex items-center">
        <img
          width={60}
          src="/assets/logo/logoball.png"
          alt="Logo"
          className="mr-2 sm:mr-3"
        />
        <div className="text-gray-800 font-semibold text-base sm:text-lg">
          Service Name
        </div>
      </Link>
      <div className="relative flex items-center">
        {authState ? (
          <div className="relative z-50">
            <button
              onClick={toggleDropdown}
              className="h-8 sm:h-14 w-8 sm:w-14 rounded-full bg-white flex items-center justify-center"
            >
              <IoPersonCircle size={50} />
            </button>
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-md shadow-lg py-1 hidden"
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
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                로그아웃
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link
              href="/auth?type=login"
              className="mr-2 sm:mr-4 h-8 sm:h-10 rounded-full px-4 sm:px-6 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
            >
              로그인
            </Link>
            <Link
              href="/auth?type=signup"
              className="h-8 sm:h-10 rounded-full px-4 sm:px-6 border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
            >
              회원가입
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
