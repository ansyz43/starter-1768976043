export type Language = "ru" | "en";
export type Currency = "rub" | "usd";

export const FX_USD = 0.011; // 1 RUB = ~0.011 USD

export interface Content {
  header: {
    brand: string;
    nav: string[];
    cta: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta1: string;
    cta2: string;
  };
  highlights: string[];
  results: {
    title: string;
    items: string[];
  };
  problems: {
    title: string;
    cards: Array<{
      pain: string;
      why: string;
      outcome: string;
    }>;
  };
  services: {
    title: string;
    cards: Array<{
      title: string;
      deliverables: string[];
      bestFor: string;
    }>;
  };
  works: {
    title: string;
    categories: string[];
    cards: Array<{
      title: string;
      description: string;
      category: string;
      thumbnail: string;
      videoUrl: string;
    }>;
  };
  pricing: {
    title: string;
    systemName: string;
    baseRule: string;
    baseNote: string;
    factors: string[];
    estimator: {
      durationLabel: string;
      scenesLabel: string;
      complexityLabel: string;
      complexityOptions: { label: string; value: string }[];
      revisionsLabel: string;
      urgencyLabel: string;
      urgencyOptions: { label: string; value: string }[];
      addOnsLabel: string;
      addOnsOptions: { label: string; value: string }[];
      totalLabel: string;
      breakdownLabel: string;
      disclaimer: string;
      cta: string;
      baseDurationLabel: string;
      extraScenesLabel: string;
      complexityMultLabel: string;
      revisionsMultLabel: string;
      urgencyMultLabel: string;
      addOnsSumLabel: string;
      includedScenesLabel: string;
    };
    examples: {
      title: string;
      cards: Array<{
        title: string;
        specs: string[];
        duration: number;
        scenes: number;
        complexity: string;
        revisions: string;
        urgency: string;
        addOns: string[];
      }>;
    };
  };
  process: {
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
    checklist: {
      title: string;
      items: string[];
    };
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    title: string;
    cta: string;
    templateLabel: string;
    template: string;
    copyButton: string;
    copySuccess: string;
  };
  footer: {
    copyright: string;
    disclaimer: string;
  };
}

