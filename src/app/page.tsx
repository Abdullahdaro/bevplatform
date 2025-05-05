import Hero from "@sections/Hero";
import HowItWorks from "@sections/HowItWorks";
import StepsSection from "@sections/StepsSection";
import FAQ from "@sections/FAQ";

export default function Home() {
  return (
    <div className="">
       <Hero />
        <HowItWorks />
        <StepsSection />
        <FAQ />
    </div>
  );
}
