'use client'

import Breadcrumb from "@/component/common/Bred";
import ContactSection from "@/component/contact/Contactform";
import en from "@/content/contactus/en.json";
import fr from "@/content/contactus/fr.json";
import useLan from "@/stores/store/useLan";
import lanChooser from "@/utiliy/lanChooser";

export default function page() {


    const { ln } = useLan();
    const currentlan = lanChooser(ln, fr, en);



    return (
        <div>
            <Breadcrumb
                title={currentlan?.pageTitle}
                subtitle={currentlan?.pageSubTitle}
                extra={currentlan?.description}
            />
            <ContactSection l={currentlan} />
        </div>
    )
}
