import timeToKoreaTime from "@/utils/timeToKoreaTime";
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
      <h1 className="text-left w-[75%] mx-auto">{t("AskBranchPage.AskBranch")}</h1>
      <section className="w-[75%] mx-auto py-14">
        <form id="askBranchForm" method="POST" onSubmit={handleSubmit} data-email="support@mement.net" className="gform" action="https://script.google.com/macros/s/AKfycbyGEpULCR_ME5wQkIyx8TQPQJhdVYUHezMAxu6NLZ56yDtoXi6HqPUvVpT1fEmc5WH4ew/exec">
            <div className="w-full flex flex-row justify-between gap-20">
            <div className="flex flex-col gap-8 w-1/2">
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">{t("AskBranchPage.name")}
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="text" placeholder={t("AskBranchPage.name")} name="이름" autoComplete="off" required/>
            </label>
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">{t("AskBranchPage.age")}
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="number" placeholder={t("AskBranchPage.age")} name="나이" autoComplete="off" required/>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">{t("AskBranchPage.phoneNumber")}
                    <input className="border-b-2 border-gray-300 p-2 w-2/3" type="tel" placeholder={t("AskBranchPage.phoneNumber")} name="전화번호" autoComplete="off" required/>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">{t("AskBranchPage.prefferedLocation")}
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="text" placeholder={t("AskBranchPage.prefferedLocation")} name="개원희망지역" autoComplete="off" required/>
            </label>             
            </div>
            <div className="flex flex-col justify-center gap-8 w-1/2">
            <label className="text-left text-[18px] font-bold flex flex-row justify-between">
                <p>{t("AskBranchPage.gender")}</p>
                <div className="flex flex-row gap-4 justify-start w-[2/3]">
                  <label className="flex flex-row gap-4 items-center whitespace-nowrap">
                  <input className="border-b-2 border-gray-300 p-2 pointer-cursor" type="radio" placeholder={t("AskBranchPage.male")} name="성별" value="male"/>
                  {t("AskBranchPage.male")}
                  </label>
                  <label className="flex flex-row gap-4 items-center whitespace-nowrap">
                  <input className="border-b-2 border-gray-300 p-2 w-2/3 pointer-cursor" type="radio" placeholder={t("AskBranchPage.female")} name="성별" value="female"/>
                  {t("AskBranchPage.female")}
                  </label>
                </div>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center pointer-cursor">
                {t("AskBranchPage.email")}
                <input className="border-b-2 border-gray-300 p-2 w-2/3" type="email" placeholder={t("AskBranchPage.email")} name="이메일" autoComplete="off" required/>
            </label> 
            <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center pointer-cursor ">
                {t("AskBranchPage.plannedOpeningDate")}
                <input className="border-b-2 border-gray-300 p-2 w-2/3 custom-date-input" type="date" data-placeholder={t("AskBranchPage.plannedOpeningDate")} name="개원 예정 일정" autoComplete="off" required/>
            </label>
            </div>
            </div>    
            <label className="text-left text-[18px] font-bold flex flex-row items-start mt-8 justify-between">
                {t("AskBranchPage.branchInquiryDetails")}
                <textarea className="border-b-2 border-gray-300 px-2 w-[84.5%] h-[120px]" placeholder={t("AskBranchPage.branchInquiryDetails")} name="문의내용" autoComplete="off"/>
          </label>
            <input type="hidden" name="문의일시" value={timeToKoreaTime(new Date())} />
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