interface IVideoBoxProps {
  videoLink: string;
}

export default function VideoBox({videoLink}: IVideoBoxProps) {
  return (
    <section className="w-full">
    <video src={videoLink} autoPlay muted loop />
    <div className="overflow-hidden absolute top-0 left-0 w-[718px] h-full flex flex-col justify-center items-left pl-8">
    <p className="text-white text-left text-[64px] font-medium animate-fadeInLeft">
    Tech Company
    </p>
    <p className="text-white text-left text-[64px] font-medium animate-fadeInRight">
      running Beauty business
    </p>
    </div>
    </section>     
  )
}