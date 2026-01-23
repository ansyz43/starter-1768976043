import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-gray-500">{t.footer.copyright}</p>
          <p className="text-sm text-gray-400">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
