import { model, models, Schema } from "mongoose";

// ServicesPage schema
const serviceOfferSchama = new Schema({
    sOfferTitle: {
        type: String,
        required: true,
    },
    sOfferDesscription: {
        type: String,
        required: true,
    },
    sOfferList: {
        type: Array,
        required: true,
    }

})


// ServicesPage model
const ServiceOffer = models.Student || model("ServiceOffer", serviceOfferSchama);
export default ServiceOffer;