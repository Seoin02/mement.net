import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-[100px] font-bold">404</h1>
            <p className="text-[24px]">Page not found</p>
            <Link to="/">
                <button className="px-[80px] py-[13px] mt-[29px] mx-auto bg-[#00A7FF] hover:bg-white hover:text-[#00A7FF] border-2 border-[#00A7FF] hover:border-[#00A7FF] rounded-sm text-white font-[18px] font-bold cursor-pointer">
                    Go to Home
                </button>
            </Link>
        </div>
    )
}