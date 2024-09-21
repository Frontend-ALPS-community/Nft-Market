'use client';
import { authApi } from '@/apis/authApi';
import useAuthStore from '@/store/useAuth';
import useStatusStore from '@/store/useStatus';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface ILoginProps {
  handleIsModalOpen: () => void;
}

const Login: React.FC<ILoginProps> = ({ handleIsModalOpen }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const { setAuthState } = useAuthStore();
  const setUserId = useStatusStore((state) => state.setUserId);
  const setUsername = useStatusStore((state) => state.setUsername);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // 로그인 요청
      const res = await authApi.login({ email, password });
      if (res.status === 200) {
        const statusRes = await authApi.status();
        const { loggedIn, decoded } = statusRes;

        if (loggedIn && decoded?.userId) {
          setAuthState(true); // 로그인 상태 업데이트
          setUserId(decoded.userId); // userId를 zustand 스토어에 저장
          setUsername(decoded.username);

          router.push('/'); // 메인 페이지로 이동
        } else {
          throw new Error('로그인 상태 확인 실패');
        }
      } else {
        throw new Error('로그인 실패');
      }
    } catch (err) {
      console.error('Error during login:', err);
      alert('로그인 실패: 이메일 또는 비밀번호를 확인하세요.');
    }
  };

  return (
    <div className="centered-flex">
      <div className="w-full max-w-md p-4 sm:p-6">
        <form
          className="bg-white p-4 sm:p-6 rounded relative"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 relative">
            <label className="block text-gray-700">이메일</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700">비밀번호</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="centered-flex">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-black text-white rounded-md"
              onClick={handleIsModalOpen}
            >
              로그인
            </button>
          </div>
          <div className="mt-6 text-center"></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
