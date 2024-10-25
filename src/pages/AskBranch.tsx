import timeToKoreaTime from "@/utils/timeToKoreaTime";
import { t } from "i18next";
import { FormEvent, useState } from "react";

export default function AskBranch() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    const form = e.currentTarget;
    const formData = new FormData(form);

    const order = [
      "이름",
      "성별",
      "나이",
      "이메일",
      "전화번호",
      "문의내용",
      "개원희망지역",
      "개원 예정 일정",
      "문의일시"
    ];

    const orderedData: { [key: string]: string[] } = {};
    order.forEach((key) => {
      if (formData.has(key)) {
        orderedData[key] = formData.getAll(key) as string[];
      }
    });

    formData.forEach((value, key) => {
      if (!orderedData.hasOwnProperty(key)) {
        if (!orderedData[key]) {
          orderedData[key] = [];
        }
        orderedData[key].push(value as string);
      }
    });

    console.log('Ordered Form Data:', orderedData);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx5W-7-cPmUqoQ2Gy_yvzPXX8_mL3JIcTUCnEnve9XXpw5KVPVfmxi_caAF1E71xDhlUg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: JSON.stringify(orderedData), honeypot: "value_if_any" }),
      });

      const result = await response.json();
      console.log('Email 전송 결과:', result);

      if (result.result === "success") {
        setIsSubmitted(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        alert("문의 전송에 실패하였습니다.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("문의 전송 중 오류가 발생하였습니다.");
    }
  }

  return (
    <main className="w-full h-full bg-white py-8">
      <h1 className="text-left w-[75%] mx-auto">{t("AskBranchPage.AskBranch")}</h1>
      <section className="w-[75%] mx-auto py-14">
        <form
          id="askBranchForm"
          method="POST"
          onSubmit={handleSubmit}
          data-email="a01036270286@gmail.com"
          className="gform"
          action="https://script.google.com/macros/s/AKfycbx5W-7-cPmUqoQ2Gy_yvzPXX8_mL3JIcTUCnEnve9XXpw5KVPVfmxi_caAF1E71xDhlUg/exec"
        >
          <div className="w-full flex flex-row justify-between gap-20">
            <div className="flex flex-col gap-8 w-1/2">
              <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">
                {t("AskBranchPage.name")}
                <input
                  className="border-b-2 border-gray-300 p-2 w-2/3"
                  type="text"
                  placeholder={t("AskBranchPage.name")}
                  name="이름"
                  key="이름"
                  autoComplete="off"
                  required
                />
              </label>
              <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">
                {t("AskBranchPage.age")}
                <input
                  className="border-b-2 border-gray-300 p-2 w-2/3"
                  type="number"
                  placeholder={t("AskBranchPage.age")}
                  name="나이"
                  key="나이"
                  autoComplete="off"
                  required
                />
              </label>
              <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">
                {t("AskBranchPage.phoneNumber")}
                <input
                  className="border-b-2 border-gray-300 p-2 w-2/3"
                  type="tel"
                  placeholder={t("AskBranchPage.phoneNumber")}
                  name="전화번호"
                  key="전화번호"
                  autoComplete="off"
                  required
                />
              </label>
              <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center">
                {t("AskBranchPage.prefferedLocation")}
                <input
                  className="border-b-2 border-gray-300 p-2 w-2/3"
                  type="text"
                  placeholder={t("AskBranchPage.prefferedLocation")}
                  name="개원희망지역"
                  key="개원희망지역"
                  autoComplete="off"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col justify-center gap-8 w-1/2">
              <label className="text-left text-[18px] font-bold flex flex-row justify-between">
                <p>{t("AskBranchPage.gender")}</p>
                <div className="flex flex-row gap-4 justify-start w-[2/3]">
                  <label className="flex flex-row gap-4 items-center whitespace-nowrap">
                    <input
                      className="border-b-2 border-gray-300 p-2 pointer-cursor"
                      type="radio"
                      name="성별"
                      value="남"
                      key="성별"
                      required
                    />
                    {t("AskBranchPage.male")}
                  </label>
                  <label className="flex flex-row gap-4 items-center whitespace-nowrap">
                    <input
                      className="border-b-2 border-gray-300 p-2 w-2/3 pointer-cursor"
                      type="radio"
                      name="성별"
                      value="여"
                      key="성별"
                      required
                    />
                    {t("AskBranchPage.female")}
                  </label>
                </div>
              </label>
              <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center pointer-cursor">
                {t("AskBranchPage.email")}
                <input
                  className="border-b-2 border-gray-300 p-2 w-2/3"
                  type="email"
                  placeholder={t("AskBranchPage.email")}
                  name="이메일"
                  autoComplete="off"
                  key="이메일"
                  required
                />
              </label>
              <label className="text-left text-[18px] font-bold flex flex-row justify-between gap-4 items-center pointer-cursor ">
                {t("AskBranchPage.plannedOpeningDate")}
                <input
                  className="border-b-2 border-gray-300 p-2 w-2/3 custom-date-input"
                  type="date"
                  data-placeholder={t("AskBranchPage.plannedOpeningDate")}
                  name="개원 예정 일정"
                  key="개원 예정 일정"
                  autoComplete="off"
                  required
                />
              </label>
            </div>
          </div>
          <label className="text-left text-[18px] font-bold flex flex-row items-start mt-8 justify-between">
            {t("AskBranchPage.branchInquiryDetails")}
            <textarea
              className="border-b-2 border-gray-300 px-2 w-[84.5%] h-[120px]"
              placeholder={t("AskBranchPage.branchInquiryDetails")}
              name="문의내용"
              key="문의내용"
              autoComplete="off"
            />
          </label>
          <input type="hidden" name="문의일시" value={timeToKoreaTime(new Date())} />
          <button
            type="submit"
            form="askBranchForm"
            className="px-[80px] py-[13px] mt-[29px] mx-auto bg-[#00A7FF] hover:bg-white hover:text-[#00A7FF] border-2 border-[#00A7FF] hover:border-[#00A7FF] rounded-sm text-white font-[18px] font-bold cursor-pointer"
          >
            {t("AskBranchPage.Send")}
          </button>
        </form>
      </section>
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-12 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{t("AskBranchPage.thankYou")}</h2>
            <p className="text-gray-600">{t("AskBranchPage.weWillGetBackToYouSoon")}</p>
          </div>
        </div>
      )}
    </main>
  );
}
