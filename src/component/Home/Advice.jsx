'use client'

import en from "@/content/advice/en.json";
import fr from "@/content/advice/fr.json";
import useLan from '@/stores/store/useLan';
import lanChooser from '@/utiliy/lanChooser';
import { motion } from 'framer-motion';
import { Calendar, Check } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {


    const { ln } = useLan();
    const currentlan = lanChooser(ln, fr, en);




    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto text-center px-3">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0,
                        ease: "easeOut"
                    }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-6">
                    {currentlan?.freeConsultation?.title}
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                    className="max-w-3xl text-2xl text-gray-500 font-medium mx-auto">
                    {currentlan?.freeConsultation?.subtitle}
                </motion.p>





                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.4,
                        ease: "easeOut"
                    }}
                    className="text-lg mt-2 max-w-3xl font-medium text-gray-400 mx-auto py-3 pb-4">
                    {currentlan?.freeConsultation?.description}
                </motion.p>

                {/* CTA Button */}
                <Link href={"/contact"} className="text-white bg-red-600 px-6 py-3.5 rounded-full font-semibold text-lg hover:bg-red-700 shadow-md flex w-fit items-center gap-3 mx-auto mb-8 transition-all duration-300 hover:scale-103">
                    <Calendar className="w-5 h-5" />
                    {currentlan?.freeConsultation?.cta?.label}
                </Link>

                {/* Features */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-black text-sm md:text-base">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                        className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-red-600" />
                        <span className="text-md font-medium text-gray-500"> {currentlan?.freeConsultation?.features?.[0]}</span>
                    </motion.div>
                    <div className="hidden sm:block text-black text-red-600">•</div>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.4,
                            ease: "easeOut"
                        }}
                        className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-red-600" />
                        <span className="text-md font-medium text-gray-500"> {currentlan?.freeConsultation?.features?.[1]}</span>
                    </motion.div>
                    <div className="hidden sm:block text-black text-red-600">•</div>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.6,
                            ease: "easeOut"
                        }}
                        className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-red-600" />
                        <span className="text-md font-medium text-gray-500"> {currentlan?.freeConsultation?.features?.[2]}</span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}