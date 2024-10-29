import { t } from "i18next";

export default function Footer(): JSX.Element {
  return <footer className="flex flex-row justify-between items-center mx-auto w-[75%] mobile:ml-8">
    <nav className="flex gap-8 mobile:hidden">
        <a href="/about" className="text-white font-bold">About</a>
        <a href="/brands" className="text-white font-bold">Brands</a>
        <a href="/community" className="text-white font-bold">Community</a>
    </nav>
    <ul className="text-[#5C5C5C] text-right text-[14px] mobile:text-left mobile:text-[12px] tablet:text-[10px]">
          <li className="pt-8 mobile:pt-4 tablet:pt-4">9F, 509, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea<br/>
          Owner EUNHWAN HA | BR# 364-86-00795<br/>
          Copyright © 2019 MEMENT CO., LTD. All rights reserved.</li>
          <br/>
          <li>support@mement.net <a href="/community/view?read=10">{t("Footer.AskUs")}</a></li>
          <br/>
        </ul>
  </footer>;
}
