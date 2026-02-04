'use client'


import DashboardHeader from "../../component/Dashboard/DashboardHeader";
import DeshboardNavigation from "../../component/Dashboard/Deshboardnavigation";
import SpinLoader from "../../component/common/SpingLoader";
import useLogedUserStore from "../../stores/store/useLogedUser";
import useLoadingStore from "../../stores/useLoadingStore";
import usedeshboardsidebercontroller from "../../stores/usedeshboardsidebercontroller";


const Deshboardlayout = ({ children }) => {


    const { loginUser, setLoginUser } = useLogedUserStore();
    const { isSideberOpen, setisSideberOpen } = usedeshboardsidebercontroller();
    const { isLoading, setLoading } = useLoadingStore();


    return (
        <div className="h-fit text-black">
            <div className="">
                <div className={`fixed bg-white border-r border-gray-200 w-[250px] h-screen px-3 py-4 ${isSideberOpen ? "block lg:block" : "hidden lg:block"}`}>

                    <DeshboardNavigation loginUser={loginUser} />

                    <button onClick={() => { handlelogout() }} className="bg-red-600 text-white w-[90%] text-center py-2 rounded-md absolute bottom-6 left-3 cursor-pointer flex items-center justify-center gap-2">
                        {
                            isLoading && <SpinLoader />
                        }
                        Log out
                    </button>
                </div>
                <div>
                    <DashboardHeader />

                    <div className="px-6 w-full h-fit pt-6 pl-6 lg:pl-[270px] lg:pt-[84px] min-h-screen h-fit pb-6">
                        {children}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Deshboardlayout;