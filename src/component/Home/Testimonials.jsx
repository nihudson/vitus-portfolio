'use client'
import fr from "@/content/testimonials/fr.json";
import en from "@/content/testimonials/en.json";
import useLan from "@/stores/store/useLan";
import lanChooser from "@/utiliy/lanChooser";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const COLORS = ["#2563eb","#dc2626","#7c3aed","#0891b2","#059669","#ea580c"];
const PER = 3;

function Stars() {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const { ln } = useLan();
    const t = lanChooser(ln, fr, en);
    const [page, setPage] = useState(0);
    const pages = Math.ceil(t.reviews.length / PER);
    const shown = t.reviews.slice(page * PER, page * PER + PER);

    useEffect(() => {
        const id = setInterval(() => setPage(p => (p + 1) % pages), 4500);
        return () => clearInterval(id);
    }, [pages]);

    return (
        <section className="py-10 px-3 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-10"
                >
                    <span className="inline-block text-xs font-semibold tracking-widest text-red-600 uppercase mb-3">
                        {ln === "en" ? "Client reviews" : "Avis clients"}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 aptos">
                        {t.sectionTitle}
                    </h2>
                    <p className="text-gray-500 text-base max-w-lg mx-auto mb-5">
                        {t.sectionSub}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-500">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        {t.googleLabel}
                    </div>
                </motion.div>

                {/* Cartes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    {shown.map((r, i) => (
                        <motion.div
                            key={`${page}-${i}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.07 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <Stars />
                                <span className="text-4xl text-gray-100 font-serif leading-none">"</span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                                {r.text}
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                                    style={{ background: COLORS[(page * PER + i) % COLORS.length] }}>
                                    {r.name[0]}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                                    <p className="text-xs text-gray-400">{r.date}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-4">
                    <button onClick={() => setPage(p => (p - 1 + pages) % pages)}
                        className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200">
                        ‹
                    </button>
                    <div className="flex gap-2">
                        {[...Array(pages)].map((_, i) => (
                            <button key={i} onClick={() => setPage(i)}
                                className={`h-2 rounded-full transition-all duration-200 ${i === page ? "bg-red-600 w-5" : "bg-gray-200 w-2 hover:bg-gray-400"}`}
                            />
                        ))}
                    </div>
                    <button onClick={() => setPage(p => (p + 1) % pages)}
                        className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200">
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
}
