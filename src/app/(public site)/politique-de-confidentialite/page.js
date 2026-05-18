'use client'
import Bredcrubm from "@/component/common/Bred";
import useLan from "@/stores/store/useLan";

export default function PolitiqueConfidentialite() {
  const { ln } = useLan();
  const isFr = ln !== 'en';

  const sections = isFr ? [
    {
      title: "1. Responsable du traitement",
      content: [
        "Le responsable du traitement des données personnelles collectées via ce site est :",
        "SwitzerIT SNC",
        "Route de Villars 15, 1867 Ollon VD, Suisse",
        "IDE : CHE-303.877.142",
        "Email : contact@switzerit.com",
        "Téléphone : +41 77 991 38 73",
      ]
    },
    {
      title: "2. Données collectées",
      content: [
        "Dans le cadre de l'utilisation du site switzerit.com, nous sommes susceptibles de collecter les données suivantes :",
        "— Formulaire de contact : nom, prénom, adresse email, numéro de téléphone (optionnel), message.",
        "— Données de navigation : adresse IP, type de navigateur, pages visitées, durée de visite (via les outils d'analyse).",
        "Aucune donnée sensible (santé, origine ethnique, convictions religieuses, etc.) n'est collectée.",
      ]
    },
    {
      title: "3. Finalités du traitement",
      content: [
        "Les données collectées sont utilisées aux fins suivantes :",
        "— Répondre à vos demandes de contact ou de devis.",
        "— Améliorer nos services et l'expérience utilisateur du site.",
        "— Respecter nos obligations légales.",
        "Nous ne vendons, ne louons et ne partageons pas vos données personnelles avec des tiers à des fins commerciales.",
      ]
    },
    {
      title: "4. Base légale du traitement",
      content: [
        "Le traitement de vos données repose sur les bases légales suivantes, conformément à la Loi fédérale suisse sur la protection des données (LPD) et au Règlement Général sur la Protection des Données (RGPD) :",
        "— Votre consentement (formulaire de contact).",
        "— L'exécution d'un contrat ou de mesures précontractuelles.",
        "— Nos intérêts légitimes (amélioration du service, sécurité du site).",
      ]
    },
    {
      title: "5. Durée de conservation",
      content: [
        "Vos données personnelles sont conservées uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :",
        "— Données de contact : 3 ans à compter du dernier contact.",
        "— Données de facturation : 10 ans (obligation légale suisse).",
        "— Données de navigation : 13 mois maximum.",
        "À l'issue de ces délais, vos données sont supprimées ou anonymisées.",
      ]
    },
    {
      title: "6. Transmission des données",
      content: [
        "Vos données peuvent être transmises aux prestataires techniques suivants, dans le cadre strict de leur mission :",
        "— EmailJS (envoi de formulaires de contact) — politique disponible sur emailjs.com",
        "— Vercel Inc. (hébergement du site) — politique disponible sur vercel.com/legal/privacy-policy",
        "Ces prestataires agissent en tant que sous-traitants et sont tenus de respecter la confidentialité de vos données.",
        "Aucune donnée n'est transférée à des tiers à des fins publicitaires ou commerciales.",
      ]
    },
    {
      title: "7. Vos droits",
      content: [
        "Conformément à la LPD suisse et au RGPD européen, vous disposez des droits suivants sur vos données personnelles :",
        "— Droit d'accès : obtenir une copie de vos données.",
        "— Droit de rectification : corriger des données inexactes.",
        "— Droit à l'effacement : demander la suppression de vos données.",
        "— Droit à la portabilité : recevoir vos données dans un format structuré.",
        "— Droit d'opposition : vous opposer à un traitement basé sur nos intérêts légitimes.",
        "Pour exercer ces droits, contactez-nous à : contact@switzerit.com",
        "Nous nous engageons à répondre à votre demande dans un délai de 30 jours.",
      ]
    },
    {
      title: "8. Cookies",
      content: [
        "Le site switzerit.com utilise des cookies techniques nécessaires à son bon fonctionnement (gestion des sessions, préférence de langue).",
        "Ces cookies ne collectent pas de données personnelles à des fins publicitaires et ne nécessitent pas votre consentement explicite.",
        "Vous pouvez configurer votre navigateur pour refuser ou supprimer les cookies à tout moment, mais certaines fonctionnalités du site pourraient ne plus être disponibles.",
      ]
    },
    {
      title: "9. Sécurité",
      content: [
        "SwitzerIT SNC met en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation.",
        "Le site est servi exclusivement via HTTPS (connexion chiffrée).",
      ]
    },
    {
      title: "10. Modifications",
      content: [
        "Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment pour refléter les évolutions légales ou techniques.",
        "La date de dernière mise à jour est indiquée en bas de cette page. Nous vous encourageons à la consulter régulièrement.",
      ]
    },
    {
      title: "11. Contact & réclamations",
      content: [
        "Pour toute question relative à cette politique ou pour exercer vos droits, contactez-nous :",
        "Email : contact@switzerit.com",
        "Courrier : SwitzerIT SNC, Route de Villars 15, 1867 Ollon VD, Suisse",
        "Si vous estimez que le traitement de vos données n'est pas conforme à la loi, vous avez le droit d'introduire une réclamation auprès du Préposé fédéral à la protection des données et à la transparence (PFPDT) : www.edoeb.admin.ch",
      ]
    },
  ] : [
    {
      title: "1. Data Controller",
      content: [
        "The controller responsible for processing personal data collected through this website is:",
        "SwitzerIT SNC",
        "Route de Villars 15, 1867 Ollon VD, Switzerland",
        "IDE: CHE-303.877.142",
        "Email: contact@switzerit.com",
        "Phone: +41 77 991 38 73",
      ]
    },
    {
      title: "2. Data Collected",
      content: [
        "When using the switzerit.com website, we may collect the following data:",
        "— Contact form: first name, last name, email address, phone number (optional), message.",
        "— Navigation data: IP address, browser type, pages visited, visit duration (via analytics tools).",
        "No sensitive data (health, ethnic origin, religious beliefs, etc.) is collected.",
      ]
    },
    {
      title: "3. Purposes of Processing",
      content: [
        "The data collected is used for the following purposes:",
        "— Responding to your contact or quote requests.",
        "— Improving our services and website user experience.",
        "— Complying with our legal obligations.",
        "We do not sell, rent or share your personal data with third parties for commercial purposes.",
      ]
    },
    {
      title: "4. Legal Basis for Processing",
      content: [
        "The processing of your data is based on the following legal grounds, in accordance with the Swiss Federal Act on Data Protection (FADP) and the General Data Protection Regulation (GDPR):",
        "— Your consent (contact form).",
        "— Performance of a contract or pre-contractual measures.",
        "— Our legitimate interests (service improvement, website security).",
      ]
    },
    {
      title: "5. Retention Period",
      content: [
        "Your personal data is retained only for as long as necessary for the purposes for which it was collected:",
        "— Contact data: 3 years from the last contact.",
        "— Billing data: 10 years (Swiss legal obligation).",
        "— Navigation data: maximum 13 months.",
        "After these periods, your data is deleted or anonymised.",
      ]
    },
    {
      title: "6. Data Transfers",
      content: [
        "Your data may be passed on to the following technical service providers, strictly within the scope of their mission:",
        "— EmailJS (contact form delivery) — policy available at emailjs.com",
        "— Vercel Inc. (website hosting) — policy available at vercel.com/legal/privacy-policy",
        "These providers act as data processors and are bound to respect the confidentiality of your data.",
        "No data is transferred to third parties for advertising or commercial purposes.",
      ]
    },
    {
      title: "7. Your Rights",
      content: [
        "Under Swiss FADP and European GDPR, you have the following rights over your personal data:",
        "— Right of access: obtain a copy of your data.",
        "— Right of rectification: correct inaccurate data.",
        "— Right to erasure: request deletion of your data.",
        "— Right to portability: receive your data in a structured format.",
        "— Right to object: object to processing based on our legitimate interests.",
        "To exercise these rights, contact us at: contact@switzerit.com",
        "We commit to responding to your request within 30 days.",
      ]
    },
    {
      title: "8. Cookies",
      content: [
        "The switzerit.com website uses technical cookies necessary for its proper operation (session management, language preference).",
        "These cookies do not collect personal data for advertising purposes and do not require your explicit consent.",
        "You can configure your browser to refuse or delete cookies at any time, but some website features may no longer be available.",
      ]
    },
    {
      title: "9. Security",
      content: [
        "SwitzerIT SNC implements all appropriate technical and organisational measures to protect your data against unauthorised access, loss, alteration or disclosure.",
        "The website is served exclusively via HTTPS (encrypted connection).",
      ]
    },
    {
      title: "10. Changes",
      content: [
        "We reserve the right to update this privacy policy at any time to reflect legal or technical developments.",
        "The last update date is shown at the bottom of this page. We encourage you to check it regularly.",
      ]
    },
    {
      title: "11. Contact & Complaints",
      content: [
        "For any questions about this policy or to exercise your rights, contact us:",
        "Email: contact@switzerit.com",
        "Post: SwitzerIT SNC, Route de Villars 15, 1867 Ollon VD, Switzerland",
        "If you believe that the processing of your data does not comply with the law, you have the right to lodge a complaint with the Federal Data Protection and Information Commissioner (FDPIC): www.edoeb.admin.ch",
      ]
    },
  ];

  return (
    <>
      <Bredcrubm
        title={isFr ? "Politique de confidentialité" : "Privacy Policy"}
        subtitle={isFr
          ? "Comment SwitzerIT SNC collecte, utilise et protège vos données personnelles"
          : "How SwitzerIT SNC collects, uses and protects your personal data"}
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
