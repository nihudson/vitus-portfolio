"use client"

import { sendEmail } from '@/utiliy/sendEmail';
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactSection({ l }) {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.fullName == "" || formData.email == "" || formData.phone == "" || formData.company == "" || formData.subject == "" || formData.message == "") {
            toast('Enter all the fields');
            return;
        }

        setLoading(true);
        try {
            await sendEmail(formData);
            toast('Email sent successfully')
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                company: '',
                subject: '',
                message: ''
            })
        } catch (error) {
            toast("Failed to send Email");
            console.error(error);
        } finally {
            setLoading(false);
        }

    };



    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-3">
                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.10,
                            ease: "easeOut"
                        }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            {l?.boxtitle}
                        </h2>

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {l?.fullName}
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {l?.email}
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {l?.phone}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {l?.company}
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {l?.subject}
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition bg-white"
                                >
                                    <option value="">{l?.subselete1}</option>
                                    <option value={l?.subselete2}>{l?.subselete2}</option>
                                    <option value={l?.subselete2}>{l?.subselete3}</option>
                                    <option value={l?.subselete2}>{l?.subselete4}</option>
                                    <option value={l?.subselete2}>{l?.subselete5}</option>
                                    <option value={l?.subselete2}>{l?.subselete6}</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {l?.message}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder={l?.messagePlaceholder}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition resize-none"
                                />
                            </div>

                            <div className='flex items-center justify-start'>
                                <motion.button
                                    onClick={handleSubmit}
                                    whileHover={{ scale: 1 }}
                                    whileTap={{ scale: 0.85 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="w-fit cursor-pointer bg-red-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-red-700 transition-all ease-in-out duration-100"
                                >
                                    {loading ? `${l?.btn}...` : l?.btn}

                                </motion.button>
                            </div>

                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.10,
                            ease: "easeOut"
                        }}>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            {l?.addresstitle}
                        </h2>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{l?.eTitle}</h3>
                                    <a href="mailto:contact@switzerit.com" className="text-red-600 hover:text-red-700">
                                        contact@switzerit.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{l?.teltitle}</h3>
                                    <a href="tel:+41779913873" className="text-red-600 hover:text-red-700">
                                        +41 77 991 38 73
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{l?.addtitle}</h3>
                                    <p className="text-gray-600">
                                        Route de Villars 15<br />
                                        1867 Ollon, Suisse
                                    </p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{l?.timetitle}</h3>
                                    <p className="text-gray-600">
                                        {l?.time1}<br />
                                        {l?.time2}<br />
                                        {l?.time3}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Free Consultation Box */}
                        <div className="mt-8 bg-red-50 border-2 border-red-100 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {l?.box1title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                                {l?.box1des}
                            </p>
                            <p className="text-red-600 font-semibold text-sm">
                                {l?.box1span}
                            </p>
                        </div>

                        {/* Emergency Support */}
                        <div className="mt-6 bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {l?.box2title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                                {l?.box2des}
                            </p>
                            <p className="text-gray-700">
                                {l?.box3span} <a href="tel:+41779666229" className="text-red-600 hover:text-red-700 font-semibold">+41 77 966 62 29</a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Toaster position="bottom-center" />
        </section >
    );
}