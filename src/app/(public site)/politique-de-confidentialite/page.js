'use client'
import Bredcrubm from "@/component/common/Bred";
import useLan from "@/stores/store/useLan";
import { User, Database, Target, FileText, Clock, Share2, ShieldCheck, Cookie, Lock, RefreshCw, Mail } from "lucide-react";
import { useState } from "react";

const iconMap = { User, Database, Target, FileText, Clock, Share2, ShieldCheck, Cookie, Lock, RefreshCw, Mail };

const sectionsFr = [
  { icon: "User", id: "responsable", short: "Responsable", title: "Responsable du traitement", content: ["Le responsable du traitement des données personnelles collectées via ce site est :", "SwitzerIT SNC", "Route de Villars 15, 1867 Ollon VD, Suisse", "IDE : CHE-303.877.142", "Email : contact@switzerit.com", "Téléphone : +41 77 991 38 73"] },
  { icon: "Database", id: "donnees", short: "Données", title: "Données collectées", content: ["Dans le cadre de l'utilisation du site switzerit.com, nous sommes susceptibles de collecter les données suivantes :", "— Formulaire de contact : nom, prénom, adresse email, numéro de téléphone (optionnel), message.", "— Données de navigation : adresse IP, type de navigateur, pages visitées, durée de visite (via les outils d'analyse).", "Aucune donnée sensible (santé, origine ethnique, convictions religieuses, etc.) n'est collectée."] },
  { icon: "Target", id: "finalites", short: "Finalités", title: "Finalités du traitement", content: ["Les données collectées sont utilisées aux fins suivantes :", "— Répondre à vos demandes de contact ou de devis.", "— Améliorer nos services et l'expérience utilisateur du site.", "— Respecter nos obligations légales.", "Nous ne vendons, ne louons et ne partageons pas vos données personnelles avec des tiers à des fins commerciales."] },
  { icon: "FileText", id: "base-legale", short: "Base légale", title: "Base légale du traitement", content: ["Le traitement de vos données repose sur les bases légales suivantes, conformément à la Loi fédérale suisse sur la protection des données (LPD) et au Règlement Général sur la Protection des Données (RGPD) :", "— Votre consentement (formulaire de contact).", "— L'exécution d'un contrat ou de mesures précontractuelles.", "— Nos intérêts légitimes (amélioration du service, sécurité du site)."] },
  { icon: "Clock", id: "conservation", short: "Conservation", title: "Durée de conservation", content: ["Vos données personnelles sont conservées uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :", "— Données de contact : 3 ans à compter du dernier contact.", "— Données de facturation : 10 ans (obligation légale suisse).", "— Données de navigation : 13 mois maximum.", "À l'issue de ces délais, vos données sont supprimées ou anonymisées."] },
  { icon: "Share2", id: "transmission", short: "Transmission", title: "Transmission des données", content: ["Vos données peuvent être transmises aux prestataires techniques suivants, dans le cadre strict de leur mission :", "— EmailJS (envoi de formulaires de contact) — politique disponible sur emailjs.com", "— Vercel Inc. (hébergement du site) — politique disponible sur vercel.com/legal/privacy-policy", "Ces prestataires agissent en tant que sous-traitants et sont tenus de respecter la confidentialité de vos données.", "Aucune donnée n'est transférée à des tiers à des fins publicitaires ou commerciales."] },
  { icon: "ShieldCheck", id: "droits", short: "Vos droits", title: "Vos droits", content: ["Conformément à la LPD suisse et au RGPD européen, vous disposez des droits suivants sur vos données personnelles :", "— Droit d'accès : obtenir une copie de vos données.", "— Droit de rectification : corriger des données inexactes.", "— Droit à l'effacement : demander la suppression de vos données.", "— Droit à la portabilité : recevoir vos données dans un format structuré.", "— Droit d'opposition : vous opposer à un traitement basé sur nos intérêts légitimes.", "Pour exercer ces droits, contactez-nous à : contact@switzerit.com", "Nous nous engageons à répondre à votre demande dans un délai de 30 jours."] },
  { icon: "Cookie", id: "cookies", short: "Cookies", title: "Cookies", content: ["Le site switzerit.com utilise des cookies techniques nécessaires à son bon fonctionnement (gestion des sessions, préférence de langue).", "Ces cookies ne collectent pas de données personnelles à des fins publicitaires et ne nécessitent pas votre consentement explicite.", "Vous pouvez configurer votre navigateur pour refuser ou supprimer les cookies à tout moment, mais certaines fonctionnalités du site pourraient ne plus être disponibles."] },
  { icon: "Lock", id: "securite", short: "Sécurité", title: "Sécurité", content: ["SwitzerIT SNC met en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation.", "Le site est servi exclusivement via HTTPS (connexion chiffrée)."] },
  { icon: "RefreshCw", id: "modifications", short: "Modifications", title: "Modifications", content: ["Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment pour refléter les évolutions légales ou techniques.", "La date de dernière mise à jour est indiquée en bas de cette page. Nous vous encourageons à la consulter régulièrement."] },
  { icon: "Mail", id: "contact", short: "Contact", title: "Contact & réclamations", content: ["Pour toute question relative à cette politique ou pour exercer vos droits, contactez-nous :", "Email : contact@switzerit.com", "Courrier : SwitzerIT SNC, Route de Villars 15, 1867 Ollon VD, Suisse", "Si vous estimez que le traitement de vos données n'est pas conforme à la loi, vous avez le droit d'introduire une réclamation auprès du Préposé fédéral à la protection des données et à la transparence (PFPDT) : www.edoeb.admin.ch"] },
];

