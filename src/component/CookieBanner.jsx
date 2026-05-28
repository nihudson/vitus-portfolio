"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
    setVisible(true);
  } else if (consent === "accepted") {
    applyConsent(true, true);
  } else if (consent === "rejected") {
    applyConsent(false, false);
  } else {
    const saved = JSON.parse(consent);
    applyConsent(saved.analytics, saved.marketing);
  }
  }, []);

  const applyConsent = (analytics, marketing) => {
    if (typeof gtag !== "undefined") {
      gtag("consent", "update", {
        ad_storage: marketing ? "granted" : "denied",
        analytics_storage: analytics ? "granted" : "denied",
      });
    }
  };

  const acceptAll = () => {
    localStorage.setItem("cookie_consent", "accepted");
    applyConsent(true, true);
    setVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem("cookie_consent", "rejected");
    applyConsent(false, false);
    setVisible(false);
  };

  const savePrefs = () => {
    localStorage.setItem("cookie_consent", JSON.stringify(prefs));
    applyConsent(prefs.analytics, prefs.marketing);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: "20px", left: "20px",
      background: "white", borderRadius: "12px",
      padding: "24px", maxWidth: "400px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      zIndex: 9999, fontFamily: "sans-serif"
    }}>
      <p style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "8px" }}>
        🍪 Nous respectons votre vie privée
      </p>
      <p style={{ fontSize: "13px", color: "#555", marginBottom: "16px" }}>
        Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et personnaliser les publicités.
      </p>

      {showDetails && (
        <div style={{ marginBottom: "16px", borderTop: "1px solid #eee", paddingTop: "12px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "bold" }}>
              <span>🔒 Cookies nécessaires</span>
              <input type="checkbox" checked={true} disabled />
            </label>
            <p style={{ fontSize: "11px", color: "#888", margin: "2px 0 0 0" }}>Indispensables au fonctionnement du site.</p>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "bold" }}>
              <span>📊 Cookies analytiques</span>
              <input type="checkbox" checked={prefs.analytics} onChange={e => setPrefs({...prefs, analytics: e.target.checked})} />
            </label>
            <p style={{ fontSize: "11px", color: "#888", margin: "2px 0 0 0" }}>Nous aident à comprendre comment vous utilisez le site.</p>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "bold" }}>
              <span>📢 Cookies marketing</span>
              <input type="checkbox" checked={prefs.marketing} onChange={e => setPrefs({...prefs, marketing: e.target.checked})} />
            </label>
            <p style={{ fontSize: "11px", color: "#888", margin: "2px 0 0 0" }}>Utilisés pour les publicités personnalisées.</p>
          </div>
          <button onClick={savePrefs} style={{
            width: "100%", padding: "8px", border: "none",
            borderRadius: "8px", cursor: "pointer",
            background: "#333", color: "white", fontWeight: "bold", marginTop: "4px"
          }}>
            Enregistrer mes préférences
          </button>
        </div>
      )}

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <button onClick={rejectAll} style={{
          flex: 1, padding: "8px", border: "1px solid #ddd",
          borderRadius: "8px", cursor: "pointer", background: "white", fontSize: "13px"
        }}>
          Refuser
        </button>
        <button onClick={() => setShowDetails(!showDetails)} style={{
          flex: 1, padding: "8px", border: "1px solid #ddd",
          borderRadius: "8px", cursor: "pointer", background: "white", fontSize: "13px"
        }}>
          Personnaliser
        </button>
        <button onClick={acceptAll} style={{
          flex: 1, padding: "8px", border: "none",
          borderRadius: "8px", cursor: "pointer",
          background: "#c0392b", color: "white", fontWeight: "bold", fontSize: "13px"
        }}>
          Accepter
        </button>
      </div>
    </div>
  );
}
