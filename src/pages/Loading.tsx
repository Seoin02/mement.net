import RootLayout from "@/components/Layout";
import { useState } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  return (
     isLoading ? (<div className="w-full h-full bg-black text-white flex justify-center items-center text-xl animate-fadeIn">Beauty X Tech</div>) : <RootLayout />
  )
}
