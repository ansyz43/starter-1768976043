import { useLanguage } from "@/context/LanguageContext";
import { scrollToSection } from "@/utils/scrollTo";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.1]"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => scrollToSection("works")}
              variant="outline"
              className="w-full sm:w-auto rounded-full px-6 py-6 text-base font-medium border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              <Play className="w-4 h-4 mr-2" />
              {t.hero.cta1}
            </Button>
            <Button
              asChild
              className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-medium shadow-md hover:shadow-lg transition-all"
            >
              <a
                href="https://t.me/ansuz43"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.cta2}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 md:mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {t.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-sm md:text-base font-medium text-gray-900 text-center">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
