import VideoBox from '@/components/VideoBox';
import { t } from 'i18next';

export default function CommunityPage() {
 
  return (
    <main className="bg-white w-screen h-100% flex flex-col gap-20 pb-40 mobile:pb-0">
      <VideoBox videoLink="/mement.mp4#t=3" firstTitle="Mement" secondTitle={t("CommunityPage.videoTitle2")} />
      <section className="w-[75%] flex flex-col items-center gap-8 mx-auto mobile:w-[85%]">
      <h1 data-aos="fade-left" className="w-full text-left animate-fade-in">{t("CommunityPage.Community")}</h1>
      <p data-aos="fade-left" className="w-full text-left text-[20px] break-words animate-textFade leading-loose mobile:text-[15px] mobile:leading-normal">
      {t("CommunityPage.description")}
      </p>
    </section>
    <a href="/ask-branch" className="w-[75%] mx-auto text-black py-[35px] flex justify-between items-center px-8 border-b-2 border-t-2 border-gray-100 text-[23px] hover:text-[#00A7FF] hover:shadow-md mobile:mx-0 mobile:w-full"><p>{t("CommunityPage.AskBranch")}</p><p>ᐳ</p></a>
    </main>
  )
}