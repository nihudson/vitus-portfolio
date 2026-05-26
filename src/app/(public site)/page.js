import Advice from "@/component/Home/Advice";
import Hero from "@/component/Home/Hero";
import Services from "@/component/Home/Services";
import WhyChooseSwitzerIT from "@/component/Home/Whychoose";

export default function page() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseSwitzerIT />
      <Advice />
    </>
  )
}
