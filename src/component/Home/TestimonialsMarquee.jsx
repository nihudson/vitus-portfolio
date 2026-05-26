'use client'
import useLan from "@/stores/store/useLan";

const reviews = {
    fr: [
        { name: "Christiane D.", color: "#2563eb", text: "Professionnalisme, patience, courtoisie et gentillesse. Un grand merci à M. Vithu !" },
        { name: "Joel Da Veiga", color: "#dc2626", text: "Rapide, efficace, communication fluide. Excellent suivi du début à la fin." },
        { name: "Alexon U.",     color: "#7c3aed", text: "Réactivité, professionnalisme et expertise. Une vraie maîtrise technique." },
        { name: "Jose Padou",   color: "#0891b2", text: "Excellente expertise. Ils ont identifié les vulnérabilités de mon site web." },
        { name: "Varman",       color: "#059669", text: "Patience, écoute et explications claires tout au long du processus." },
        { name: "Antony",       color: "#ea580c", text: "Service de qualité. Je les recommande sans hésitation pour vos besoins IT." },
    ],
    en: [
        { name: "Christiane D.", color: "#2563eb", text: "Professionalism, patience, courtesy and kindness. A big thank you to Mr. Vithu!" },
        { name: "Joel Da Veiga", color: "#dc2626", text: "Quick, efficient, smooth communication. Excellent support from start to finish." },
        { name: "Alexon U.",     color: "#7c3aed", text: "Responsiveness, professionalism and expertise. Genuine technical mastery." },
        { name: "Jose Padou",   color: "#0891b2", text: "Excellent expertise. They identified the vulnerabilities in my website." },
        { name: "Varman",       color: "#059669", text: "Patient, attentive, and clear explanations throughout the whole process." },
        { name: "Antony",       color: "#ea580c", text: "Top-notch service. I recommend them without hesitation for all your IT needs." },
    ],
};

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

function Card({ review }) {
    return (
        <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 w-72 flex-shrink-0">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: review.color }}>
                {review.name[0]}
            </div>
            <div>
                <StarRow />
                <p className="text-xs font-semibold text-white mb-1">{review.name}</p>
                <p className="text-xs text-white/50 leading-relaxed">"{review.text}"</p>
            </div>
        </div>
    );
}

export default function TestimonialsMarquee() {
    const { ln } = useLan();
    const list = reviews[ln === "en" ? "en" : "fr"];
    const doubled = [...list, ...list];

    return (
        <section className="w-full overflow-hidden relative py-8" style={{ background: "#0a1628" }}>
            {/* Fade gauche */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #0a1628, transparent)" }} />
            {/* Fade droite */}
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #0a1628, transparent)" }} />

            <div className="flex gap-4 w-max" style={{ animation: "marquee 32s linear infinite" }}>
                {doubled.map((r, i) => <Card key={i} review={r} />)}
            </div>

            <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        </section>
    );
}
