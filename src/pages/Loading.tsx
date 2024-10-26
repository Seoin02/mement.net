import RootLayout from "@/components/Layout";
import { useState } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  return (
     isLoading ? (<div className="w-full h-full bg-black flex justify-center items-center animate-fadeIn"><img src="/image/beautyTech.png" alt="logo" className="w-60" /></div>) : <RootLayout />
  )
}
