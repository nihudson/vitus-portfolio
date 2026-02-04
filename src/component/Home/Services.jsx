"use client";

import en from "@/content/services/en.json";
import fr from "@/content/services/fr.json";
import useLan from "@/stores/store/useLan";
import lanChooser from "@/utiliy/lanChooser";
import { motion } from "framer-motion";
import { Cloud, FolderKanban, Headphones, Monitor, Shield, Wifi, Wrench } from 'lucide-react';
import Link from "next/link";
import ContactUsBtn from "../ContactUsBtn";


export default function ITServicesSection() {

    const { ln } = useLan();
    const l = lanChooser(ln, fr, en);


    const services = [
        {
            icon: Headphones,
            title: l?.service1Title,
            description: l?.service1Description,
            color: "bg-red-50",
            prestations: [
                l?.service1List1,
                l?.service1List2,
                l?.service1List3,
                l?.service1List4,
                l?.service1List5,
                l?.service1List6,
                l?.service1List7
            ],
            isLeft: true,
            image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769512983/itsupport_mklkjg.jpg"

        },
        {
            icon: Wrench,
            title: l?.service2Title,
            description: l?.service2Description,
            color: "bg-red-50",
            prestations: [
                l?.service2List1,
                l?.service2List2,
                l?.service2List3,
                l?.service2List4,
                l?.service2List5,
                l?.service2List6
            ],
            isLeft: false,
            image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769511869/maintaince_kn9cfu.jpg"

        },
        {
            icon: Shield,
            title: l?.service3Title,
            description: l?.service3Description,
            color: "bg-red-50",
            prestations: [
                l?.service3List1,
                l?.service3List2,
                l?.service3List3,
                l?.service3List4,
                l?.service3List5,
                l?.service3List6
            ],
            isLeft: true,
            image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769511870/protected_nwvutf.jpg"
        },
        {
            icon: Wifi,
            title: l?.service4Title,
            description: l?.service4Description,
            color: "bg-red-50",
            prestations: [
                l?.service4List1,
                l?.service4List2,
                l?.service4List3,
                l?.service4List4,
                l?.service4List5,
                l?.service4List6,
                l?.service4List7,
                l?.service4List8
            ],
            isLeft: false,
            image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769511867/network_mj4gw1.jpg"

        },
        {
            icon: Cloud,
            title: l?.service5Title,
            description: l?.service5Description,
            color: "bg-red-50",
            prestations: [
                l?.service5List1,
                l?.service5List2,
                l?.service5List3,
                l?.service5List4,
                l?.service5List5,
            ],
            isLeft: true,
            image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769511863/cloud_cqnltk.jpg"

        },
        {
            icon: Monitor,
            title: l?.service6Title,
            description: l?.service6Description,
            color: "bg-red-50",
            prestations: [
                l?.service6List1,
                l?.service6List2,
                l?.service6List3,
                l?.service6List4,
                l?.service6List5,
            ],
            isLeft: false,
            image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769601509/balok_hv8rkj.jpg"
        },
        {
            icon: FolderKanban,
            title: l?.service7Title,
            description: l?.service7Description,
            color: "bg-red-50",
            prestations: [
                l?.service7List1,
                l?.service7List2,
                l?.service7List3,
                l?.service7List4,
            ],
            isLeft: true,
            image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1769512985/custom_1_zgou8o.jpg"

        }
    ]


    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {l?.pageTitle}
                    </h2>
                    <p className="max-w-3xl text-xl text-gray-500 font-medium mx-auto">
                        {l?.landingdes1}
                    </p>
                    <p className="text-md mt-2 max-w-3xl font-medium text-gray-400 mx-auto">
                        {l?.landingdes2}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Link key={index} href={`/services#section-${index + 1}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 45 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.1,
                                        ease: "easeOut"
                                    }}
                                    className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                                >

                                    <div
                                        className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                                        <IconComponent className="w-6 h-6 text-red-600" />
                                    </div>


                                    <motion.h3
                                        initial={{ opacity: 0, x: -45 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.2,
                                            ease: "easeOut"
                                        }}
                                        className="text-lg font-semibold text-gray-900 mb-2">
                                        {service.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, x: -45 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.4,
                                            ease: "easeOut"
                                        }}
                                        className="font-medium text-gray-400 leading-relaxed">
                                        {service.description}
                                    </motion.p>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>

                {/* Call to Action Box */}
                <motion.div
                    initial={{ opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.6,
                        ease: "easeOut"
                    }}
                    className="bg-red-50 border-l-4 border-red-600 rounded-lg p-3 py-6 md:p-6">
                    <div className="flex items-start">
                        <div className="hidden md:block flex-shrink-0">
                            <svg
                                className="w-6 h-6 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div className="ml-1 md:ml-4">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                {l?.landingctatitle}
                            </h4>
                            <p className="font-medium text-gray-400 leading-relaxed">
                                {l?.landingctades}
                            </p>
                            <ContactUsBtn c={l?.ctades2Link} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
