import DatePickerInput from "@/components/DatePickerInput";
import { t } from "i18next";
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
      <h1 className="text-left px-4 w-[80%] mx-auto">{t("AskBranchPage.AskBranch")}</h1>
      <section className="w-[80%] mx-auto px-4 py-14">
        <form id="askBranchForm" method="POST" onSubmit={handleSubmit} data-email="a01036270286@gmail.com" className="gform" action="https://script.google.com/macros/s/AKfycbwRMPCnILCwh3xssvo4Em2wF7EnV0qDNBK9N7KWXimkhVjEGQkc1AB8Qyvn22SFO-Pd6Q/exec">
            <div className="w-full flex flex-row justify-between gap-20">
            <div className="flex flex-col gap-8 w-1/2">
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">{t("AskBranchPage.name")}
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="text" placeholder={t("AskBranchPage.name")} name="name" autoComplete="off" required/>
            </label>
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">{t("AskBranchPage.age")}
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="number" placeholder={t("AskBranchPage.age")} name="age" autoComplete="off" required/>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">{t("AskBranchPage.phoneNumber")}
                    <input className="border-b-2 border-gray-300 p-2 w-2/3" type="tel" placeholder={t("AskBranchPage.phoneNumber")} name="phone" autoComplete="off" required/>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">{t("AskBranchPage.prefferedLocation")}
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="text" placeholder={t("AskBranchPage.prefferedLocation")} name="location" autoComplete="off" required/>
            </label>             
            </div>
            <div className="flex flex-col justify-center gap-8 w-1/2">
            <label className="text-left text-[18px] font-bold flex flex-row justify-between">
                <p>{t("AskBranchPage.gender")}</p>
                <div className="flex flex-row gap-4 justify-start w-[2/3]">
                  <label className="flex flex-row gap-4 items-center whitespace-nowrap">
                  <input className="border-b-2 border-gray-300 p-2 pointer-cursor" type="radio" placeholder={t("AskBranchPage.male")} name="gender" value="male"/>
                  {t("AskBranchPage.male")}
                  </label>
                  <label className="flex flex-row gap-4 items-center whitespace-nowrap">
                  <input className="border-b-2 border-gray-300 p-2 w-2/3 pointer-cursor" type="radio" placeholder={t("AskBranchPage.female")} name="gender" value="female"/>
                  {t("AskBranchPage.female")}
                  </label>
                </div>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center pointer-cursor">
                {t("AskBranchPage.email")}
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="email" placeholder={t("AskBranchPage.email")} name="email" autoComplete="off" required/>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center pointer-cursor ">
                {t("AskBranchPage.plannedOpeningDate")}
                {/* <DatePickerInput /> */}
                <input className="border-b-2 border-gray-300 p-2 w-2/3 custom-date-input" type="date" data-placeholder={t("AskBranchPage.plannedOpeningDate")} name="date" autoComplete="off" required/>
            </label> 
            </div>
            </div>    
            <label className="text-left text-[18px] font-bold flex flex-row items-start mt-8 justify-between">
                {t("AskBranchPage.branchInquiryDetails")}
                <textarea className="border-b-2 border-gray-300 px-2 w-[84.5%] h-[120px]" placeholder={t("AskBranchPage.branchInquiryDetails")} name="details" autoComplete="off"/>
            </label>
        </form>
        <button form="askBranchForm" type="submit" className="px-[80px] py-[13px] mt-[29px] mx-auto bg-[#00A7FF] hover:bg-white hover:text-[#00A7FF] border-2 border-[#00A7FF] hover:border-[#00A7FF] rounded-sm text-white font-[18px] font-bold cursor-pointer">{t("AskBranchPage.Send")}</button>
        </section>
        {isSubmitted && <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-12 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{t("AskBranchPage.thankYou")}</h2>
            <p className="text-gray-600">{t("AskBranchPage.weWillGetBackToYouSoon")}</p>
          </div>
        </div>}
    </main>
  );
}