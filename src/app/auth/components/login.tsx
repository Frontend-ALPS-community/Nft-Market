'use client';
import { authApi } from '@/apis/authApi';
import useAuthStore from '@/store/useAuth';
import useUserIdStore from '@/store/useUserId';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const { setAuthState } = useAuthStore();
  const setUserId = useUserIdStore((state) => state.setUserId);
  const userId = useUserIdStore((state) => state.userId);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await authApi.login({ email, password });
      const { loggedIn } = await authApi.status();
      setAuthState(loggedIn); //로그인 상태 관리

      if (res.message === 'Login successful') {
        // 로그인 성공 시
        const statusRes = await authApi.status();
        if (statusRes.loggedIn) {
          setUserId(statusRes.decoded.userId); // userId를 zustand 스토어에 저장
          console.log('userId set in store:', statusRes.decoded.userId); // 상태 업데이트 후 확인
          console.log(
            'Current userId from store:', //얘는 뜸
            useUserIdStore.getState().userId
          ); // 스토어 상태를 즉시 확인
          router.push('/'); // 메인 페이지로 이동
        }
      }
    } catch (err) {
      console.log(err);
      alert('로그인 실패: 이메일 또는 비밀번호를 확인하세요.');
    }
  };
  useEffect(() => {
    if (userId) {
      console.log('Store updated with userId:', userId); // 상태가 업데이트된 후 userId 확인 요기도 잘뜸.
    } else {
      console.log('userId is not set in store');
    }
  }, [userId]); // userId가 변경될 때마다 useEffect 실행
  return (
    <div className="centered-flex">
      <div className="w-full max-w-md p-4 sm:p-6">
        <form
          className="bg-white p-4 sm:p-6 rounded shadow-md relative"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 relative">
            <label className="block text-gray-700">이메일</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700">비밀번호</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="centered-flex">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-black text-white rounded-md"
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
