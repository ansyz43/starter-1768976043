import { useLanguage } from "@/context/LanguageContext";
import { useCurrency } from "@/context/CurrencyContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  calculatePrice,
  ComplexityKey,
  RevisionsKey,
  UrgencyKey,
  AddOnKey,
} from "@/data/pricing";

export function PricingExamples() {
  const { t } = useLanguage();
  const { formatAmount } = useCurrency();

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            {t.pricing.examples.title}
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pricing.examples.cards.map((card, index) => {
            const price = calculatePrice(
              card.duration,
              card.scenes,
              card.complexity as ComplexityKey,
              card.revisions as RevisionsKey,
              card.urgency as UrgencyKey,
              card.addOns as AddOnKey[]
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {card.title}
                </h4>

                <div className="flex flex-wrap gap-2 mb-4">
                  {card.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-2xl font-bold text-gray-900">
                    {formatAmount(price.total)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button
            asChild
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-medium shadow-md hover:shadow-lg transition-all"
          >
            <a
              href="https://t.me/ansuz43"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.pricing.estimator.cta}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
