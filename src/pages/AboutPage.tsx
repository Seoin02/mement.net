import CrmCircle from '@/components/CrmCircle';
import ImageBox from '@/components/ImageBox';
import VideoBox from '@/components/VideoBox';
import '@/styles/animation.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0, 2], [80, 0]);
    
  return (
    <main className="bg-white w-screen h-100% flex flex-col gap-20">
      <VideoBox videoLink="https://mement.net/img/Video/Mement_main.mp4" />
      <motion.div className="max-w-7xl flex flex-col items-center gap-8 pl-[100px] pr-[100px]" style={{ opacity: opacity, x: translateX }}>
      <h1 className="w-full text-left animate-fade-in">Beauty X Tech</h1>
      <p className="w-full text-left text-[20px] break-words animate-textFade">
      Mement Co., Ltd is an innovative beauty-tech company headquartered in South Korea. We are able to manage and provide medical beauty services and beauty product sales around the globe, such as Hong Kong and Vietnam market. We collect wide range of customer data with our own IT solution and connect these data to big tech company platforms, such as Google, Amazon, Facebook, Apple, etc. to operate beauty businesses with a tailored customer environment. Mement Co., Ltd ventures beyond the traditional beauty service providers and sustainably expanding its growing business with our advancing information technology system and embracing the latest emerging technologies together from big tech companies.
      </p>
    </motion.div>
      <div className="flex gap-20 max-w-7xl pl-[100px] pr-[100px]">
      <motion.div className="w-[480px] flex flex-col items-center gap-8" style={{ opacity: opacity, x: translateX }}>
      <h1 className="w-full text-left animate-fade-in">Solutions</h1>
      <p className="w-full text-left text-[20px] break-words animate-textFade">
      Connected solutions through Customer Relationship Management (CRM) generate wide range of data, including user activities. E-commerce based websites and integrated iOS / Android applications provide a tailored environment from wide rage of customer data and deliver best beauty services experience to users. Connected solutions of IT based medical staff training, human resources management, IoT and messaging services, etc. result an automation in each work flow to achieve efficient business operations.
      </p>
    </motion.div>
        <CrmCircle />
      </div>
      <div className="section list" id="List">
    <div className="grid grid-cols-3 gap-12 pl-[160px] pr-[160px] pt-[80px] pb-[80px]">
      <ImageBox title="CRM" description="Electronic Medical Record" image="/image/About/crm.png" />
      <ImageBox title="Web" description="E-commerce based Web" image="/image/About/web.png" />
      <ImageBox title="App" description="Tailor-made product recommendations based on user activity data" image="/image/About/app.png" />
      <ImageBox title="HR Solution" description="IT Solution for Human Resource Management" image="/image/About/hr.png" />
      <ImageBox title="Edu." description="Contents Security / Assessment" image="/image/About/edu.png" />
      <ImageBox title="Messaging" description="Data Encryption" image="/image/About/messaging.png" />
      <ImageBox title="Realtime Report" description="Data Visualization" image="/image/About/report.png" />
      <ImageBox title="Display Control" description="Single-Board Computer Display Content Management" image="/image/About/display.png" />
      <ImageBox title="App for clinic" description="Android Camera / iOS Self Check-in / Digital Consent" image="/image/About/appClinic.png" />
        </div>
      </div>
   </main>
  )
}
