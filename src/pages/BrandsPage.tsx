import VideoBox from '@/components/VideoBox';
import '@/styles/animation.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { t } from 'i18next';

export default function BrandsPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0, 2], [80, 0]);
    
  return (
    <main className="bg-white w-screen h-100% flex flex-col gap-20">
      <VideoBox videoLink="https://mement.net/img/Video/Mement_main.mp4" firstTitle={t("BrandsPage.videoTitle1")} secondTitle={t("BrandsPage.videoTitle2")} />
      <motion.div className="max-w-7xl flex flex-col items-center gap-8 px-[100px]" style={{ opacity: opacity, x: translateX }}>
      <h1 className="w-full text-left animate-fade-in">{t("BrandsPage.Brands")}</h1>
      <p className="w-full text-left text-[20px] break-words animate-textFade leading-loose">
      {t("BrandsPage.description1")}
      </p>
    </motion.div>
    <section className="flex flex-row justify-center items-center gap-8 mx-auto w-[70%] max-w-7xl">
      <div>
      <img src="/image/Logos/muse.png" alt="muse logo" />
      </div>
      <div>
      <img src="/image/Logos/shineBeam.png" alt="shineBeam logo" />  
      </div>
      <div>
      <img src="/image/Logos/skin&beam.png" alt="skin&beam logo" />
      </div>
      <div>
      <img src="/image/Logos/coconut.png" alt="coconut logo" />
      </div>
      <div>
      <img src="/image/Logos/imMuse.png" alt="imMuse logo" />
      </div>
      <div>
      <img src="/image/Logos/whatsM.png" alt="whatsM logo" />
      </div>
    </section>
    <hr className="w-[80%] h-[1px] bg-black mx-auto max-w-7xl" />
    <section className="flex flex-row gap-12 justify-center items-center gap-8 mx-auto w-[80%]">
      <div className="w-[620px] h-48 flex flex-col justify-center items-center">
        <h2 className='h-32'>{t("BrandsPage.FranchiseClinicsInKorea")}</h2>
        <p className="text-[100px] text-[#00A7FF]">1</p>
      </div>
      <div className="w-[620px] h-48 flex flex-col justify-center items-center">
          <h2 className="h-32">{t("BrandsPage.OverseasCorporateOwnedStore")}</h2>
        <p className="text-[100px] text-[#00A7FF]">1</p>
      </div>
    </section>
    <hr className="w-[80%] h-[1px] bg-black mx-auto max-w-7xl" />
      <motion.div className="max-w-7xl flex flex-col items-center gap-8 px-[100px]" style={{ opacity: opacity, x: translateX }}>
        <h1 className="w-full text-left animate-fade-in mx-auto">{t("BrandsPage.GeographicalCoverage")}</h1>
          <p className="w-full text-left text-[20px] break-words animate-textFade leading-loose">
      {t("BrandsPage.description2")}
          </p>
      </motion.div>
      <section className="max-w-7xl flex items-center gap-8 px-[140px] w-[75%]">
      <div className="flex flex-row items-center gap-2">
        <div className="w-4 h-2 bg-[#00A7FF] rounded-full"/>
        <div>
        <img src="/image/Logos/muse.png" alt="muse logo" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="w-4 h-2 bg-[#FF0000] rounded-full"/>
        <div>
      <img src="/image/Logos/shineBeam.png" alt="shineBeam logo" />  
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="w-4 h-2 bg-[#1DBF00] rounded-full"/>
        <div>
      <img src="/image/Logos/skin&beam.png" alt="skin&beam logo" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="w-4 h-2 bg-[#F967FF] rounded-full"/>
        <div>
      <img src="/image/Logos/coconut.png" alt="coconut logo" />
        </div>
      </div>
    </section>
    <img src="/image/map.png" alt="map" />
   </main>
  )
}