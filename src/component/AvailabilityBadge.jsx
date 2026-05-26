'use client'
import { useEffect, useState } from "react";

function getStatus() {
    const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Europe/Zurich" })
    );
    const day = now.getDay();
    const hour = now.getHours();

    // Lundi–Vendredi 08h00–22h00
    if (day >= 1 && day <= 5 && hour >= 8 && hour < 22) {
        return { state: "available", label: "Disponible maintenant", sub: "Réponse en moins de 2h" };
    }
    // Samedi 09h00–17h00
    if (day === 6 && hour >= 9 && hour < 17) {
        return { state: "available", label: "Disponible", sub: "Samedi 9h–17h" };
    }
    // Dimanche
    if (day === 0) {
        return { state: "offline", label: "Fermé ce dimanche", sub: "Dès lundi à 8h00" };
    }
    // Hors horaires
    const isBeforeOpen = hour < (day === 6 ? 9 : 8);
    return {
        state: "away",
        label: "Hors des horaires",
        sub: isBeforeOpen ? `Ouvre à ${day === 6 ? "9h00" : "8h00"}` : "Reprend demain à 8h00",
    };
}

const DOT_COLOR = { available: "#22c55e", away: "#f59e0b", offline: "#94a3b8" };

export default function AvailabilityBadge() {
    const [status, setStatus] = useState(getStatus);

    useEffect(() => {
        const id = setInterval(() => setStatus(getStatus()), 60_000);
        return () => clearInterval(id);
    }, []);

    const color = DOT_COLOR[status.state];
    const isPulse = status.state === "available";

    return (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-white text-sm font-medium select-none w-fit">
            {/* Dot */}
            <span className="relative w-2.5 h-2.5 flex-shrink-0">
                <span className="block w-2.5 h-2.5 rounded-full absolute inset-0" style={{ background: color }} />
                {isPulse && (
                    <>
                        <span className="block w-2.5 h-2.5 rounded-full absolute inset-0 animate-ping" style={{ background: color, opacity: 0.7 }} />
                    </>
                )}
            </span>
            {/* Texte */}
            <span>{status.label}</span>
            <span className="text-white/60 font-normal">— {status.sub}</span>
        </span>
    );
}
