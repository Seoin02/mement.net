import VideoBox from '@/components/VideoBox';
import '@/styles/animation.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CommunityPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0, 2], [80, 0]);
    
  return (
    <main className="bg-white w-screen h-100% flex flex-col gap-20 pb-40">
      <VideoBox videoLink="https://mement.net/img/Video/Mement_main.mp4" firstTitle="Mement" secondTitle="Community" />
      <motion.div className="max-w-7xl flex flex-col items-center gap-8 px-[100px]" style={{ opacity: opacity, x: translateX }}>
      <h1 className="w-full text-left animate-fade-in">Community</h1>
      <p className="w-full text-left text-[20px] break-words animate-textFade">
      Mement provides overall connected IT solutions. Based on market-leading IT technology, we have been working with the efficient clinic operation and growth of overseas coporate-owned clinics and franchise clinics in Korea. Check out Mement's updates in more details in the community.
      </p>
    </motion.div>
    <a href="/ask-branch" className="w-[80%] mx-auto text-black py-[35px] flex justify-between items-center max-w-7xl px-8 border-b-2 border-t-2 border-gray-100 text-[23px] hover:text-[#00A7FF] hover:shadow-md"><p>가맹문의</p><p>ᐳ</p></a>
    </main>
  )
}