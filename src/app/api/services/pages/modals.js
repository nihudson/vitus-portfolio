import { model, models, Schema } from "mongoose";

// ServicesPage schema
const servicepageSchama = new Schema({
    pageTitle: {
        type: String,
        required: true,
    },
    pagesubTitle: {
        type: String,
        required: true,
        unique: true,
    },
    pageDescription: {
        type: String,
        required: true,
    },

    pagebottomTitle: {
        type: String,
        required: true,
    },
    pagebottomDescription: {
        type: String,
        required: true,
    },

    pageBottomLinkTitle: {
        type: String,
        required: true,
    }

})


// ServicesPage model
const ServicesPage = models.Student || model("ServicesPage", servicepageSchama);
export default ServicesPage;