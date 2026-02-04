'use client'

import useLan from "@/stores/store/useLan";

const LanguessageShifter = () => {

    const { ln, setln } = useLan();

    return (
        <div className="flex items-center bg-red-200 rounded-full">
            <button
                onClick={() => { setln("fr") }} className={`h-[25px] w-[25px] md:h-[30px] md:w-[30px] text-sm md:text-md flex items-center justify-center p-1 text-md cursor-pointer transition-all duration-300 ease-in-out ${ln === "fr" && "bg-red-600 text-white rounded-full"}`}>Fr</button>
            <button
                onClick={() => { setln("en") }} className={`h-[25px] w-[25px] md:h-[30px] md:w-[30px] text-sm md:text-md flex items-center justify-center p-1 text-md cursor-pointer transition-all duration-300 ease-in-out ${ln === "en" && "bg-red-600 text-white rounded-full"}`}>En</button>
        </div>
    )
}

export default LanguessageShifter;