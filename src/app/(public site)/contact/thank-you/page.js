'use client';

import useLan from '@/stores/store/useLan';
import lanChooser from '@/utiliy/lanChooser';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Script from "next/script";
import en from "../../../../content/thank-you/en.json";
import fr from "../../../../content/thank-you/fr.json";



export default function ThankYouPage() {




    const { ln } = useLan();
    const currentlan = lanChooser(ln, fr, en);






    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 15,
                duration: 0.8,
            },
        },
    };

    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className="min-h-[80vh] bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <Script id="google-ads-conversion" strategy="afterInteractive">
                {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17945744221/NvkjCJycgf4bEN2mme1C',
            'value': 1.0,
            'currency': 'EUR'
          });
        `}
            </Script>
            <motion.div
                className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Success Icon */}
                <motion.div
                    className="flex justify-center mb-6"
                    variants={iconVariants}
                >
                    <div className="relative">
                        <motion.div
                            className="absolute inset-0 bg-red-400 rounded-full blur-xl opacity-40"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                        <CheckCircle className="w-20 h-20 sm:w-24 sm:h-24 text-red-500 relative" />
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
                    variants={itemVariants}
                >
                    {currentlan?.title}
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    className="text-base sm:text-lg text-center text-gray-600 mb-8"
                    variants={itemVariants}
                >
                    {currentlan?.des}
                </motion.p>


                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={itemVariants}
                >
                    <motion.button
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <Link className='h-full w-full' href={'/'}>
                            {currentlan?.button1}
                        </Link>
                    </motion.button>

                    <motion.button
                        className="px-6 py-3 bg-white text-gray-800 border-2 border-red-600 rounded-full font-semibold hover:bg-purple-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link className='h-full w-full' href={'/contact'}>
                            {currentlan?.button2}
                        </Link>
                    </motion.button>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                    className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full hidden md:block"
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-12 left-12 w-2 h-2 bg-blue-400 rounded-full hidden md:block"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 1 }}
                />
            </motion.div>
        </div>
    );
}
