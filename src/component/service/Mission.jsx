'use client'

import { motion } from "framer-motion";

export default function MissionSection({ m }) {
    return (
        <section className="py-8">
            <div className="max-w-7xl mx-auto px-3">
                <div

                    className="rounded-3xl px-8 py-12 md:px-16 md:py-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 45 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.1,
                            ease: "easeOut"
                        }}
                        className="text-4xl md:text-5xl font-bold mb-8 text-black">
                        {m?.missiontitle}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 45 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                        className="text-lg md:text-xl font-medium text-gray-500 leading-relaxed mb-6 max-w-4xl mx-auto">
                        {m?.missitondescription1}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 45 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: "easeOut"
                        }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        {m?.missitondescription2}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}