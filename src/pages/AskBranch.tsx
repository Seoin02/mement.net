import { FormEvent, useState } from "react";

export default function AskBranch() {
const [isSubmitted, setIsSubmitted] = useState(false);
function handleSubmit(e: FormEvent<HTMLFormElement>) {
  setIsSubmitted(true);
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
}

  return (
    <main className="w-full h-full bg-white py-8">
      <h1 className="text-left px-4 w-[80%] mx-auto">Ask Branch</h1>
      <section className="w-[80%] mx-auto px-4 py-14">
        <form id="askBranchForm" method="POST" onSubmit={handleSubmit} data-email="a01036270286@gmail.com" className="gform" action="https://script.google.com/macros/s/AKfycbwRMPCnILCwh3xssvo4Em2wF7EnV0qDNBK9N7KWXimkhVjEGQkc1AB8Qyvn22SFO-Pd6Q/exec">
            <div className="w-full flex flex-row justify-between gap-20">
            <div className="flex flex-col gap-8 w-1/2">
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">name
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="text" placeholder="name" name="name" required/>
            </label>
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">age
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="number" placeholder="age" name="age" required/>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">phone number
                    <input className="border-b-2 border-gray-300 p-2 w-2/3" type="tel" placeholder="phone number" name="phone" required/>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">preffered location
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="text" placeholder="preffered location for clinic opening" name="location" required/>
            </label>             
            </div>
            <div className="flex flex-col justify-center gap-8 w-1/2">
            <label className="text-left text-[18px] font-bold flex flex-row gap-40 items-center">
                <p>gender</p>
                <div className="flex flex-row gap-4">
                <label className="flex flex-row gap-4">
                <input className="border-b-2 border-gray-300 p-2 w-2/3 pointer-cursor" type="radio" placeholder="male" name="gender" value="male"/>
                male
                </label>
                <label className="flex flex-row gap-4">
                <input className="border-b-2 border-gray-300 p-2 w-2/3 pointer-cursor" type="radio" placeholder="female" name="gender" value="female"/>
                female
                </label>
                </div>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">email
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="email" placeholder="email" name="email" required/>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">planned opening date
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="date" placeholder="planned opening date pointer-cursor" name="date" required/>
            </label> 
            </div>
            </div>    
            <label className="text-left text-[18px] font-bold flex flex-row items-start mt-8 gap-8">branch inquiry details
                <textarea className="border-b-2 border-gray-300 px-2 w-[84.5%] h-[120px]" placeholder="branch inquiry details" name="details"/>
            </label>
        </form>
        <hr className="w-[80%] mx-auto" />
        <button form="askBranchForm" type="submit" className="px-[80px] py-[13px] mt-[29px] mx-auto bg-[#00A7FF] hover:bg-white hover:text-[#00A7FF] border-2 border-[#00A7FF] hover:border-[#00A7FF] rounded-sm text-white font-[18px] font-bold cursor-pointer">문의하기</button>
        </section>
        {isSubmitted && <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-12 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Thank you for your inquiry!</h2>
            <p className="text-gray-600">We will get back to you soon.</p>
          </div>
        </div>}
    </main>
  );
}