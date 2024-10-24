interface IImageBoxProps {
  title: string;
  description: string;
  image: string;
}

export default function ImageBox({title, description, image}: IImageBoxProps) {
  return (
    <div className="flex flex-row items-start gap-4 h-[140px]">
    <img src={image} width={156} height={140}/>
      <div className="flex flex-col gap-2 items-start">
    <p className="text-[20px] font-medium text-left text-[#00A7FF]">{title}</p>
    <p className="text-left word-break">{description}</p>
      </div>
    </div>
  )
}