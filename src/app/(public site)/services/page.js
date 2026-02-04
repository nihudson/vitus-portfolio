'use client'

import Breadcrumb from "@/component/common/Bred";
import ServiceCards from "@/component/service/Servicelist";
import en from "@/content/services/en.json";
import fr from "@/content/services/fr.json";
import useLan from "@/stores/store/useLan";
import lanChooser from "@/utiliy/lanChooser";

export default function page() {

  const { ln } = useLan();
  const currentlan = lanChooser(ln, fr, en);

  return (
    <>
      <Breadcrumb
        title={currentlan?.pageTitle}
        subtitle={currentlan?.pageSubTitle}
        extra={currentlan?.description}
      />
      <ServiceCards l={currentlan} />
    </>
  )
}
