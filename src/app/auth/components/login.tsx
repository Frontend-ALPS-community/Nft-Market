import { authApi } from '@/apis/authApi';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await authApi.login({ email, password });
      router.push('/');
    } catch (err) {
      console.log(err);
      alert('로그인 실패: 이메일 또는 비밀번호를 확인하세요.');
    }
  };

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
