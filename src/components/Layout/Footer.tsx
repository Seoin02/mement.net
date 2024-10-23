import { Link } from 'react-router-dom'

export default function Footer(): JSX.Element {
  return <footer className="flex flex-row justify-between items-center mr-[160px] ml-[160px]">
    <nav className="flex gap-8">
        <Link to="/about" className="text-white font-bold">About</Link>
        <Link to="/brands" className="text-white font-bold">Brands</Link>
        <Link to="/community" className="text-white font-bold">Community</Link>
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
