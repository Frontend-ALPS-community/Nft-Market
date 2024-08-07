import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="min-w-[380px] w-full h-[80px] bg-slate-200 flex justify-between items-center px-[25px]">
        <Link href="/" className="flex items-center">
          <img width={50} src="assets/logo/miniLogo.png" alt="Logo" />
          <div>서비스명</div>
        </Link>
        <div className="flex text-xs sm:text-base">
          <Link
            href="/auth?type=login"
            className="mr-[10px] rounded-lg p-2 bg-slate-300 hover:bg-slate-400"
          >
            로그인
          </Link>
          <Link
            href="/auth?type=signup"
            className="mr-[30px] rounded-lg p-2 bg-slate-300 hover:bg-slate-400"
          >
            회원가입
          </Link>
          <div>🟰</div>
        </div>
      </div>
    </>
  );
};

export default Header;
