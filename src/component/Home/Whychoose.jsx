'use client'

import en from "@/content/whychooseus/en.json";
import fr from "@/content/whychooseus/fr.json";
import useLan from '@/stores/store/useLan';
import lanChooser from '@/utiliy/lanChooser';
import { motion } from 'framer-motion';
import { BookOpen, Building2, Settings, Shield, Users } from 'lucide-react';


export default function WhyChooseSwitzerIT() {



    const { ln } = useLan();
    const currentlan = lanChooser(ln, fr, en);



    const features = [
        {
            icon: <Building2 className="w-6 h-6" />,
            title: currentlan.card1Title,
            description: currentlan?.card1Description,
            img: 'https://res.cloudinary.com/dg83pvgls/image/upload/v1769926429/Professional_and_Structured_Approach_xcdiv5.png'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: currentlan.card2Title,
            description: currentlan?.card2Description,
            img: 'https://res.cloudinary.com/dg83pvgls/image/upload/v1769926428/Security_Built_in_by_Default_ahsz3j.png'
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: currentlan.card3Title,
            description: currentlan?.card3Description,
            img: 'https://res.cloudinary.com/dg83pvgls/image/upload/v1769926429/Transparency_and_Clarity_avj9xt.png'
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: currentlan.card4Title,
            description: currentlan?.card4Description,
            img: 'https://res.cloudinary.com/dg83pvgls/image/upload/v1769926428/A_Single_Point_of_Contact_pabikn.png'
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: currentlan.card5Title,
            description: currentlan?.card5Description,
            img: 'https://res.cloudinary.com/dg83pvgls/image/upload/v1769926429/Solutions_Tailored_to_Each_Client_mgilqp.png'
        }
    ];

    return (
        <div className="w-full bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-3">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {currentlan?.sectionTitle}
                    </h2>
                    <p className="max-w-3xl text-xl text-gray-500 font-medium mx-auto">
                        {currentlan?.sectionSubTitle}
                    </p>
                    <p className="text-md mt-2 max-w-3xl font-medium text-gray-800 mx-auto">
                        {currentlan?.sectionDescription}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 45 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.1,
                                ease: "easeOut"
                            }}
                            key={index}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group p-4"
                        >
                            <div className="w-12 h-12 bg-red-600 rounded-md flex items-center justify-center text-white mb-4">
                                {feature.icon}
                            </div>

                            <div className="">
                                <motion.h3
                                    initial={{ opacity: 0, x: -45 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.4,
                                        ease: "easeOut"
                                    }}
                                    className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, x: -45 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.6,
                                        ease: "easeOut"
                                    }}
                                    className="font-medium text-gray-400 leading-relaxed">
                                    {feature.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.6,
                        ease: "easeOut"
                    }}
                    className="bg-white rounded-lg p-8 shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                        {currentlan?.ctaTitle}
                    </h3>
                    <p className="font-medium text-gray-400 text-center max-w-4xl mx-auto leading-relaxed">
                        {currentlan?.ctaDescription}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}