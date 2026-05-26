import Advice from "@/component/Home/Advice";
import Hero from "@/component/Home/Hero";
import Services from "@/component/Home/Services";
import WhyChooseSwitzerIT from "@/component/Home/Whychoose";
import TestimonialsMarquee from "@/component/Home/TestimonialsMarquee";

export default function page() {
  return (
    <>
      <Hero />
      <div style={{ marginTop: "-80px", position: "relative", zIndex: 10 }}>
        <TestimonialsMarquee />
      </div>
      <Services />
      <WhyChooseSwitzerIT />
      <Advice />
    </>
  )
}
