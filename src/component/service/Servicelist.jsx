"use client"; // optional, but good if using hooks later

import { motion } from "framer-motion";
import { Cloud, FolderKanban, Headphones, Monitor, Shield, Wifi, Wrench } from 'lucide-react';
import Image from "next/image";
import ContactUsBtn from "../ContactUsBtn";

export default function ServiceCards({ l }) {


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
        <div className="w-full bg-white py-12">
            <div className="max-w-7xl mx-auto space-y-8 px-3">
                {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <div id={`section-${index + 1}`} key={index} className="bg-gray-50 rounded-lg p-0 sm:p-2 md:p-5 lg:p-8 mb-10 scroll-m-[130px]">
                            <div className="flex flex-col lg:flex-row justify-between gap-8">
                                {/* Left Column - Title and Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: -15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.3,
                                        ease: "easeOut"
                                    }}
                                    className={`lg:w-2/5 ${service?.isLeft ? "order-1 lg:order-1" : " order-2 lg:order-2"}`}>
                                    <Image src={service?.image} alt={service.title} width={1000} height={1000} className="h-[100%] object-cover rounded-md" />
                                </motion.div>

                                {/* Right Column - Prestations */}
                                <div className={`hello lg:w-3/5 rounded-lg ${service?.isLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}>
                                    <div className="mb-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -45 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0,
                                                ease: "easeOut"
                                            }}
                                            className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-gray-900 mt-2">
                                                {service.title}
                                            </h3>
                                        </motion.div>
                                        <motion.p
                                            initial={{ opacity: 0, x: -45 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.1,
                                                ease: "easeOut"
                                            }}
                                            className="text-xl font-medium text-gray-500 leading-relaxed">
                                            {service.description}
                                        </motion.p>
                                    </div>
                                    <motion.h4
                                        initial={{ opacity: 0, x: -45 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.1,
                                            ease: "easeOut"
                                        }}
                                        className="text-md font-semibold text-gray-500 mb-3">
                                        Included services:
                                    </motion.h4>
                                    <ul className="space-y-2 flex flex-col gap-2">
                                        {service.prestations.map((prestation, idx) => (
                                            <motion.li
                                                initial={{ opacity: 0, x: -45 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: 0.1 * idx,
                                                    ease: "easeOut"
                                                }}
                                                key={idx} className="flex items-center gap-2">
                                                <span className="text-red-600 flex-shrink-0">
                                                    <div className="bg-red-300 h-[14px] w-[14px] rounded-full" />
                                                </span>
                                                <span className="text-md text-gray-600">{prestation}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Bottom CTA Section */}
                <div className="bg-pink-50 rounded-lg p-4 md:p-8 text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {l.ctatitle}
                    </h3>
                    {/* <p className="text-md text-gray-700 mb-4 max-w-3xl mx-auto">
                        {l.ctades}
                    </p> */}

                    <p className="text-md text-gray-700 mb-4 max-w-3xl mx-auto">
                        {(() => {
                            const text = l.ctades || "";
                            const breakAfter = 105;

                            if (text.length <= breakAfter) return text;

                            const firstLine = text.slice(0, breakAfter);
                            const secondLine = text.slice(breakAfter);

                            return (
                                <>
                                    {firstLine}
                                    <br />
                                    {secondLine}
                                </>
                            );
                        })()}
                    </p>

                    <p className="text-md font-bold text-gray-500">
                        {l.ctades2}
                        {/* <Link className="text-red-600 font-bold text-lg" href="/contact">{l.ctades2Link}</Link> */}
                    </p>

                    <ContactUsBtn c={l?.ctades2Link} />
                </div>
            </div>
        </div>
    );
}
