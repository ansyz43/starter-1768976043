import { LanguageProvider } from "@/context/LanguageContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { LandingPage } from "@/components/landing/LandingPage";

function Home() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <LandingPage />
      </CurrencyProvider>
    </LanguageProvider>
  );
}

export default Home;
