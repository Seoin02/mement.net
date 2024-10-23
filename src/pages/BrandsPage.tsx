import CrmCircle from '@/components/CrmCircle';
import ImageBox from '@/components/ImageBox';
import VideoBox from '@/components/VideoBox';
import '@/styles/animation.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BrandsPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0, 2], [80, 0]);
    
  return (
    <main className="bg-white w-screen h-100% flex flex-col gap-20">
      <VideoBox videoLink="https://mement.net/img/Video/Mement_main.mp4" firstTitle="Global" secondTitle="Beauty Brand" />
      <motion.div className="max-w-7xl flex flex-col items-center gap-8 px-[100px]" style={{ opacity: opacity, x: translateX }}>
      <h1 className="w-full text-left animate-fade-in">Brands</h1>
      <p className="w-full text-left text-[20px] break-words animate-textFade">
      Mement Co., Ltd owns aesthetic clinic brands, including 'Muse Clinic', 'Shine Beam', 'Skin and Beam' and a dental clinic, 'Coconut'. We conduct business with the MSO (Medical Service Operation) model and provide hospital operation related consulting services, including IT solutions to our clinics in Korea. We grow and develop through directly owned and managed beauty centres in Hong Kong and Vietnam to becoming an international beauty brand. Furthermore, we are currently selling our own-brand beauty products 'I'M MUSE' and 'What's M' domestically and expanding into the overseas market, such as China.
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
      <div className="w-[620px] h-40 flex flex-col justify-center items-center gap-16">
        <h1>Franchise Clinics in Korea</h1>
        <p className="text-[100px] text-[#00A7FF]">1</p>
      </div>
      <div className="w-[620px] h-40 flex flex-col justify-center items-center">
        <h1>Overseas corporate-owned store</h1>
        <p className="text-[100px] text-[#00A7FF]">1</p>
      </div>
    </section>
    <hr className="w-[80%] h-[1px] bg-black mx-auto max-w-7xl" />
      <motion.div className="max-w-7xl flex flex-col items-center gap-8 px-[100px]" style={{ opacity: opacity, x: translateX }}>
        <h1 className="w-full text-left animate-fade-in mx-auto">Geographical Coverage</h1>
          <p className="w-full text-left text-[20px] break-words animate-textFade">
      We have 44 franchised clinics nationwide in Korea, including 'Muse Clinic' and 'Shine Beam'. In addition, we have 4 directly-operated clinics overseas, which include 3 branches in Hong Kong, located in Mong Kok, Causeway Bay, Tsim Sha Tsui and 1 branch in Vietnam, located in Ho Chi Minh City.
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