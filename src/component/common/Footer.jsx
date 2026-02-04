'use client'

import en from '@/content/footer/en.json';
import fr from '@/content/footer/fr.json';
import useLan from '@/stores/store/useLan';
import lanChooser from '@/utiliy/lanChooser';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const { ln } = useLan();
    const currentLan = lanChooser(ln, fr, en);

    const navigation = [
        { label: currentLan.nav1, href: '/' },
        { label: currentLan.nav2, href: '/services' },
        { label: currentLan.nav3, href: '/about' },
        { label: currentLan.nav4, href: '/contact' }
    ];

    const services = [
        { label: currentLan.ser1, href: '/services#section-1' },
        { label: currentLan.ser2, href: '/services#section-2' },
        { label: currentLan.ser3, href: '/services#section-3' },
        { label: currentLan.ser4, href: '/services#section-4' },
        { label: currentLan.ser5, href: '/services#section-5' },
        { label: currentLan.ser6, href: '/services#section-6' }
    ];

    return (
        <footer className="bg-gray-200 text-gray-300">
            <div className="max-w-7xl mx-auto px-3 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="https://res.cloudinary.com/dg83pvgls/image/upload/v1770027131/logo_qyncup.png"
                                alt="SwitzerIT Logo"
                                width={1000}
                                height={1000}
                                className="h-10 w-auto"
                            />
                        </div>
                        <p className="text-md text-gray-700 leading-relaxed">
                            {currentLan?.description}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-gray-800 text-xl font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {navigation.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item?.href}
                                        className="text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-gray-800 text-xl font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {services.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-gray-800 text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:support@switzerit.com"
                                    className="flex items-center gap-2 text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>support@switzerit.com</span>
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="tel:+41779913873"
                                    className="flex items-center gap-2 text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+41 77 991 38 73</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://maps.app.goo.gl/yY1bEsyDR6QpVvZ3A"
                                    target="_blank"
                                    className="flex items-start gap-2 text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                                >
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Route de Villars 15
                                        <br />
                                        1867 Ollon, Suisse
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t-2 border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-md text-gray-700">{currentLan?.copy}</p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                        >
                            {currentLan?.terms}
                        </a>
                        <a
                            href="#"
                            className="text-md text-gray-700 hover:text-red-600 transition-all ease-in-out duration-300"
                        >
                            {currentLan?.privacy}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
