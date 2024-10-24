import CrmCircle from '@/components/CrmCircle';
import ImageBox from '@/components/ImageBox';
import VideoBox from '@/components/VideoBox';
import '@/styles/animation.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { t } from 'i18next';

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0, 2], [80, 0]);
    
  return (
    <main className="bg-white w-screen h-100% flex flex-col gap-20">
      <VideoBox videoLink="https://mement.net/img/Video/Mement_main.mp4" firstTitle={t("AboutPage.videoTitle1")} secondTitle={t("AboutPage.videoTitle2")}/>
      <motion.div className="max-w-7xl flex flex-col items-center gap-8 pl-[100px] pr-[100px]" style={{ opacity: opacity, x: translateX }}>
      <h1 className="w-full text-left animate-fade-in">{t("AboutPage.BeautyXTech")}</h1>
      <p className="w-full text-left text-[20px] break-words leading-loose animate-textFade">
      {t("AboutPage.description1")}
      </p>
    </motion.div>
      <div className="flex gap-20 max-w-7xl pl-[100px] pr-[100px]">
      <motion.div className="w-[480px] flex flex-col items-center gap-8" style={{ opacity: opacity, x: translateX }}>
      <h1 className="w-full text-left animate-fade-in">{t("AboutPage.Solutions")}</h1>
      <p className="w-full text-left text-[20px] break-words leading-loose animate-textFade">
      {t("AboutPage.description2")}
      </p>
    </motion.div>
        <CrmCircle />
      </div>
      <div className="section list" id="List">
    <div className="grid grid-cols-3 gap-12 pl-[160px] pr-[160px] pt-[80px] pb-[80px]">
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
