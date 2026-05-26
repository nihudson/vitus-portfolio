"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
    if (typeof gtag !== "undefined") {
      gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const reject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: "20px", left: "20px",
      background: "white", borderRadius: "12px",
      padding: "20px", maxWidth: "380px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      zIndex: 9999, fontFamily: "sans-serif"
    }}>
      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
        🍪 Nous respectons votre vie privée
      </p>
      <p style={{ fontSize: "13px", color: "#555", marginBottom: "16px" }}>
        Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={reject} style={{
          flex: 1, padding: "8px", border: "1px solid #ddd",
          borderRadius: "8px", cursor: "pointer", background: "white"
        }}>
          Refuser
        </button>
        <button onClick={accept} style={{
          flex: 1, padding: "8px", border: "none",
          borderRadius: "8px", cursor: "pointer",
          background: "#c0392b", color: "white", fontWeight: "bold"
        }}>
          Accepter
        </button>
      </div>
    </div>
  );
}
