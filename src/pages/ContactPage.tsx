import { t } from "i18next";
import { useEffect, useCallback } from "react";

export default function ContactPage() {
    const initMap = useCallback(() => {
    const google = window.google;
    if (!google) return;

    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement, 
      {
        center: { lat: 37.507839, lng: 127.058176 },
        zoom: 17,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
      }
    );

    const infowindow = new google.maps.InfoWindow({
      content: `
    <p style="font-weight: bold; font-size: 20px; text-align: left; vertical-align: middle; margin-bottom: 10px;">
      Mement Co. Ltd.<p>
    <p style="text-align: left; vertical-align: middle; font-size: 16px;">9F, 509, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea<p>
    `,
      ariaLabel: "Mement Co. Ltd."
    });
    
    const marker = new google.maps.Marker({
      position: { lat: 37.507839, lng: 127.058176 },
      map,
      title: "Mement Co. Ltd.",
    });
    
      infowindow.open({
        anchor: marker,
        map,
      });
  }, []);

  useEffect(() => {
    if (window.google) {
      initMap();
      return;
    }
    
    window.initMap = initMap;

    const script = document.createElement('script');
    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    script.async = true;
    script.onerror = () => console.error('Google Maps 로드 실패');
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, [initMap]);

  return (
    <main className="bg-white w-screen h-100% flex flex-col items-center pt-20 gap-28 mobile:gap-20">
      <section className="flex flex-row justify-between w-[75%] mobile:flex-col mobile:w-[85%] mobile:gap-4 tablet:flex-col">
        <h1 className="mobile:text-left mobile:text-[28px] tablet:text-left">{t("ContactPage.HeadQuarters")}</h1>
        <div className="flex flex-col items-start w-[50%] mobile:w-full tablet:text-left tabletPro:text-left">
          <h2 className="tabletPro:text-12">Mement Co. Ltd.</h2>
          <p className="mobile:text-left">9F, 509, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea</p>
          <br/>
          <a href="mailto:support@mement.net" className="text-[#00A7FF]">support@mement.net</a>
        </div>
      </section>
      <section className="flex flex-row justify-between w-[75%] mobile:flex-col mobile:w-[85%] mobile:gap-4 tablet:flex-col">
        <h1 className="mobile:text-left mobile:text-[28px] tablet:text-left">{t("ContactPage.Subsidiaries")}</h1>
        <div className="flex flex-col items-start w-[50%] mobile:w-full mobile:gap-4 tablet:w-full tablet:gap-4">
          <h2 className="text-left tabletPro:text-12 tabletPro:pb-4">Mement Hong Kong Limited</h2>
          <p className="text-left">Unit 609, 6/F, 700 Nathan Road, Mong Kok, Hong Kong</p>
          <br/>
          <h2 className="text-left tabletPro:text-12 tabletPro:pb-4">MEMENT Vietnam Company Limited</h2>
          <p className="text-left">73A, Nguyễn Thị Minh Khai, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh, Vietnam</p>
          <br/>
          <h2 className="text-left tabletPro:text-12 tabletPro:pb-4">MEMENT Beauty Shenzhen Co. Ltd</h2>
          <p className="text-left">Room A173, Block A01, Shanling Digits, No. 10 Chiwan One Avenue, Shekou, Nanshan District, Shenzhen City, Guangdong Province, P.R.C, China</p>
          <br/>
          <h2 className="text-left tabletPro:text-12 tabletPro:pb-4">MEMENT 株式会社</h2>
        </div>
      </section>
      <div id="map" className="w-full h-[500px]"></div> 
    </main>
  )
}