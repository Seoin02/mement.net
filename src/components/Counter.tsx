import { useState, useEffect, useRef } from 'react';
import { t } from 'i18next';
interface CounterProps {
  goal: number;
  duration?: number;
}

export default function Counter({ goal = 0, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const observerRef = useRef(null);
  let startTime: number;
  let animationFrame: number;

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTime = performance.now();
            requestAnimationFrame(updateCount);
          }
        });
      },
      { threshold: 0.2 }
    );

    if(observerRef.current) {
      observer.observe(observerRef.current);
    }

    const updateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(goal * progress));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(goal);
        observer.disconnect();
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [goal, duration]);
  return (
    <div ref={observerRef} className="text-[100px] text-[#00A7FF]">
      {count}<span className="text-[48px]">{t('BrandsPage.unit')}</span>
    </div>
  );
}