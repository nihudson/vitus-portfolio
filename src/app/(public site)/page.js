import Advice from "@/component/Home/Advice";
import Hero from "@/component/Home/Hero";
import Services from "@/component/Home/Services";
import WhyChooseSwitzerIT from "@/component/Home/Whychoose";
import TestimonialsMarquee from "@/component/Home/TestimonialsMarquee";

export default function page() {
  return (
    <>
      <Hero />
      <TestimonialsMarquee />
      <Services />
      <WhyChooseSwitzerIT />
      <Advice />
    </>
  )
}
