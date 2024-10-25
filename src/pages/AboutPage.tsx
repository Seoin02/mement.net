import CircleBackground from '@/components/CircleBackground';
import CrmCircle from '@/components/CrmCircle';
import ImageBox from '@/components/ImageBox';
import VideoBox from '@/components/VideoBox';
import '@/styles/animation.css';
import { t } from 'i18next';

export default function AboutPage() {
    
  return (
    <main className="bg-white w-screen h-100% flex flex-col gap-20">
      <VideoBox videoLink="https://mement.net/img/Video/Mement_main.mp4" firstTitle={t("AboutPage.videoTitle1")} secondTitle={t("AboutPage.videoTitle2")}/>
      <section className="w-[75%] flex flex-col items-center gap-8 mx-auto">
      <h1 data-aos="fade-left" className="w-full text-left">{t("AboutPage.BeautyXTech")}</h1>
      <p data-aos="fade-left" className="w-full text-left text-[20px] break-words leading-loose">
      {t("AboutPage.description1")}
      </p>
      </section>
      <section className="w-[75%] flex flex-row items-center mx-auto gap-8">
        <div className="w-[35%] flex flex-col items-center gap-8">
          <h1 data-aos="fade-left" className="w-full text-left">{t("AboutPage.Solutions")}</h1>
      <p data-aos="fade-left" className="w-full text-left text-[20px] break-words leading-loose animate-textFade">
      {t("AboutPage.description2")}
          </p>
        </div>
        <div className="w-[45%] h-[640px] mb-12 relative">
            <CircleBackground />
            <CrmCircle />
        </div>
      </section>
      <div className="section list" id="List">
    <div className="w-[75%] grid grid-cols-3 gap-12 mx-auto pt-[80px] pb-[80px]">
      <ImageBox title={t("AboutPage.cardTitle1")} description={t("AboutPage.cardDescription1")} image="/image/About/crm.png" />
      <ImageBox title={t("AboutPage.cardTitle2")} description={t("AboutPage.cardDescription2")} image="/image/About/web.png" />
      <ImageBox title={t("AboutPage.cardTitle3")} description={t("AboutPage.cardDescription3")} image="/image/About/app.png" />
      <ImageBox title={t("AboutPage.cardTitle4")} description={t("AboutPage.cardDescription4")} image="/image/About/hr.png" />
      <ImageBox title={t("AboutPage.cardTitle5")} description={t("AboutPage.cardDescription5")} image="/image/About/edu.png" />
      <ImageBox title={t("AboutPage.cardTitle6")} description={t("AboutPage.cardDescription6")} image="/image/About/messaging.png" />
      <ImageBox title={t("AboutPage.cardTitle7")} description={t("AboutPage.cardDescription7")} image="/image/About/report.png" />
      <ImageBox title={t("AboutPage.cardTitle8")} description={t("AboutPage.cardDescription8")} image="/image/About/display.png" />
      <ImageBox title={t("AboutPage.cardTitle9")} description={t("AboutPage.cardDescription9")} image="/image/About/appClinic.png" />
        </div>
      </div>
   </main>
  )
}
