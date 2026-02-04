'use client'

import useLoadingStore from "@/stores/useLoadingStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { LuUser } from "react-icons/lu";
import { MdDashboard, MdOutlineAccountCircle } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import usedeshboardsidebercontroller from "../../stores/usedeshboardsidebercontroller";



const HeaderAuth = () => {


    const router = useRouter();
    const { loginUser, setLoginUser } = useLoadingStore();

    const isSideberOpen = usedeshboardsidebercontroller(
        (state) => state.isSideberOpen
    );

    const setisSideberOpen = usedeshboardsidebercontroller(
        (state) => state.setisSideberOpen
    );


    const toggleSidebar = usedeshboardsidebercontroller(
        (state) => state.toggleSidebar
    );

    console.log(isSideberOpen);



    return (
        <div>

            <div className="flex items-center gap-1 h-full text-gray-500 relative  cursor-pointer">
                <div className="font-semibold text-md">MD Emon </div>
                <div className="group">
                    <MdOutlineAccountCircle className="text-4xl" />
                    <div className="flex flex-col hidden absolute top-[30px] right-1 lg:-right-0 shadow-xl  min-w-[220px] min-h-[120px] group-hover:block">
                        <div className="bg-transparent h-[15px]"> </div>
                        <div className="p-4 bg-white border border-gray-200 rounded-lg tooltipscostom">
                            <div className="flex flex-col gap-2">

                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <MdOutlineAccountCircle className="text-5xl" />
                                        <div className="flex flex-col gap-0">
                                            <div className="font-semibold text-sm">{"Md Emon Hossen"}</div>
                                            <span className="text-xs bg-green-100 border border-green-200 rounded-md w-fit h-fit px-1">{"Admin"}</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href={`${"Admin" === "Admin" ? "/deshboard/admin" : "/deshboard/customer/orders"}`} className="text-gray-600 text-md font-semibold hover:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                                    <MdDashboard className="text-xl" />
                                    <span>Deshboard</span>
                                </Link>

                                <Link href={`${loginUser === "Admin" ? "/deshboard/profile" : "/deshboard/profile"}`} className="text-gray-600 text-md font-semibold hover:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                                    <LuUser className="text-xl" />
                                    <span>Profile</span>
                                </Link>

                                <button className="text-gray-600 text-md font-semibold hover:bg-gray-200 rounded-md p-2 flex items-center gap-2 cursor-pointer">
                                    <TbLogout2 className="text-xl" />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {
                    isSideberOpen ? (
                        <ImCross onClick={toggleSidebar} className="block lg:hidden text-2xl ml-1 cursor-pointer hover:rotate-180 transition-all duration-300" />
                    ) : (
                        <FaBars onClick={toggleSidebar} className="block lg:hidden text-3xl ml-1 cursor-pointer" />
                    )
                }
            </div>

        </div>
    )
}

export default HeaderAuth;