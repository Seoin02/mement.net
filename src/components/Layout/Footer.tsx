export default function Footer(): JSX.Element {
  return <footer className="flex flex-row justify-between items-center mx-[160px]">
    <nav className="flex gap-8">
        <a href="/about" className="text-white font-bold">About</a>
        <a href="/brands" className="text-white font-bold">Brands</a>
        <a href="/community" className="text-white font-bold">Community</a>
    </nav>
    <ul className="text-[#5C5C5C] text-right text-[14px]">
          <li>9F, 509, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea<br/>
          Owner EUNHWAN HA | BR# 364-86-00795<br/>
          Copyright © 2019 MEMENT CO., LTD. All rights reserved.</li>
          <br/>
          <li>support@mement.net <a href="/community/view?read=10">가맹문의</a></li>
          <br/>
        </ul>
  </footer>;
}
