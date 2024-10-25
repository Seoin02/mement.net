import Counter from '@/components/Counter';
import VideoBox from '@/components/VideoBox';
import '@/styles/animation.css';
import { t } from 'i18next';

export default function BrandsPage() {
  return (
    <main className="bg-white w-screen h-100% flex flex-col gap-20">
      <VideoBox videoLink="https://mement.net/img/Video/Mement_main.mp4#t=16.5" firstTitle={t("BrandsPage.videoTitle1")} secondTitle={t("BrandsPage.videoTitle2")} />
      <section className="w-[75%] flex flex-col items-center gap-8 mx-auto">
      <h1 data-aos="fade-left" className="w-full text-left">{t("BrandsPage.Brands")}</h1>
      <p data-aos="fade-left" className="w-full text-left text-[20px] break-words leading-loose">
      {t("BrandsPage.description1")}
      </p>
    </section>
    <section data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-shine" className="flex flex-row justify-center items-center gap-8 mx-auto w-[70%] max-w-7xl">
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
        <h2 className='h-32 font-bold'>{t("BrandsPage.FranchiseClinicsInKorea")}</h2>
        <Counter goal={44} duration={3000} />
      </div>
      <div className="w-[620px] h-48 flex flex-col justify-center items-center">
          <h2 className="h-32 font-bold">{t("BrandsPage.OverseasCorporateOwnedStore")}</h2>
        <Counter goal={4} duration={1000} />
      </div>
    </section>
    <hr className="w-[80%] h-[1px] bg-black mx-auto max-w-7xl" />
      <section className="flex flex-col gap-12 justify-center items-center gap-8 mx-auto w-[75%]">
        <h1 data-aos="fade-left" className="w-full text-left">{t("BrandsPage.GeographicalCoverage")}</h1>
          <p data-aos="fade-left" className="w-full text-left text-[20px] break-words leading-loose">
      {t("BrandsPage.description2")}
          </p>
      </section>
      <section data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-shine" className='w-[75%] flex justify-left mx-auto'>
        <div className="flex items-center gap-8 w-[80%] ml-4">
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
      </div>
    </section>
    <img src="/image/map.png" alt="map" />
   </main>
  )
}