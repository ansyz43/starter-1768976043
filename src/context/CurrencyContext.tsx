import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Currency } from "@/data/content";
import { formatPrice } from "@/data/pricing";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  formatAmount: (amountRub: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("octarine-currency");
      if (stored === "rub" || stored === "usd") return stored;
    }
    return "rub";
  });

  const setCurrency = (curr: Currency) => {
    setCurrencyState(curr);
    localStorage.setItem("octarine-currency", curr);
  };

  useEffect(() => {
    const stored = localStorage.getItem("octarine-currency");
    if (stored === "rub" || stored === "usd") {
      setCurrencyState(stored);
    }
  }, []);

  const formatAmount = (amountRub: number) => formatPrice(amountRub, currency);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatAmount }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
