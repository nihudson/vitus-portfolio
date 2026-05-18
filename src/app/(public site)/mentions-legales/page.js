'use client'
import Bredcrubm from "@/component/common/Bred";
import useLan from "@/stores/store/useLan";
import { Building2, Server, ShieldCheck, Link2, AlertCircle, Scale, Mail } from "lucide-react";
import { useState } from "react";

const iconMap = { Building2, Server, ShieldCheck, Link2, AlertCircle, Scale, Mail };

const sectionsFr = [
  { icon: "Building2", id: "editeur", title: "Éditeur du site", content: ["Le site switzerit.com est édité par :", "SwitzerIT SNC", "Forme juridique : Société en nom collectif (SNC)", "Siège social : Route de Villars 15, 1867 Ollon VD, Suisse", "Numéro IDE : CHE-303.877.142", "Numéro CH-ID : CH-550-1255758-8", "Email : contact@switzerit.com", "Téléphone : +41 77 991 38 73"] },
  { icon: "Server", id: "hebergement", title: "Hébergement", content: ["Le site est hébergé par :", "Vercel Inc.", "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis", "Site web : https://vercel.com"] },
  { icon: "ShieldCheck", id: "propriete", title: "Propriété intellectuelle", content: ["La structure globale, le code, les textes, illustrations et éléments graphiques intégrés à ce site sont la propriété exclusive de SwitzerIT SNC.", "Toute reproduction, partielle ou totale du contenu de ce site, par quelque méthode que ce soit, sans l'autorisation préalable écrite de SwitzerIT SNC est strictement interdite et constitue une violation de la Loi fédérale sur le droit d'auteur (LDA, RS 231.1).", "La copie à usage strictement privé est tolérée conformément à l'article 19 LDA. Toute reproduction à des fins commerciales ou publiques sans accord écrit de SwitzerIT SNC est totalement interdite."] },
  { icon: "Link2", id: "liens", title: "Liens hypertextes", content: ["Le site switzerit.com peut contenir des liens vers des sites tiers. SwitzerIT SNC ne contrôle pas ces sites et décline toute responsabilité quant à leur contenu, leurs pratiques en matière de confidentialité ou leur disponibilité.", "La création de liens vers le site switzerit.com est autorisée sans accord préalable, à condition que le lien ne soit pas trompeur et ne porte pas atteinte à l'image de SwitzerIT SNC."] },
  { icon: "AlertCircle", id: "responsabilite", title: "Limitation de responsabilité", content: ["SwitzerIT SNC s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.", "SwitzerIT SNC se réserve le droit de corriger, à tout moment et sans préavis, le contenu de ce site. Elle ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation de ce site."] },
  { icon: "Scale", id: "droit", title: "Droit applicable", content: ["Les présentes mentions légales sont soumises au droit suisse. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents du Canton de Vaud seront seuls compétents."] },
  { icon: "Mail", id: "contact", title: "Contact", content: ["Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :", "Par email : contact@switzerit.com", "Par téléphone : +41 77 991 38 73", "Par courrier : SwitzerIT SNC, Route de Villars 15, 1867 Ollon VD, Suisse"] },
];

const sectionsEn = [
  { icon: "Building2", id: "publisher", title: "Website Publisher", content: ["The website switzerit.com is published by:", "SwitzerIT SNC", "Legal form: General Partnership (Société en nom collectif)", "Registered office: Route de Villars 15, 1867 Ollon VD, Switzerland", "IDE Number: CHE-303.877.142", "CH-ID Number: CH-550-1255758-8", "Email: contact@switzerit.com", "Phone: +41 77 991 38 73"] },
  { icon: "Server", id: "hosting", title: "Hosting", content: ["The website is hosted by:", "Vercel Inc.", "440 N Barranca Ave #4133, Covina, CA 91723, United States", "Website: https://vercel.com"] },
  { icon: "ShieldCheck", id: "ip", title: "Intellectual Property", content: ["All content on this website (texts, images, graphics, logo, icons, sounds, software, etc.) is the exclusive property of SwitzerIT SNC, unless otherwise stated.", "Any reproduction, representation, modification, publication, adaptation or exploitation, in whole or in part, of this website or its content, by any means whatsoever, is strictly prohibited without the prior written consent of SwitzerIT SNC.", "Any violation of these provisions may result in civil and criminal proceedings."] },
  { icon: "Link2", id: "links", title: "Hyperlinks", content: ["The switzerit.com website may contain links to third-party websites. SwitzerIT SNC does not control these sites and accepts no responsibility for their content, privacy practices or availability.", "Linking to the switzerit.com website is permitted without prior agreement, provided that the link is not misleading and does not damage the image of SwitzerIT SNC."] },
  { icon: "AlertCircle", id: "liability", title: "Limitation of Liability", content: ["SwitzerIT SNC endeavours to ensure the accuracy and currency of the information published on this website. However, it cannot guarantee the accuracy, precision or completeness of the information made available.", "SwitzerIT SNC reserves the right to correct, at any time and without notice, the content of this website. It cannot be held liable for direct or indirect damages resulting from the use of this website."] },
  { icon: "Scale", id: "law", title: "Applicable Law", content: ["These legal notices are governed by Swiss law. In the event of a dispute, and failing an amicable resolution, the competent courts of the Canton of Vaud shall have sole jurisdiction."] },
  { icon: "Mail", id: "contact", title: "Contact", content: ["For any questions regarding these legal notices, you can contact us:", "By email: contact@switzerit.com", "By phone: +41 77 991 38 73", "By post: SwitzerIT SNC, Route de Villars 15, 1867 Ollon VD, Switzerland"] },
];

export default function MentionsLegales() {
  const { ln } = useLan();
  const isFr = ln !== 'en';
  const sections = isFr ? sectionsFr : sectionsEn;
  const [active, setActive] = useState(sections[0].id);

  return (
    <>
      <Bredcrubm
        title={isFr ? "Mentions légales" : "Legal Notice"}
        subtitle={isFr ? "Informations légales relatives au site switzerit.com" : "Legal information relating to the switzerit.com website"}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-6 bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                {isFr ? "Sommaire" : "Contents"}
              </p>
              <nav className="space-y-1">
                {sections.map((s, i) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <button
                      key={s.id}
                      onClick={() => { setActive(s.id); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-all duration-200 ${active === s.id ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                    >
                      {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                      <span>{i + 1}. {s.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          <main className="flex-1 space-y-6">
            {sections.map((section, i) => {
              const Icon = iconMap[section.icon];
              return (
                <div key={section.id} id={section.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden scroll-mt-6">
                  <div className="flex items-center gap-4 px-6 py-5 border-l-4 border-red-600">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 flex-shrink-0">
                      {Icon && <Icon className="w-5 h-5 text-red-600" />}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-red-500 uppercase tracking-widest">
                        {isFr ? `Article ${i + 1}` : `Article ${i + 1}`}
                      </span>
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
          </main>
        </div>
      </div>
    </>
  );
}
