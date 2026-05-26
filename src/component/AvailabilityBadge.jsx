'use client'
import { useEffect, useState } from "react";
import useLan from "@/stores/store/useLan";

const content = {
    fr: {
        available:    { label: "Disponible maintenant", sub: "Réponse en moins de 2h" },
        away_tonight: { label: "Hors des horaires",     sub: "Reprend demain à 8h00" },
        away_morning: { label: "Hors des horaires",     sub: "Ouvre aujourd'hui à 8h00" },
    },
    en: {
        available:    { label: "Available now",          sub: "Response within 2h" },
        away_tonight: { label: "Outside business hours", sub: "Back tomorrow at 8am" },
        away_morning: { label: "Outside business hours", sub: "Opens today at 8am" },
    },
};

function getStatus() {
    const now  = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Zurich" }));
    const hour = now.getHours();
    if (hour >= 8 && hour < 22) return "available";  // 08h → 21h59 : ouvert
    if (hour >= 22)             return "away_tonight"; // 22h → 23h59 : reprend demain
    return "away_morning";                             // 00h → 07h59 : ouvre aujourd'hui
}

const DOT_COLOR = { available: "#22c55e", away_tonight: "#f59e0b", away_morning: "#f59e0b" };

export default function AvailabilityBadge() {
    const [status, setStatus] = useState(getStatus);
    const { ln } = useLan();
    const lang = ln === "en" ? "en" : "fr";
    const text = content[lang][status];

    useEffect(() => {
        const id = setInterval(() => setStatus(getStatus()), 60_000);
        return () => clearInterval(id);
    }, []);

    const color   = DOT_COLOR[status];
    const isPulse = status === "available";

    return (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-white text-sm font-medium select-none w-fit">
            <span className="relative w-2.5 h-2.5 flex-shrink-0">
                <span className="block w-2.5 h-2.5 rounded-full absolute inset-0" style={{ background: color }} />
                {isPulse && (
                    <span className="block w-2.5 h-2.5 rounded-full absolute inset-0 animate-ping" style={{ background: color, opacity: 0.7 }} />
                )}
            </span>
            <span>{text.label}</span>
            <span className="text-white/60 font-normal">— {text.sub}</span>
        </span>
    );
}
