'use client'

import ValuesSection from "@/component/about/Values";
import Whoweare from "@/component/about/Whoweare";
import Bredcrubm from "@/component/common/Bred";
import MissionSection from "@/component/service/Mission";
import en from "@/content/about/en.json";
import fr from "@/content/about/fr.json";
import useLan from "@/stores/store/useLan";
import lanChooser from "@/utiliy/lanChooser";

export default function page() {

  const { ln } = useLan();
  const currentlan = lanChooser(ln, fr, en);


  return (
    <>
      <Bredcrubm title={currentlan?.pageTitle} subtitle={currentlan?.pageDescripion} />
      <Whoweare w={currentlan} />
      <ValuesSection v={currentlan} />
      <MissionSection m={currentlan} />
    </>
  )
}
