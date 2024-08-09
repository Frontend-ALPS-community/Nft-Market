import { authApi } from '@/apis/authApi';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await authApi.register({
        username,
        email,
        password,
      });
      router.push('/auth?type=login');
      window.location.replace('/auth?type=login');
    } catch (err) {
      console.log(err);
      alert('정보를 다시 확인해주세요');
    }
  };

  return (
    <div className="w-full max-w-md p-4 sm:p-6">
      <form
        className="bg-white p-4 sm:p-6 rounded shadow-md relative"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 relative">
          <label className="block text-gray-700">이메일</label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
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

        <div className="mb-6 relative">
          <label className="block text-gray-700">비밀번호 확인</label>
          <input
            type="password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="mb-6 relative">
          <label className="block text-gray-700">닉네임</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="centered-flex">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-black text-white rounded-md"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
