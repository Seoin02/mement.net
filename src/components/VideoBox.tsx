interface IVideoBoxProps {
  videoLink: string;
  firstTitle?: string;
  secondTitle?: string;
}

export default function VideoBox({videoLink, firstTitle, secondTitle}: IVideoBoxProps) {
  return (
    <section className="relative bg-gray-500 h-[960px] mobile:h-[537.8px] flex items-center">
        <video src={videoLink} autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0 mobile:h-[537.8px]" />
        <div className="overflow-hidden w-[740px] h-[162px] flex flex-col justify-center mobile:justify-center gap-4 items-left z-10 object-cover mx-auto mobile:ml-8 w-[75%]">
            <p className="text-white text-left text-[64px] font-medium animate-fadeInLeft whitespace-nowrap w-[55%] mobile:text-[22px] tablet:text-[54px]">
      {firstTitle || "Tech Company"}
            </p>
            <p className="text-white text-left text-[64px] font-medium animate-fadeInRight -mt-6 whitespace-nowrap w-[40%] mobile:text-[22px] tablet:text-[54px]">
      {secondTitle || "running Beauty business"}
            </p>
    </div>
    </section>     
  )
}