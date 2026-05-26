'use client'
import fr from "@/content/testimonials/fr.json";
import en from "@/content/testimonials/en.json";
import useLan from "@/stores/store/useLan";
import lanChooser from "@/utiliy/lanChooser";
import { motion } from "framer-motion";
import { useState } from "react";

const COLORS = [
  "bg-red-600 text-white",
  "bg-blue-600 text-white",
  "bg-emerald-600 text-white",
  "bg-violet-600 text-white",
  "bg-orange-500 text-white",
  "bg-sky-600 text-white",
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
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
  const [active, setActive] = useState(0);
  const total = t.reviews.length;
  const visible = 3;
  const pages = Math.ceil(total / visible);

  const shown = t.reviews.slice(active * visible, active * visible + visible);

  return (
    <section className="pt-8 pb-8 px-3 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-red-600 uppercase mb-3">
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 aptos">
            {t.sectionTitle}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-5">
            {t.sectionSub}
          </p>
          <GoogleBadge label={t.googleLabel} />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {shown.map((review, i) => (
            <motion.div
              key={active + '-' + i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col"
            >
              <Stars />
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${COLORS[( (active * visible) + i) % COLORS.length]}`}>
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        {pages > 1 && (
          <div className="flex justify-center gap-2">
            {[...Array(pages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === active ? "bg-red-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
