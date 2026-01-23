import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Works() {
  const { t, language } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    videoUrl: string;
  } | null>(null);
  const [activeFilter, setActiveFilter] = useState(0);

  const categoryMap: Record<string, number> = language === "ru" 
    ? {
        "Реклама": 1,
        "Вирусное": 2,
        "Кино": 3,
        "Стиль": 4,
        "Соцсети": 5,
      }
    : {
        "Ads": 1,
        "Viral": 2,
        "Cinematic": 3,
        "Style": 4,
        "Social": 5,
      };

  const filteredCards =
    activeFilter === 0
      ? t.works.cards
      : t.works.cards.filter((card) => categoryMap[card.category] === activeFilter);

  return (
    <section id="works" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
            {t.works.title}
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {t.works.categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === index
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredCards.map((card, index) => (
            <motion.div
              key={`${card.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                {card.thumbnail.endsWith('.mp4') ? (
                  <video
                    src={card.thumbnail}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Play Button */}
                <button
                  onClick={() =>
                    setSelectedVideo({ title: card.title, videoUrl: card.videoUrl })
                  }
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label={`Play ${card.title}`}
                >
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-gray-900 ml-0.5" />
                  </div>
                </button>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-xs line-clamp-2">
                    {card.description}
                  </p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900">
                    {card.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent 
          className="max-w-[98vw] w-[98vw] max-h-[98vh] p-2"
          onPointerDownOutside={() => setSelectedVideo(null)}
        >
          <DialogHeader className="pb-2">
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div 
            className="w-full h-[85vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center"
            onClick={(e) => {
              // Закрываем только если клик был на контейнере, а не на видео
              if (e.target === e.currentTarget) {
                setSelectedVideo(null);
              }
            }}
          >
            {selectedVideo?.videoUrl ? (
              <video 
                controls 
                autoPlay
                className="max-w-full max-h-full"
                src={selectedVideo.videoUrl}
                onClick={(e) => e.stopPropagation()}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                {language === "ru" ? "Ваш браузер не поддерживает видео." : "Your browser does not support the video tag."}
              </video>
            ) : (
              <p className="text-white/60 text-sm flex items-center justify-center h-full">
                {language === "ru" ? "Видео плеер (демо)" : "Video player (demo)"}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
