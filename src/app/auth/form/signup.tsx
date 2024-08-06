import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 폼 제출 로직

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다!!!');
      return;
    }
    // FormData 객체 생성
    const formData = new FormData();
    // FormData에 데이터 추가
    formData.append('email', email);
    formData.append('password', password);
    formData.append('nickname', nickname);

    // FormData의 데이터 확인
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    //요청 로직
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
          <button
            type="button"
            className="absolute top-0 right-0 px-3 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
          >
            중복체크
          </button>
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
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button
            type="button"
            className="absolute top-0 right-0 px-3 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
          >
            중복체크
          </button>
        </div>

        <div className="items-center">
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
