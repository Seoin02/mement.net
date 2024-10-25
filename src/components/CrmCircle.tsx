import { useEffect, useRef } from 'react';
import '@/styles/about.css';

export default function CrmCircle() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            circleRef.current?.classList.add('Active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="circle" ref={circleRef}>
      <div className="center">CRM</div>
      
      {/* 첫 번째 원 아이템들 */}
      <div className="sort1 s1_1">Web</div>
      <div className="sort1 s1_2">App</div>
      <div className="sort1 s1_3">Edu.</div>
      <div className="sort1 s1_4">HR<span>Solutions</span></div>
      
      {/* 두 번째 원 아이템들 */}
      <div className="sort2 s2_1">Chat<br/>Bot</div>
      <div className="sort2 s2_2">Analytics</div>
      
      {/* 세 번째 원 아이템들 */}
      <div className="sort3 s3_1"><span>ML</span>Recommendation</div>
      <div className="sort3 s3_2"><span>Realtime</span>Report</div>
      <div className="sort3 s3_3">Messaging</div>
      <div className="sort3 s3_4">Display<br/>Control</div>
      <div className="sort3 s3_5">IoT</div>
      <div className="sort3 s3_6"><span>ML</span>NLP</div>
      
      {/* 네 번째 원 아이템들 */}
      <div className="sort4 s4_1">Analytics</div>
      <div className="sort4 s4_2">Big Data</div>
      <div className="sort4 s4_3">Marketing</div>
    </div>
  );
};