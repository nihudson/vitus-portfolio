import Advice from "@/component/Home/Advice";
import Hero from "@/component/Home/Hero";
import Services from "@/component/Home/Services";
import WhyChooseSwitzerIT from "@/component/Home/Whychoose";
import Testimonials from "@/component/Home/Testimonials";
import TestimonialsMarquee from "@/component/Home/TestimonialsMarquee";

export default function page() {
  return (
    <>
      <Hero />
      <div style={{ marginTop: "-150px", position: "relative", zIndex: 20 }}>
        <TestimonialsMarquee />
      </div>
      <Services />
      <WhyChooseSwitzerIT />
      <Testimonials />
      <Advice />
    </>
  )
}
