'use client'
import fr from "@/content/testimonials/fr.json";
import en from "@/content/testimonials/en.json";
import useLan from "@/stores/store/useLan";
import lanChooser from "@/utiliy/lanChooser";
import { motion } from "framer-motion";

const COLORS = ["#dc2626"];

function StarRow() {
    return (
        <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function GoogleBadge({ label }) {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-500">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {label}
        </div>
    );
}

export default function Testimonials() {
    const { ln } = useLan();
    const t = lanChooser(ln, fr, en);
    const doubled = [...t.reviews, ...t.reviews];

    return (
        <section className="pt-16 pb-0 bg-white">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-center mb-10 px-3"
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 aptos">
                    {t.sectionTitle}
                </h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto mb-5">
                    {t.sectionSub}
                </p>
                <GoogleBadge label={t.googleLabel} />
            </motion.div>

            {/* Bandeau défilant */}
            <div className="w-full overflow-hidden relative py-6" style={{ background: "#0a1628" }}>
                {/* Fade gauche */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to right, #0a1628, transparent)" }} />
                {/* Fade droite */}
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to left, #0a1628, transparent)" }} />

                <div className="flex gap-4 w-max" style={{ animation: "marquee 32s linear infinite" }}>
                    {doubled.map((r, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 w-72 flex-shrink-0">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                                style={{ background: COLORS[i % COLORS.length] }}>
                                {r.name[0]}
                            </div>
                            <div>
                                <StarRow />
                                <p className="text-xs font-semibold text-white mb-1">{r.name}</p>
                                <p className="text-xs text-white/50 leading-relaxed">"{r.text}"</p>
                            </div>
                        </div>
                    ))}
                </div>

                <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
            </div>
        </section>
    );
}
