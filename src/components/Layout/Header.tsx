import { useTranslation } from 'react-i18next';
import i18n from "@/translations"
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const { t } = useTranslation();
  const languageRef = useRef<HTMLDivElement>(null);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  function handleMenuClose(e: MouseEvent) {
    if(isLanguageMenuOpen && languageRef.current !== null && !languageRef.current.contains(e.target as Node)) {
    setIsLanguageMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleMenuClose);
    return () => {
      document.removeEventListener('click', handleMenuClose);
    }
  }, [handleMenuClose]);
  
  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language);
    setIsLanguageMenuOpen(false);
    window.location.reload();
  }

  return (
    <header className="flex flex-row justify-between items-center mx-auto w-[75%]">
        <a href="/">
            <img src="/image/Logos/MEMENT.png" alt="logo" className="w-24" />
        </a>
      <nav className="flex gap-8">
        <a href="/about" className="text-white font-bold hover:text-gray-400">About</a>
        <a href="/brands" className="text-white font-bold hover:text-gray-400">Brands</a>
        <a href="/community" className="text-white font-bold hover:text-gray-400">Community</a>
        <a href="/contact" className="text-white font-bold hover:text-gray-400">Contact Us</a>
        <div ref={languageRef} className="w-16 cursor-pointer relative text-white font-bold hover:text-gray-400 z-10" onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}>
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
    </header>
  )
}