export const content: Record<Language, Content> = {
  ru: {
    header: {
      brand: "Октарин",
      nav: ["Результаты", "Проблемы", "Услуги", "Работы", "Цены", "Процесс", "FAQ", "Контакт"],
      cta: "Написать в Telegram",
    },
    hero: {
      headline: "Видео, которое цепляет с первой секунды",
      subheadline: "Генеративный AI для брендов: сильные хуки, узнаваемый стиль, быстрое производство. Прозрачная система ценообразования.",
      cta1: "Смотреть работы",
      cta2: "Написать в Telegram",
    },
    highlights: [
      "Hook-first подход",
      "Консистентный стиль",
      "Быстрый workflow",
      "Готовые форматы (9:16 / 16:9 / 1:1)",
    ],
    results: {
      title: "Что вы получаете",
      items: [
        "Готовые к публикации файлы",
        "Экспорт во всех форматах",
        "Варианты хуков для A/B-тестов",
        "Визуальная консистентность",
        "Brand-friendly контент",
        "Быстрые итерации",
      ],
    },
    problems: {
      title: "Проблемы, которые мы решаем",
      cards: [
        {
          pain: "Реклама не цепляет — пролистывают за 1–2 секунды",
          why: "Слабый хук = потерянный бюджет и низкий CTR",
          outcome: "Видео с проработанным хуком, которое удерживает внимание",
        },
        {
          pain: "Креативы выглядят шаблонно",
          why: "Бренд теряется среди конкурентов, нет узнаваемости",
          outcome: "Уникальный визуальный стиль, который запоминается",
        },
        {
          pain: "Хаос в социальных профилях",
          why: "Разные шрифты, цвета — выглядит непрофессионально",
          outcome: "Системный визуальный стиль для всех площадок",
        },
        {
          pain: "Долгие итерации под запуски",
          why: "Упущенные тренды и сорванные дедлайны",
          outcome: "Быстрое производство с понятным workflow",
        },
        {
          pain: "Конкуренты делают круче",
          why: "Они тестируют больше креативов, растут быстрее",
          outcome: "Пакеты вариаций для A/B-тестов и масштабирования",
        },
        {
          pain: "Нужно быстро, но без хаоса",
          why: "Референсы есть, но непонятно, как воплотить",
          outcome: "Чёткий процесс: бриф → оценка → производство → финал",
        },
      ],
    },
    services: {
      title: "Услуги",
      cards: [
        {
          title: "Перформанс-реклама (6–30 сек)",
          deliverables: [
            "Видео с сильным хуком (1–3 сек)",
            "2–3 варианта для A/B-тестов",
            "Экспорт 9:16 / 16:9 / 1:1",
            "Готово к публикации",
          ],
          bestFor: "Таргет, Stories, Reels, TikTok",
        },
        {
          title: "Вирусные клипы / Hook Engineering",
          deliverables: [
            "Цепляющие первые секунды",
            "Trending форматы и переходы",
            "Оптимизация под алгоритмы",
            "Несколько вариантов хуков",
          ],
          bestFor: "Органический рост, виральность",
        },
        {
          title: "Кинематографичные шоты",
          deliverables: [
            "Атмосферные сцены (film-like)",
            "AI-генерация или обработка",
            "Цветокоррекция и стилизация",
            "Музыкальная синхронизация",
          ],
          bestFor: "Имиджевые ролики, музыка, бренд-контент",
        },
        {
          title: "Визуальная система бренда",
          deliverables: [
            "Руководство по визуальному стилю",
            "Цветовая палитра и типографика",
            "Шаблоны для контента",
            "Правила использования",
          ],
          bestFor: "Консистентность на всех площадках",
        },
        {
          title: "Дизайн социальных профилей",
          deliverables: [
            "Обложки и хайлайты",
            "Шаблоны для постов",
            "Единый визуальный код",
            "Адаптация под платформы",
          ],
          bestFor: "Instagram, YouTube, Telegram, VK",
        },
      ],
    },
    works: {
      title: "Работы",
      categories: ["Все", "Реклама"],
      cards: [
        {
          title: "Ювелирный бренд",
          description: "Элегантное видео премиум-класса",
          category: "Реклама",
          thumbnail: "/videos/marketing 1.mp4",
          videoUrl: "/videos/marketing 1.mp4",
        },
        {
          title: "Премиальные украшения",
          description: "Как выделиться среди конкурентов",
          category: "Реклама",
          thumbnail: "/videos/marketing 2.mp4",
          videoUrl: "/videos/marketing 2.mp4",
        },
        {
          title: "Таргет-креатив для одежды",
          description: "Цепляющий визуал для запуска кампании",
          category: "Реклама",
          thumbnail: "/videos/marketing 3.mp4",
          videoUrl: "/videos/marketing 3.mp4",
        },
        {
          title: "Недвижимость на Бали",
          description: "Выделяющееся видео для элитной недвижимости",
          category: "Реклама",
          thumbnail: "/videos/final2.mp4",
          videoUrl: "/videos/final2.mp4",
        },
        {
          title: "Стильные сумки",
          description: "Яркая реклама для модного бренда",
          category: "Реклама",
          thumbnail: "/videos/sumki  (1).mp4",
          videoUrl: "/videos/sumki  (1).mp4",
        },
        {
          title: "Коллекция сумок",
          description: "Динамичная презентация новинок",
          category: "Реклама",
          thumbnail: "/videos/sumki  (2).mp4",
          videoUrl: "/videos/sumki  (2).mp4",
        },
      ],
    },
    pricing: {
      title: "Цены",
      systemName: "Прозрачная система ценообразования",
      baseRule: "База: от 30 000 ₽ за 30 секунд видео",
      baseNote: "Итоговая цена зависит от сложности, количества сцен, правок, срочности и дополнительных услуг",
      factors: [
        "Длительность видео (больше = дешевле за секунду)",
        "Количество сцен (6 включено в базу для 30 сек)",
        "Сложность (от простого до VIP)",
        "Количество раундов правок",
        "Срочность (стандарт, 72ч, 48ч, 24ч)",
        "Дополнительные услуги",
      ],
      estimator: {
        durationLabel: "Длительность (сек)",
        scenesLabel: "Количество сцен",
        complexityLabel: "Сложность",
        complexityOptions: [
          { label: "Простой (×1.0)", value: "simple" },
          { label: "Стандарт (×1.3)", value: "standard" },
          { label: "Премиум (×1.7)", value: "premium" },
          { label: "VIP (×2.4)", value: "golden" },
        ],
        revisionsLabel: "Раунды правок",
        urgencyLabel: "Срочность",
        urgencyOptions: [
          { label: "Стандарт (без наценки)", value: "normal" },
          { label: "72 часа (+20%)", value: "h72" },
          { label: "48 часов (+35%)", value: "h48" },
          { label: "24 часа (+60%)", value: "h24" },
        ],
        addOnsLabel: "Дополнительно",
        addOnsOptions: [
          { label: "Пак хуков (+30 000 ₽)", value: "hookPack" },
          { label: "Соцсети Basic (+25 000 ₽)", value: "socialBasic" },
          { label: "Соцсети Pro (+60 000 ₽)", value: "socialPro" },
          { label: "Стиль Start (+45 000 ₽)", value: "styleStart" },
          { label: "Стиль System (+120 000 ₽)", value: "styleSystem" },
          { label: "Анализ конкурентов (+25 000 ₽)", value: "competitorScan" },
        ],
        totalLabel: "Итого",
        breakdownLabel: "Разбивка",
        disclaimer: "Это предварительная оценка. Финальная цена обсуждается после брифа.",
        cta: "Обсудить проект в Telegram",
        baseDurationLabel: "База (длительность)",
        extraScenesLabel: "Доп. сцены",
        complexityMultLabel: "Множитель сложности",
        revisionsMultLabel: "Множитель правок",
        urgencyMultLabel: "Множитель срочности",
        addOnsSumLabel: "Доп. услуги",
        includedScenesLabel: "Включено сцен",
      },
      examples: {
        title: "Примеры проектов",
        cards: [
          {
            title: "Быстрый рекламный ролик",
            specs: ["30 сек", "6 сцен", "Стандарт", "1 раунд", "Обычные сроки"],
            duration: 30,
            scenes: 6,
            complexity: "standard",
            revisions: "one",
            urgency: "normal",
            addOns: [],
          },
          {
            title: "Вирусный клип с хуками",
            specs: ["60 сек", "12 сцен", "Премиум", "2 раунда", "72 часа", "+ Пак хуков"],
            duration: 60,
            scenes: 12,
            complexity: "premium",
            revisions: "two",
            urgency: "h72",
            addOns: ["hookPack"],
          },
          {
            title: "Полный пакет бренда",
            specs: ["90 сек", "18 сцен", "VIP", "3 раунда", "Стандарт", "+ Стиль System"],
            duration: 90,
            scenes: 18,
            complexity: "golden",
            revisions: "three",
            urgency: "normal",
            addOns: ["styleSystem"],
          },
        ],
      },
    },
    process: {
      title: "Процесс работы",
      steps: [
        {
          title: "Бриф",
          description: "Вы присылаете задачу, референсы и сроки в Telegram",
        },
        {
          title: "Оценка",
          description: "Я рассчитываю стоимость и сроки, согласовываем",
        },
        {
          title: "Производство",
          description: "Создаю видео, отправляю превью для правок",
        },
        {
          title: "Финал",
          description: "Вы получаете готовые файлы в нужных форматах",
        },
      ],
      checklist: {
        title: "Что прислать",
        items: [
          "Описание задачи и целей",
          "Референсы (ссылки или примеры стиля)",
          "Формат и длительность",
          "Желаемые сроки",
          "Примерный бюджет (опционально)",
        ],
      },
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          question: "Как формируется цена?",
          answer: "Цена зависит от длительности, сложности, количества сцен, правок и срочности. Используйте калькулятор выше для оценки — вы видите, за что платите.",
        },
        {
          question: "Сколько стоит видео?",
          answer: "От 30 000 ₽ за 30 секунд. Финальная цена зависит от сложности, сцен, правок и срочности. Используйте калькулятор выше для оценки.",
        },
        {
          question: "Какие сроки?",
          answer: "Стандартно 5–10 рабочих дней в зависимости от объёма. Срочные заказы возможны с наценкой.",
        },
        {
          question: "Работаете с 18+ контентом?",
          answer: "Нет, только brand-friendly контент. Без исключений.",
        },
        {
          question: "Можно ли использовать референсы конкурентов?",
          answer: "Да, для творческого вдохновения и адаптации. Я не копирую 1:1, но использую лучшие практики этично.",
        },
        {
          question: "Как оплата?",
          answer: "50% предоплата, 50% после финальной версии. Для постоянных клиентов возможны другие условия.",
        },
      ],
    },
    contact: {
      title: "Начнём проект",
      cta: "Написать в Telegram",
      templateLabel: "Шаблон брифа",
      template: `Привет! Хочу заказать видео.

Задача: [опишите, что нужно]
Формат: [длительность, соотношение сторон]
Референсы: [ссылки или описание стиля]
Срок: [когда нужно]
Бюджет: [примерный или по калькулятору]`,
      copyButton: "Скопировать",
      copySuccess: "Скопировано!",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Октарин`,
      disclaimer: "Только безопасный бренд-контент. Без 18+.",
    },
  },
  en: {
    header: {
      brand: "Octarine",
      nav: ["Results", "Problems", "Services", "Works", "Pricing", "Process", "FAQ", "Contact"],
      cta: "Write in Telegram",
    },
    hero: {
      headline: "Video that hooks from the first second",
      subheadline: "Generative AI for brands: strong hooks, recognizable style, fast production. Transparent pricing system.",
      cta1: "Watch works",
      cta2: "Write in Telegram",
    },
    highlights: [
      "Hook-first approach",
      "Consistent style system",
      "Fast turnaround",
      "Platform-ready exports (9:16 / 16:9 / 1:1)",
    ],
    results: {
      title: "What you get",
      items: [
        "Publish-ready deliverables",
        "Multi-format exports",
        "Hook variants for A/B testing",
        "Visual consistency",
        "Brand-friendly content",
        "Fast iterations",
      ],
    },
    problems: {
      title: "Problems we solve",
      cards: [
        {
          pain: "Ads don't hook — viewers scroll past in 1–2 seconds",
          why: "Weak hook = wasted budget and low CTR",
          outcome: "Video with engineered hook that holds attention",
        },
        {
          pain: "Creatives look generic",
          why: "Brand gets lost among competitors, no recognition",
          outcome: "Unique visual style that stands out and sticks",
        },
        {
          pain: "Chaos in social profiles",
          why: "Different fonts, colors — looks unprofessional",
          outcome: "Systematic visual style across all platforms",
        },
        {
          pain: "Slow iterations for launches",
          why: "Missed trends and blown deadlines",
          outcome: "Fast production with clear workflow",
        },
        {
          pain: "Competitors outperform your creatives",
          why: "They test more creatives, grow faster",
          outcome: "Variation packs for A/B testing and scaling",
        },
        {
          pain: "Need it fast but without chaos",
          why: "Have references but unclear how to execute",
          outcome: "Clear process: brief → estimate → production → final",
        },
      ],
    },
    services: {
      title: "Services",
      cards: [
        {
          title: "Performance Ads (6–30s)",
          deliverables: [
            "Video with strong hook (1–3s)",
            "2–3 variants for A/B testing",
            "9:16 / 16:9 / 1:1 exports",
            "Publish-ready",
          ],
          bestFor: "Paid social, Stories, Reels, TikTok",
        },
        {
          title: "Viral Clips / Hook Engineering",
          deliverables: [
            "Captivating first seconds",
            "Trending formats and transitions",
            "Algorithm optimization",
            "Multiple hook variants",
          ],
          bestFor: "Organic growth, virality",
        },
        {
          title: "Cinematic Shots",
          deliverables: [
            "Atmospheric scenes (film-like)",
            "AI generation or processing",
            "Color grading and styling",
            "Music synchronization",
          ],
          bestFor: "Brand films, music videos, premium content",
        },
        {
          title: "Brand Visual System",
          deliverables: [
            "Visual style guide",
            "Color palette and typography",
            "Content templates",
            "Usage guidelines",
          ],
          bestFor: "Consistency across all platforms",
        },
        {
          title: "Social Profile Design",
          deliverables: [
            "Covers and highlights",
            "Post templates",
            "Unified visual code",
            "Platform adaptation",
          ],
          bestFor: "Instagram, YouTube, Telegram, VK",
        },
      ],
    },
    works: {
      title: "Works",
      categories: ["All", "Ads"],
      cards: [
        {
          title: "Jewelry Brand",
          description: "Elegant premium video",
          category: "Ads",
          thumbnail: "/videos/marketing 1.mp4",
          videoUrl: "/videos/marketing 1.mp4",
        },
        {
          title: "Premium Jewelry",
          description: "Stand out from competitors",
          category: "Ads",
          thumbnail: "/videos/marketing 2.mp4",
          videoUrl: "/videos/marketing 2.mp4",
        },
        {
          title: "Fashion Targeting Ad",
          description: "Eye-catching visual for campaign launch",
          category: "Ads",
          thumbnail: "/videos/marketing 3.mp4",
          videoUrl: "/videos/marketing 3.mp4",
        },
        {
          title: "Bali Real Estate",
          description: "Stand-out video for luxury property",
          category: "Ads",
          thumbnail: "/videos/final2.mp4",
          videoUrl: "/videos/final2.mp4",
        },
        {
          title: "Stylish Bags",
          description: "Vibrant ad for fashion brand",
          category: "Ads",
          thumbnail: "/videos/sumki  (1).mp4",
          videoUrl: "/videos/sumki  (1).mp4",
        },
        {
          title: "Bags Collection",
          description: "Dynamic presentation of new arrivals",
          category: "Ads",
          thumbnail: "/videos/sumki  (2).mp4",
          videoUrl: "/videos/sumki  (2).mp4",
        },
      ],
    },
    pricing: {
      title: "Pricing",
      systemName: "Transparent Pricing System",
      baseRule: "Base: from $330 for 30 seconds of video",
      baseNote: "Final price depends on complexity, scenes, revisions, urgency, and add-ons",
      factors: [
        "Video duration (longer = cheaper per second)",
        "Number of scenes (6 included for 30s base)",
        "Complexity (from simple to VIP)",
        "Number of revision rounds",
        "Urgency (standard, 72h, 48h, 24h)",
        "Additional services",
      ],
      estimator: {
        durationLabel: "Duration (sec)",
        scenesLabel: "Number of scenes",
        complexityLabel: "Complexity",
        complexityOptions: [
          { label: "Simple (×1.0)", value: "simple" },
          { label: "Standard (×1.3)", value: "standard" },
          { label: "Premium (×1.7)", value: "premium" },
          { label: "VIP (×2.4)", value: "golden" },
        ],
        revisionsLabel: "Revision rounds",
        urgencyLabel: "Urgency",
        urgencyOptions: [
          { label: "Standard (no surcharge)", value: "normal" },
          { label: "72 hours (+20%)", value: "h72" },
          { label: "48 hours (+35%)", value: "h48" },
          { label: "24 hours (+60%)", value: "h24" },
        ],
        addOnsLabel: "Add-ons",
        addOnsOptions: [
          { label: "Hook Pack (+$330)", value: "hookPack" },
          { label: "Social Basic (+$275)", value: "socialBasic" },
          { label: "Social Pro (+$660)", value: "socialPro" },
          { label: "Style Start (+$495)", value: "styleStart" },
          { label: "Style System (+$1,320)", value: "styleSystem" },
          { label: "Competitor Scan (+$275)", value: "competitorScan" },
        ],
        totalLabel: "Total",
        breakdownLabel: "Breakdown",
        disclaimer: "This is a preliminary estimate. Final price discussed after briefing.",
        cta: "Discuss project in Telegram",
        baseDurationLabel: "Base (duration)",
        extraScenesLabel: "Extra scenes",
        complexityMultLabel: "Complexity multiplier",
        revisionsMultLabel: "Revisions multiplier",
        urgencyMultLabel: "Urgency multiplier",
        addOnsSumLabel: "Add-ons",
        includedScenesLabel: "Included scenes",
      },
      examples: {
        title: "Project examples",
        cards: [
          {
            title: "Quick ad video",
            specs: ["30 sec", "6 scenes", "Standard", "1 round", "Normal timing"],
            duration: 30,
            scenes: 6,
            complexity: "standard",
            revisions: "one",
            urgency: "normal",
            addOns: [],
          },
          {
            title: "Viral clip with hooks",
            specs: ["60 sec", "12 scenes", "Premium", "2 rounds", "72 hours", "+ Hook Pack"],
            duration: 60,
            scenes: 12,
            complexity: "premium",
            revisions: "two",
            urgency: "h72",
            addOns: ["hookPack"],
          },
          {
            title: "Full brand package",
            specs: ["90 sec", "18 scenes", "VIP", "3 rounds", "Standard", "+ Style System"],
            duration: 90,
            scenes: 18,
            complexity: "golden",
            revisions: "three",
            urgency: "normal",
            addOns: ["styleSystem"],
          },
        ],
      },
    },
    process: {
      title: "How it works",
      steps: [
        {
          title: "Brief",
          description: "You send task, references, and deadlines via Telegram",
        },
        {
          title: "Estimate",
          description: "I calculate cost and timeline, we agree",
        },
        {
          title: "Production",
          description: "I create the video, send preview for revisions",
        },
        {
          title: "Final",
          description: "You receive ready files in required formats",
        },
      ],
      checklist: {
        title: "What to send",
        items: [
          "Task and goals description",
          "References (links or style examples)",
          "Format and duration",
          "Desired timeline",
          "Approximate budget (optional)",
        ],
      },
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "How is pricing calculated?",
          answer: "Pricing depends on duration, complexity, number of scenes, revisions, and urgency. Use the calculator above for an estimate — you see exactly what you're paying for.",
        },
        {
          question: "How much does a video cost?",
          answer: "From $330 for 30 seconds. Final price depends on complexity, scenes, revisions, and urgency. Use the calculator above for an estimate.",
        },
        {
          question: "What's the timeline?",
          answer: "Standard is 5–10 business days depending on scope. Rush orders possible with surcharge.",
        },
        {
          question: "Do you work with 18+ content?",
          answer: "No, brand-friendly content only. No exceptions.",
        },
        {
          question: "Can I use competitor references?",
          answer: "Yes, for creative inspiration and adaptation. I don't copy 1:1, but ethically use best practices.",
        },
        {
          question: "How does payment work?",
          answer: "50% upfront, 50% after final version. Different terms possible for regular clients.",
        },
      ],
    },
    contact: {
      title: "Let's start a project",
      cta: "Write in Telegram",
      templateLabel: "Brief template",
      template: `Hi! I want to order a video.

Task: [describe what you need]
Format: [duration, aspect ratio]
References: [links or style description]
Deadline: [when you need it]
Budget: [approximate or from calculator]`,
      copyButton: "Copy",
      copySuccess: "Copied!",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Octarine`,
      disclaimer: "Brand-friendly content only. No 18+.",
    },
  },
};
