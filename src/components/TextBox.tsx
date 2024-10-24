import { PropsWithChildren } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

interface ITextBoxProps {
  title: string;
  description: string;
}

export default function TextBox({title, description, children}: PropsWithChildren<ITextBoxProps>) {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const translateX = useTransform(scrollYProgress, [0, 2], [80, 0]);
      
    return (
    <motion.div className="max-w-7xl min-w-[480px] flex flex-col items-center gap-8" style={{ opacity: opacity, x: translateX }}>
      <h1 className="w-full text-left animate-fade-in">{title}</h1>
      <p className="w-full text-left text-[20px] break-words leading-relaxed animate-textFade">{description}</p>
        {children}
    </motion.div>
  )
}