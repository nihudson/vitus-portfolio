'use client'
import { motion } from "framer-motion";


export default function Breadcrumb({
    title = "",
    subtitle = "",
    extra = "",
    bgColor = "bg-gray-50",
    paddingY = "py-16",
    paddingX = "px-4",
    maxWidth = "max-w-7xl",
    textAlign = "text-center"
}) {
    return (
        <div className={`${bgColor} ${paddingY} ${paddingX} w-full`}>
            <div className={`${maxWidth} mx-auto ${textAlign}`}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: "easeOut"
                    }}
                    className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:text-justify">
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.2,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                    >
                        <p className="text-lg lg:text-xl text-gray-500 font-medium mb-5 text-justify">
                            {subtitle}
                        </p>
                        <p className="text-sm md:text-md lg:text-lg font-medium text-gray-400 text-justify">
                            {extra}
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
