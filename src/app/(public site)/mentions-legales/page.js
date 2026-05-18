'use client'
import Bredcrubm from "@/component/common/Bred";
import useLan from "@/stores/store/useLan";

export default function MentionsLegales() {
  const { ln } = useLan();
  const isFr = ln !== 'en';

  const sections = isFr ? [
    {
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
      title: "2. Hébergement",
      content: [
        "Le site est hébergé par :",
        "Vercel Inc.",
        "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
        "Site web : https://vercel.com",
      ]
    },
    {
      title: "3. Propriété intellectuelle",
      content: [
        "L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive de SwitzerIT SNC, sauf mention contraire.",
        "Toute reproduction, représentation, modification, publication, adaptation ou exploitation, totale ou partielle, de ce site ou de son contenu, par quelque procédé que ce soit, est strictement interdite sans l'autorisation préalable et écrite de SwitzerIT SNC.",
        "Toute violation de ces dispositions peut entraîner des poursuites civiles et pénales.",
      ]
    },
    {
      title: "4. Liens hypertextes",
      content: [
        "Le site switzerit.com peut contenir des liens vers des sites tiers. SwitzerIT SNC ne contrôle pas ces sites et décline toute responsabilité quant à leur contenu, leurs pratiques en matière de confidentialité ou leur disponibilité.",
        "La création de liens vers le site switzerit.com est autorisée sans accord préalable, à condition que le lien ne soit pas trompeur et ne porte pas atteinte à l'image de SwitzerIT SNC.",
      ]
    },
    {
      title: "5. Limitation de responsabilité",
      content: [
        "SwitzerIT SNC s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.",
        "SwitzerIT SNC se réserve le droit de corriger, à tout moment et sans préavis, le contenu de ce site. Elle ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation de ce site.",
      ]
    },
    {
      title: "6. Droit applicable",
      content: [
        "Les présentes mentions légales sont soumises au droit suisse. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents du Canton de Vaud seront seuls compétents.",
      ]
    },
    {
      title: "7. Contact",
      content: [
        "Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :",
        "Par email : contact@switzerit.com",
        "Par téléphone : +41 77 991 38 73",
        "Par courrier : SwitzerIT SNC, Route de Villars 15, 1867 Ollon VD, Suisse",
      ]
    },
  ] : [
    {
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
      title: "2. Hosting",
      content: [
        "The website is hosted by:",
        "Vercel Inc.",
        "440 N Barranca Ave #4133, Covina, CA 91723, United States",
        "Website: https://vercel.com",
      ]
    },
    {
      title: "3. Intellectual Property",
      content: [
        "All content on this website (texts, images, graphics, logo, icons, sounds, software, etc.) is the exclusive property of SwitzerIT SNC, unless otherwise stated.",
        "Any reproduction, representation, modification, publication, adaptation or exploitation, in whole or in part, of this website or its content, by any means whatsoever, is strictly prohibited without the prior written consent of SwitzerIT SNC.",
        "Any violation of these provisions may result in civil and criminal proceedings.",
      ]
    },
    {
      title: "4. Hyperlinks",
      content: [
        "The switzerit.com website may contain links to third-party websites. SwitzerIT SNC does not control these sites and accepts no responsibility for their content, privacy practices or availability.",
        "Linking to the switzerit.com website is permitted without prior agreement, provided that the link is not misleading and does not damage the image of SwitzerIT SNC.",
      ]
    },
    {
      title: "5. Limitation of Liability",
      content: [
        "SwitzerIT SNC endeavours to ensure the accuracy and currency of the information published on this website. However, it cannot guarantee the accuracy, precision or completeness of the information made available.",
        "SwitzerIT SNC reserves the right to correct, at any time and without notice, the content of this website. It cannot be held liable for direct or indirect damages resulting from the use of this website.",
      ]
    },
    {
      title: "6. Applicable Law",
      content: [
        "These legal notices are governed by Swiss law. In the event of a dispute, and failing an amicable resolution, the competent courts of the Canton of Vaud shall have sole jurisdiction.",
      ]
    },
    {
      title: "7. Contact",
      content: [
        "For any questions regarding these legal notices, you can contact us:",
        "By email: contact@switzerit.com",
        "By phone: +41 77 991 38 73",
        "By post: SwitzerIT SNC, Route de Villars 15, 1867 Ollon VD, Switzerland",
      ]
    },
  ];

  return (
    <>
      <Bredcrubm
        title={isFr ? "Mentions légales" : "Legal Notice"}
        subtitle={isFr
          ? "Informations légales relatives au site switzerit.com"
          : "Legal information relating to the switzerit.com website"}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="border-b border-gray-200 pb-8 last:border-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <div className="space-y-2">
                {section.content.map((line, j) => (
                  <p key={j} className="text-gray-700 leading-relaxed">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-10">
          {isFr ? "Dernière mise à jour : mai 2026" : "Last updated: May 2026"}
        </p>
      </div>
    </>
  );
}
