import Image from "next/image";
import Link from "next/link";
import HeaderAuth from "../../component/Dashboard/HeaderAuth";

const DashboardHeader = () => {

    return (
        <header className="bg-white border border-b border-gray-200 h-[75px] w-full  fixed dashboardheaderheader">
            <div className="flex items-center h-full w-full justify-between px-2 md:pl-2 md:pr-4 ">
                <div>
                    <Link href="/" className="flex items-center">
                        <Image
                            src="https://res.cloudinary.com/dg83pvgls/image/upload/v1769323337/logo_gf4wgo.png"
                            alt="SwitzerIT Logo"
                            width={100}
                            height={100}
                            className='h-10 w-auto'
                        />
                    </Link>
                </div>

                <HeaderAuth />
            </div>
        </header>
    )
}

export default DashboardHeader;