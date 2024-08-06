import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // FormData 객체 생성
    const formData = new FormData();
    // FormData에 데이터 추가
    formData.append('email', email);
    formData.append('password', password);

    // FormData의 데이터 확인
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    // 서버에 로그인 요청
    fetch('주소', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('응답:', result);
      })
      .catch((error) => {
        console.error('오류 발생:', error);
      });
  };

  return (
    <div>
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

          <div className="items-center">
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
