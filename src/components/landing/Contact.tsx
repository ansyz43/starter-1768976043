import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Copy, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(t.contact.template);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
            {t.contact.title}
          </h2>

          <Button
            asChild
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-10 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <a
              href="https://t.me/ansuz43"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="w-5 h-5 mr-2" />
              {t.contact.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>

        {/* Brief Template */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {t.contact.templateLabel}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="rounded-full"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-1" />
                    {t.contact.copySuccess}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-1" />
                    {t.contact.copyButton}
                  </>
                )}
              </Button>
            </div>

            <Textarea
              readOnly
              value={t.contact.template}
              className="min-h-[180px] resize-none bg-gray-50 border-gray-200 text-gray-700 font-mono text-sm"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
