import { Header } from "./Header";
import { Hero } from "./Hero";
import { Results } from "./Results";
import { Problems } from "./Problems";
import { Services } from "./Services";
import { Works } from "./Works";
import { PricingEstimator } from "./PricingEstimator";
import { PricingExamples } from "./PricingExamples";
import { Process } from "./Process";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Results />
        <Problems />
        <Services />
        <Works />
        <PricingEstimator />
        <PricingExamples />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