const sectionsEn = [
  { icon: "User", id: "controller", short: "Controller", title: "Data Controller", content: ["The controller responsible for processing personal data collected through this website is:", "SwitzerIT SNC", "Route de Villars 15, 1867 Ollon VD, Switzerland", "IDE: CHE-303.877.142", "Email: contact@switzerit.com", "Phone: +41 77 991 38 73"] },
  { icon: "Database", id: "data", short: "Data", title: "Data Collected", content: ["When using the switzerit.com website, we may collect the following data:", "— Contact form: first name, last name, email address, phone number (optional), message.", "— Navigation data: IP address, browser type, pages visited, visit duration (via analytics tools).", "No sensitive data (health, ethnic origin, religious beliefs, etc.) is collected."] },
  { icon: "Target", id: "purposes", short: "Purposes", title: "Purposes of Processing", content: ["The data collected is used for the following purposes:", "— Responding to your contact or quote requests.", "— Improving our services and website user experience.", "— Complying with our legal obligations.", "We do not sell, rent or share your personal data with third parties for commercial purposes."] },
  { icon: "FileText", id: "legal-basis", short: "Legal Basis", title: "Legal Basis for Processing", content: ["The processing of your data is based on the following legal grounds, in accordance with the Swiss Federal Act on Data Protection (FADP) and the General Data Protection Regulation (GDPR):", "— Your consent (contact form).", "— Performance of a contract or pre-contractual measures.", "— Our legitimate interests (service improvement, website security)."] },
  { icon: "Clock", id: "retention", short: "Retention", title: "Retention Period", content: ["Your personal data is retained only for as long as necessary for the purposes for which it was collected:", "— Contact data: 3 years from the last contact.", "— Billing data: 10 years (Swiss legal obligation).", "— Navigation data: maximum 13 months.", "After these periods, your data is deleted or anonymised."] },
  { icon: "Share2", id: "transfers", short: "Transfers", title: "Data Transfers", content: ["Your data may be passed on to the following technical service providers, strictly within the scope of their mission:", "— EmailJS (contact form delivery) — policy available at emailjs.com", "— Vercel Inc. (website hosting) — policy available at vercel.com/legal/privacy-policy", "These providers act as data processors and are bound to respect the confidentiality of your data.", "No data is transferred to third parties for advertising or commercial purposes."] },
  { icon: "ShieldCheck", id: "rights", short: "Your Rights", title: "Your Rights", content: ["Under Swiss FADP and European GDPR, you have the following rights over your personal data:", "— Right of access: obtain a copy of your data.", "— Right of rectification: correct inaccurate data.", "— Right to erasure: request deletion of your data.", "— Right to portability: receive your data in a structured format.", "— Right to object: object to processing based on our legitimate interests.", "To exercise these rights, contact us at: contact@switzerit.com", "We commit to responding to your request within 30 days."] },
  { icon: "Cookie", id: "cookies", short: "Cookies", title: "Cookies", content: ["The switzerit.com website uses technical cookies necessary for its proper operation (session management, language preference).", "These cookies do not collect personal data for advertising purposes and do not require your explicit consent.", "You can configure your browser to refuse or delete cookies at any time, but some website features may no longer be available."] },
  { icon: "Lock", id: "security", short: "Security", title: "Security", content: ["SwitzerIT SNC implements all appropriate technical and organisational measures to protect your data against unauthorised access, loss, alteration or disclosure.", "The website is served exclusively via HTTPS (encrypted connection)."] },
  { icon: "RefreshCw", id: "changes", short: "Changes", title: "Changes", content: ["We reserve the right to update this privacy policy at any time to reflect legal or technical developments.", "The last update date is shown at the bottom of this page. We encourage you to check it regularly."] },
  { icon: "Mail", id: "contact", short: "Contact", title: "Contact & Complaints", content: ["For any questions about this policy or to exercise your rights, contact us:", "Email: contact@switzerit.com", "Post: SwitzerIT SNC, Route de Villars 15, 1867 Ollon VD, Switzerland", "If you believe that the processing of your data does not comply with the law, you have the right to lodge a complaint with the Federal Data Protection and Information Commissioner (FDPIC): www.edoeb.admin.ch"] },
];

export default function PolitiqueConfidentialite() {
  const { ln } = useLan();
  const isFr = ln !== 'en';
  const sections = isFr ? sectionsFr : sectionsEn;
  const [active, setActive] = useState(sections[0].id);

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Bredcrubm
        title={isFr ? "Politique de confidentialité" : "Privacy Policy"}
        subtitle={isFr ? "Comment SwitzerIT SNC collecte, utilise et protège vos données personnelles" : "How SwitzerIT SNC collects, uses and protects your personal data"}
      />

      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
            {sections.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${active === s.id ? 'bg-red-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {s.short}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
        {sections.map((section, i) => {
          const Icon = iconMap[section.icon];
          return (
            <div key={section.id} id={section.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden scroll-mt-20">
              <div className="flex items-center gap-4 px-6 py-5 border-l-4 border-red-600">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 flex-shrink-0">
                  {Icon && <Icon className="w-5 h-5 text-red-600" />}
                </div>
                <div>
                  <span className="text-xs font-semibold text-red-500 uppercase tracking-widest">Article {i + 1}</span>
                  <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
                </div>
              </div>
              <div className="px-6 py-5 space-y-3 border-t border-gray-50">
                {section.content.map((line, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed text-sm md:text-base">{line}</p>
                ))}
              </div>
            </div>
          );
        })}
        <p className="text-xs text-gray-400 text-right pt-2 pb-8">
          {isFr ? "Dernière mise à jour : mai 2026" : "Last updated: May 2026"}
        </p>
      </div>
    </>
  );
}
