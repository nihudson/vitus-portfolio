"use client"
import { motion } from "framer-motion";
import { Award, Heart, Target, Users } from 'lucide-react';

export default function ValuesSection({ v }) {


    const services = [
        {
            icon: Target,
            title: v?.vCard1Title,
            description: v?.vCard1Description
        },
        {
            icon: Heart,
            title: v?.vCard2Title,
            description: v?.vCard2Description
        },
        {
            icon: Award,
            title: v?.vCard3Title,
            description: v?.vCard3Description
        },
        {
            icon: Users,
            title: v?.vCard4Title,
            description: v?.vCard4Description
        }
    ]



    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    {v?.valueTile}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                                </div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 45 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.1 * index,
                                        ease: "easeOut"
                                    }}
                                    className="text-xl font-semibold text-gray-900">
                                    {value.title}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 45 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.2 * index,
                                        ease: "easeOut"
                                    }}
                                    className="text-lg text-gray-500 font-medium leading-relaxed">
                                    {value.description}
                                </motion.p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
