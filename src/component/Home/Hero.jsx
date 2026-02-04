'use client'

import en from "@/content/hero/en.json";
import fr from "@/content/hero/fr.json";
import useLan from "@/stores/store/useLan";
import lanChooser from "@/utiliy/lanChooser";
import { motion } from "framer-motion";

import Link from "next/link";
export default function Hero() {

    const { ln } = useLan();
    const currentLan = lanChooser(ln, fr, en);



    return (
        <section className="h-[95vh] relative w-full md:h-[85vh] bg-cover bg-center object-top flex items-center heroBG">

            <div className="absolute inset-0 bg-black opacity-0"></div>

            {/* Content */}
            <div className="relative z-10 h-full w-full max-w-7xl mx-auto flex flex-col justify-center items-start px-3 text-white text-center lg:text-left aptos">
                <motion.h1
                    initial={{ opacity: 0, x: -45 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0,
                        ease: "easeOut"
                    }}
                    className="text-4xl md:text-6xl w-full lg:w-3/4 font-semibold mb-4">
                    {currentLan.titleOne} <br /> {currentLan.titleTwo}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -45 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                    className="py-1 pt-3 text-lg md:text-3xl w-full lg:w-3/4 text-gray-200 font-medium mb-6">
                    {currentLan.subtitle}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -45 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                    className="text-sm md:text-lg font-normal w-full lg:w-5/6 text-gray-200">
                    {currentLan.description1}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -45 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                    className="text-sm md:text-lg font-normal w-full lg:w-5/6 text-gray-200 mb-8">
                    {currentLan.description2}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.3,
                        ease: "easeOut"
                    }}
                    className="w-full flex flex-col md:flex-row justify-center items-center lg:justify-start md:space-x-4 space-y-3 md:space-y-0">
                    <Link href="/services" className="w-full md:w-auto text-center bg-white text-gray-900 text-lg px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-103">
                        {currentLan.button1}
                    </Link>

                    <Link href="/contact" className="w-full md:w-auto text-center bg-red-600 text-white px-6 text-lg py-2.5 rounded-full font-medium hover:bg-red-700 transition-all duration-300 hover:scale-103">
                        {currentLan.button2}
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}