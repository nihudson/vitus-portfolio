"use client"
import en from "@/content/header/en.json";
import fr from "@/content/header/fr.json";
import useLan from "@/stores/store/useLan";
import lanChooser from "@/utiliy/lanChooser";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LanguessageShifter from "./LanguessageShifter";

export default function Header() {

    const { ln } = useLan();
    const [isOpen, setIsOpen] = useState(false);
    const currentlan = lanChooser(ln, fr, en);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full bg-white shadow sticky top-0 z-50 aptos">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-4">
                <Link href="/" className="flex items-center">
                    <Image
                        src="https://res.cloudinary.com/dg83pvgls/image/upload/v1770027131/logo_qyncup.png"
                        alt="SwitzerIT Logo"
                        width={1000}
                        height={1000}
                        className='h-7 w-auto'
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-gray-500 font-semibold">
                    <Link href="/" className="hover:text-red-600 transition">{currentlan.nav1}</Link>
                    <Link href="/services" className="hover:text-red-600 transition">{currentlan.nav2}</Link>
                    <Link href="/about" className="hover:text-red-600 transition">{currentlan.nav3}</Link>
                    <Link href="/contact" className="hover:text-red-600 transition">{currentlan.nav4}</Link>
                </nav>


                <div className="flex items-center justify-end gap-4">

                    <div className="hidden md:block">
                        <LanguessageShifter />
                    </div>

                    <Link
                        href="/contact"
                        className="hidden md:inline-block bg-red-600 text-white font-medium px-5 py-2 rounded-full hover:bg-red-700 transition"
                    >
                        {currentlan.btn}
                    </Link>
                </div>


                <div className="flex md:hidden items-center justify-end gap-4">
                    <div className="">
                        <LanguessageShifter />
                    </div>
                    {/* Hamburger */}
                    <button
                        onClick={toggleMenu}
                        className=" text-gray-700 hover:text-red-600 transition cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu start from here */}
            <div
                className={`md:hidden absolute top-15 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col space-y-4 px-4 py-4 bg-gray-50 border-t border-gray-200">
                    <Link
                        href="/"
                        className="text-gray-500 font-semibold hover:text-red-600 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        {currentlan.nav1}
                    </Link>
                    <Link
                        href="/services"
                        className="text-gray-500 font-semibold hover:text-red-600 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        {currentlan.nav2}
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-500 font-semibold hover:text-red-600 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        {currentlan.nav3}
                    </Link>
                    <Link
                        href="/contact"
                        className="text-gray-500 font-semibold hover:text-red-600 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        {currentlan.nav4}
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-red-600 text-white px-5 py-2 hover:bg-red-700 transition text-center font-medium rounded-md"
                        onClick={() => setIsOpen(false)}
                    >
                        {currentlan.btn}
                    </Link>
                </nav>
            </div>
        </header>
    );
}