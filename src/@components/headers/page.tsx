import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="min-w-[380px] w-full h-[80px] bg-slate-400 flex justify-between  items-center px-[25px]">
        <Link href="/" className="flex items-center">
          <img width={50} src="assets/logo/miniLogo.png"></img>
          <div>서비스명</div>
        </Link>
        <div className="flex  text-xs  sm:text-base ">
          <Link href="/auth" className="mr-[10px] rounded-lg p-2 bg-orange-300">
            로그인
          </Link>
          <Link href="/auth" className="mr-[30px] rounded-lg p-2 bg-orange-300">
            회원가입
          </Link>
          <div>🟰</div>
        </div>
      </div>
    </>
  );
};

export default Header;
