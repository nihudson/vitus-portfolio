import { model, models, Schema } from "mongoose";

// Footer schema
const aboutSchema = new Schema({
    logo: {
        type: String, // URL or file name of the logo
        required: true,
    },
    description: {
        type: String, // Short description about the company
        required: true,
    },
    navigation: [
        {
            title: { type: String, required: true }, // e.g., "Accueil"
            link: { type: String, required: true }, // e.g., "/home"
        }
    ],
    services: [
        {
            title: { type: String, required: true }, // e.g., "Assistance et support"
            link: { type: String, required: true }, // e.g., "/services/support"
        }
    ],
    contact: [
        {
            title: { type: String, required: true }, // e.g., "Contactez-nous"
            link: { type: String, required: true }, // e.g., "/contact"
        }
    ],
    copyright: {
        text: { type: String, required: true }, // e.g., "© 2026 SwitzerIT. Tous droits réservés."
        legalLinks: [
            {
                title: { type: String, required: true }, // e.g., "Mentions légales"
                link: { type: String, required: true } // e.g., "/legal"
            }
        ]
    }
});

// Footer model
const About = models.About || model("About", aboutSchema);
export default About;
