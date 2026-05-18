'use client'
import Bredcrubm from "@/component/common/Bred";
import useLan from "@/stores/store/useLan";
import { Building2, Server, ShieldCheck, Link2, AlertCircle, Scale, Mail, Lock, FileText } from "lucide-react";

const sectionsFr = [
  {
    icon: "Building2",
    title: "1. Éditeur du site",
    content: [
      "Le site switzerit.com est édité par :",
      "SwitzerIT SNC",
      "Forme juridique : Société en nom collectif (SNC)",
      "Siège social : Route de Villars 15, 1867 Ollon VD, Suisse",
      "Numéro IDE : CHE-303.877.142",
      "Numéro CH-ID : CH-550-1255758-8",
      "Email : contact@switzerit.com",
      "Téléphone : +41 77 991 38 73",
    ]
  },
  {
    icon: "Server",
    title: "2. Hébergement",
    content: [
      "Le site est hébergé par :",
      "Vercel Inc.",
      "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      "Site web : https://vercel.com",
    ]
  },
  {
    icon: "ShieldCheck",
    title: "3. Propriété intellectuelle",
    content: [
      "L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive de SwitzerIT SNC, sauf mention contraire.",
      "Toute reproduction, représentation, modification, publication, adaptation ou exploitation, totale ou partielle, de ce site ou de son contenu, par quelque procédé que ce soit, est strictement interdite sans l'autorisation préalable et écrite de SwitzerIT SNC.",
      "Toute violation de ces dispositions peut entraîner des poursuites civiles et pénales.",
    ]
  },
  {
    icon: "Link2",
    title: "4. Liens hypertextes",
    content: [
      "Le site switzerit.com peut contenir des liens vers des sites tiers. SwitzerIT SNC ne contrôle pas ces sites et décline toute responsabilité quant à leur contenu, leurs pratiques en matière de confidentialité ou leur disponibilité.",
      "La création de liens vers le site switzerit.com est autorisée sans accord préalable, à condition que le lien ne soit pas trompeur et ne porte pas atteinte à l'image de SwitzerIT SNC.",
    ]
  },
  {
    icon: "AlertCircle",
    title: "5. Limitation de responsabilité",
    content: [
      "SwitzerIT SNC s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.",
      "SwitzerIT SNC se réserve le droit de corriger, à tout moment et sans préavis, le contenu de ce site. Elle ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation de ce site.",
    ]
  },
  {
    icon: "Scale",
    title: "6. Droit applicable",
    content: [
      "Les présentes mentions légales sont soumises au droit suisse. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents du Canton de Vaud seront seuls compétents.",
    ]
  },
  {
    icon: "Mail",
    title: "7. Contact",
    content: [
      "Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :",
      "Par email : contact@switzerit.com",
      "Par téléphone : +41 77 991 38 73",
      "Par courrier : SwitzerIT SNC, Route de Villars 15, 1867 Ollon VD, Suisse",
    ]
  },
];

const sectionsEn = [
  {
    icon: "Building2",
    title: "1. Website Publisher",
    content: [
      "The website switzerit.com is published by:",
      "SwitzerIT SNC",
      "Legal form: General Partnership (Société en nom collectif)",
      "Registered office: Route de Villars 15, 1867 Ollon VD, Switzerland",
      "IDE Number: CHE-303.877.142",
      "CH-ID Number: CH-550-1255758-8",
      "Email: contact@switzerit.com",
      "Phone: +41 77 991 38 73",
    ]
  },
  {
    icon: "Server",
    title: "2. Hosting",
    content: [
      "The website is hosted by:",
      "Vercel Inc.",
      "440 N Barranca Ave #4133, Covina, CA 91723, United States",
      "Website: https://vercel.com",
    ]
  },
  {
    icon: "ShieldCheck",
    title: "3. Intellectual Property",
    content: [
      "All content on this website (texts, images, graphics, logo, icons, sounds, software, etc.) is the exclusive property of SwitzerIT SNC, unless otherwise stated.",
      "Any reproduction, representation, modification, publication, adaptation or exploitation, in whole or in part, of this website or its content, by any means whatsoever, is strictly prohibited without the prior written consent of SwitzerIT SNC.",
      "Any violation of these provisions may result in civil and criminal proceedings.",
    ]
  },
  {
    icon: "Link2",
    title: "4. Hyperlinks",
    content: [
      "The switzerit.com website may contain links to third-party websites. SwitzerIT SNC does not control these sites and accepts no responsibility for their content, privacy practices or availability.",
      "Linking to the switzerit.com website is permitted without prior agreement, provided that the link is not misleading and does not damage the image of SwitzerIT SNC.",
    ]
  },
  {
    icon: "AlertCircle",
    title: "5. Limitation of Liability",
    content: [
      "SwitzerIT SNC endeavours to ensure the accuracy and currency of the information published on this website. However, it cannot guarantee the accuracy, precision or completeness of the information made available.",
      "SwitzerIT SNC reserves the right to correct, at any time and without notice, the content of this website. It cannot be held liable for direct or indirect damages resulting from the use of this website.",
    ]
  },
  {
    icon: "Scale",
    title: "6. Applicable Law",
    content: [
      "These legal notices are governed by Swiss law. In the event of a dispute, and failing an amicable resolution, the competent courts of the Canton of Vaud shall have sole jurisdiction.",
    ]
  },
  {
    icon: "Mail",
    title: "7. Contact",
    content: [
      "For any questions regarding these legal notices, you can contact us:",
      "By email: contact@switzerit.com",
      "By phone: +41 77 991 38 73",
      "By post: SwitzerIT SNC, Route de Villars 15, 1867 Ollon VD, Switzerland",
    ]
  },
];

const iconMap = { Building2, Server, ShieldCheck, Link2, AlertCircle, Scale, Mail, Lock, FileText };

export default function MentionsLegales() {
  const { ln } = useLan();
  const isFr = ln !== 'en';
  const sections = isFr ? sectionsFr : sectionsEn;

  return (
    <>
      <div className="bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-10 bg-red-600 rounded" />
            <span className="text-red-500 font-semibold text-sm uppercase tracking-widest">
              {isFr ? "Informations légales" : "Legal Information"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {isFr ? "Mentions légales" : "Legal Notice"}
          </h1>
          <p className="text-gray-400 text-lg">
            {isFr
              ? "Informations légales relatives au site switzerit.com"
              : "Legal information relating to the switzerit.com website"}
          </p>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, i) => {
            const Icon = iconMap[section.icon];
            return (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-100">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50">
                    {Icon && <Icon className="w-5 h-5 text-red-600" />}
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="px-6 py-5 space-y-3">
                  {section.content.map((line, j) => (
                    <p key={j} className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="text-center text-xs text-gray-400 pt-4 pb-8">
            {isFr ? "Dernière mise à jour : mai 2026" : "Last updated: May 2026"}
          </p>
        </div>
      </div>
    </>
  );
}
