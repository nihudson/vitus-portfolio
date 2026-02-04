'use client';

import { motion } from "framer-motion";
import Image from 'next/image';

export default function AboutSection({ w }) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, x: -45 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 0,
                                ease: "easeOut"
                            }}
                            className="text-4xl font-bold text-gray-900 text-justify">
                            {w?.whoTitle}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -45 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.2,
                                ease: "easeOut"
                            }}
                            className="text-gray-500 text-md font-medium leading-relaxed text-justify">
                            {w?.whoTitledescription1}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -45 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.4,
                                ease: "easeOut"
                            }}
                            className="text-gray-500 text-md font-medium leading-relaxed text-justify">
                            {w?.whoTitledescription2}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -45 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.6,
                                ease: "easeOut"
                            }}
                            className="text-gray-500 text-md font-medium leading-relaxed text-justify">
                            {w?.whoTitledescription3}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -45 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.8,
                                ease: "easeOut"
                            }}
                            className="pt-4">
                            <p className="text-gray-500 text-md font-medium leading-relaxed text-justify">
                                <b className="font-bold text-lg text-gray-700">{w?.whoTitledescription4highlight}</b>{' '}
                                <span className="text-gray-500 text-md font-medium leading-relaxed text-justify">
                                    {w?.whoTitledescription4}
                                </span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            delay: 0.10,
                            ease: "easeOut"
                        }}
                        className="relative w-full aspect-[4/3] md:aspect-auto md:h-full rounded-lg overflow-hidden shadow-sm"
                    >
                        <Image
                            src="https://res.cloudinary.com/dg83pvgls/image/upload/v1769597931/switzer_it_room_vccbst.png"
                            alt="Business professionals shaking hands"
                            fill
                            className="object-cover md:object-cover object-right"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0, x: -45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            delay: 0.10,
                            ease: "easeOut"
                        }}
                        className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-sm">
                        <Image
                            src="https://res.cloudinary.com/dg83pvgls/image/upload/v1769597931/switzer_it_room_vccbst.png"
                            alt="Business professionals shaking hands"
                            fill
                            className="object-contain md:object-cover object-right"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div> */}
                </div>
            </div>
        </section >
    );
}