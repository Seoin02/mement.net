import { useTranslation } from 'react-i18next';
import i18n from "@/locales"
import { MouseEventHandler, useEffect, useRef, useState } from 'react';

export default function Header() {
  const { t } = useTranslation();
  const languageRef = useRef<HTMLDivElement>(null);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  function handleLanguageMenuOpen(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation;
    if (!isLanguageMenuOpen && languageRef.current !== null) {
      setIsLanguageMenuOpen(prev => !prev);
    }
  }

  function handleSideMenuOpen(e: React.MouseEvent<HTMLButtonElement>) {
    setIsSideMenuOpen(prev => !prev);
  }
  
  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language);
    setIsLanguageMenuOpen(false);
    window.location.reload();
  }

  return (
    <header className="flex flex-row justify-between items-center mx-auto w-[75%] mobile:mx-0 mobile:px-8 mobile:w-full tablet:w-[75%]">
        <a href="/">
            <img src="/image/Logos/MEMENT.png" alt="logo" className="w-24" />
        </a>
      <nav className="flex gap-8 mobile:hidden tablet:flex">
        <a href="/about" className="text-white font-bold hover:text-gray-400">About</a>
        <a href="/brands" className="text-white font-bold hover:text-gray-400">Brands</a>
        <a href="/community" className="text-white font-bold hover:text-gray-400">Community</a>
        <a href="/contact" className="text-white font-bold hover:text-gray-400">Contact Us</a>
        <div ref={languageRef} className="w-16 cursor-pointer relative text-white font-bold hover:text-gray-400 z-10" onClick={handleLanguageMenuOpen}>
          <div className="flex flex-row gap-2 items-center">
            <img src="/image/lang.svg" alt="language change" className="w-4" /> {t("Header.Language")}
          </div>
          {isLanguageMenuOpen && (
            <div className="absolute -top-1 -left-1 w-16 h-12 bg-black">
              <div className={`${i18n.language === "ko" ? "text-white" : "text-gray-400"} bg-black px-2 py-1 cursor-pointer w-16 whitespace-nowrap`} onClick={() => handleChangeLanguage("ko")}>✓ KOR</div>
              <div className={`${i18n.language === "en" ? "text-white" : "text-gray-400"} bg-black px-2 py-1 cursor-pointer w-16 whitespace-nowrap`} onClick={() => handleChangeLanguage("en")}>✓ ENG</div>
              <div className={`${i18n.language === "ja" ? "text-white" : "text-gray-400"} bg-black px-2 py-1 cursor-pointer w-16 whitespace-nowrap`} onClick={() => handleChangeLanguage("ja")}>✓ JPN</div>
            </div>
          )}
        </div>
      </nav>
      <nav className='mobile:flex tablet:hidden desktop:hidden'>
        <button onClick={handleSideMenuOpen}>
          <img src="/image/menu.png" alt="menu" className="w-7" />
          {isSideMenuOpen && (
            <ul className="absolute top-0 left-0 w-full min-h-screen bg-black flex flex-col items-center justify-center gap-10 z-20" onClick={(e) => e.stopPropagation()}>
              <button onClick={handleSideMenuOpen}>
                <img src="/image/close.png" alt="close" className="w-7 absolute top-8 right-8 z-21" />
              </button>
              <a href="/about" className="text-white bg-black px-2 py-1 text-[28px] font-bold cursor-pointer w-full whitespace-nowrap opacity-0 [animation-fill-mode:forwards] animate-fadeIn">About</a>
              <a href="/brands" className="text-white bg-black px-2 py-1 text-[28px] font-bold cursor-pointer w-full whitespace-nowrap opacity-0 [animation-fill-mode:forwards] animate-fade-in-1">Brands</a>
              <a href="/community" className="text-white bg-black px-2 py-1 text-[28px] font-bold cursor-pointer w-full whitespace-nowrap opacity-0 [animation-fill-mode:forwards] animate-fade-in-2">Community</a>
              <a href="/contact" className="text-white bg-black px-2 py-1 text-[28px] font-bold cursor-pointer w-full whitespace-nowrap opacity-0 [animation-fill-mode:forwards] animate-fade-in-3">Contact Us</a>
              <div ref={languageRef} className="w-16 cursor-pointer relative text-white font-bold hover:text-gray-400 z-10 flex items-center justify-center opacity-0 [animation-fill-mode:forwards] animate-fade-in-4" onClick={handleLanguageMenuOpen}>
                <div className="relative flex flex-row gap-2 text-[28px] font-bold">
                  <img src="/image/lang.svg" alt="language change" className="w-8" />
                  <p className="w-20">{t("Header.Language")}</p>
                </div>
                {isLanguageMenuOpen && (
                  <div className="absolute top-full -left-1 w-20 h-12 bg-black">
                    <div className={`${i18n.language === "ko" ? "text-white" : "text-gray-400"} bg-black px-2 py-1 cursor-pointer w-20 whitespace-nowrap`} onClick={() => handleChangeLanguage("ko")}>✓ KOR</div>
                    <div className={`${i18n.language === "en" ? "text-white" : "text-gray-400"} bg-black px-2 py-1 cursor-pointer w-20 whitespace-nowrap`} onClick={() => handleChangeLanguage("en")}>✓ ENG</div>
                    <div className={`${i18n.language === "ja" ? "text-white" : "text-gray-400"} bg-black px-2 py-1 cursor-pointer w-20 whitespace-nowrap`} onClick={() => handleChangeLanguage("ja")}>✓ JPN</div>
                  </div>
                )}
              </div>
            </ul>
          )}
        </button>
      </nav>
    </header>
  )
}