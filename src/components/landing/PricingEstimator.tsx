import { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCurrency } from "@/context/CurrencyContext";
import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  calculatePrice,
  ComplexityKey,
  RevisionsKey,
  UrgencyKey,
  AddOnKey,
} from "@/data/pricing";

export function PricingEstimator() {
  const { t, language } = useLanguage();
  const { formatAmount, currency } = useCurrency();

  const [duration, setDuration] = useState(30);
  const [scenes, setScenes] = useState(6);
  const [complexity, setComplexity] = useState<ComplexityKey>("standard");
  const [revisions, setRevisions] = useState<RevisionsKey>("one");
  const [urgency, setUrgency] = useState<UrgencyKey>("normal");
  const [addOns, setAddOns] = useState<AddOnKey[]>([]);

  const breakdown = useMemo(() => {
    return calculatePrice(duration, scenes, complexity, revisions, urgency, addOns);
  }, [duration, scenes, complexity, revisions, urgency, addOns]);

  const handleAddOnToggle = (addon: AddOnKey) => {
    setAddOns((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const durationOptions = [15, 30, 60, 90, 120];

  return (
    <section id="pricing" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-3">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-gray-600">{t.pricing.systemName}</p>
        </motion.div>

        {/* Base Rule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm text-center">
            <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              {t.pricing.baseRule}
            </p>
            <p className="text-sm text-gray-500">{t.pricing.baseNote}</p>
          </div>
        </motion.div>

        {/* Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.pricing.factors.map((factor, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-700">
                  {index + 1}
                </div>
                <span>{factor}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Estimator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Inputs */}
              <div className="space-y-6">
                {/* Duration */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    {t.pricing.estimator.durationLabel}
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {durationOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setDuration(opt)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          duration === opt
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {opt}s
                      </button>
                    ))}
                  </div>
                  {duration > 120 && (
                    <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      Custom duration - price is estimated
                    </p>
                  )}
                </div>

                {/* Scenes Slider */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-medium text-gray-700">
                      {t.pricing.estimator.scenesLabel}
                    </Label>
                    <span className="text-sm text-gray-500">
                      {scenes}{" "}
                      <span className="text-xs">
                        ({t.pricing.estimator.includedScenesLabel}: {breakdown.includedScenes})
                      </span>
                    </span>
                  </div>
                  <Slider
                    value={[scenes]}
                    onValueChange={(val) => setScenes(val[0])}
                    min={3}
                    max={20}
                    step={1}
                    className="py-2"
                  />
                </div>

                {/* Complexity */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    {t.pricing.estimator.complexityLabel}
                  </Label>
                  <Select
                    value={complexity}
                    onValueChange={(val) => setComplexity(val as ComplexityKey)}
                  >
                    <SelectTrigger className="rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {t.pricing.estimator.complexityOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Revisions */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    {t.pricing.estimator.revisionsLabel}
                  </Label>
                  <RadioGroup
                    value={revisions}
                    onValueChange={(val) => setRevisions(val as RevisionsKey)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="one" id="rev-one" />
                      <Label htmlFor="rev-one" className="text-sm">
                        1 (+0%)
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="two" id="rev-two" />
                      <Label htmlFor="rev-two" className="text-sm">
                        2 (+15%)
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="three" id="rev-three" />
                      <Label htmlFor="rev-three" className="text-sm">
                        3 (+30%)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Urgency */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    {t.pricing.estimator.urgencyLabel}
                  </Label>
                  <Select
                    value={urgency}
                    onValueChange={(val) => setUrgency(val as UrgencyKey)}
                  >
                    <SelectTrigger className="rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {t.pricing.estimator.urgencyOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Add-ons */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    {t.pricing.estimator.addOnsLabel}
                  </Label>
                  <div className="space-y-2">
                    {t.pricing.estimator.addOnsOptions.map((opt) => (
                      <div key={opt.value} className="flex items-center gap-2">
                        <Checkbox
                          id={opt.value}
                          checked={addOns.includes(opt.value as AddOnKey)}
                          onCheckedChange={() =>
                            handleAddOnToggle(opt.value as AddOnKey)
                          }
                        />
                        <Label
                          htmlFor={opt.value}
                          className="text-sm text-gray-600 cursor-pointer"
                        >
                          {opt.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output */}
              <div>
                <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                  <h4 className="text-sm font-medium text-gray-500 mb-4">
                    {t.pricing.estimator.breakdownLabel}
                  </h4>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {t.pricing.estimator.baseDurationLabel}
                      </span>
                      <span className="font-medium">
                        {formatAmount(breakdown.baseDuration)}
                      </span>
                    </div>
                    {breakdown.extraScenesCost > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {t.pricing.estimator.extraScenesLabel} (
                          {scenes - breakdown.includedScenes})
                        </span>
                        <span className="font-medium">
                          +{formatAmount(breakdown.extraScenesCost)}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {t.pricing.estimator.complexityMultLabel}
                      </span>
                      <span className="font-medium">
                        ×{breakdown.complexityMultiplier}
                      </span>
                    </div>
                    {breakdown.revisionsPercent > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {t.pricing.estimator.revisionsMultLabel}
                        </span>
                        <span className="font-medium">
                          +{Math.round(breakdown.revisionsPercent * 100)}%
                        </span>
                      </div>
                    )}
                    {breakdown.urgencyPercent > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {t.pricing.estimator.urgencyMultLabel}
                        </span>
                        <span className="font-medium">
                          +{Math.round(breakdown.urgencyPercent * 100)}%
                        </span>
                      </div>
                    )}
                    {breakdown.addOnsSum > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {t.pricing.estimator.addOnsSumLabel}
                        </span>
                        <span className="font-medium">
                          +{formatAmount(breakdown.addOnsSum)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between items-baseline">
                      <span className="text-lg font-semibold text-gray-900">
                        {t.pricing.estimator.totalLabel}
                      </span>
                      <span className="text-2xl md:text-3xl font-bold text-gray-900">
                        {formatAmount(breakdown.total)}
                      </span>
                    </div>
                    {currency === "usd" && (
                      <p className="text-xs text-gray-400 text-right mt-1">
                        {language === "ru"
                          ? "≈ приблизительный курс"
                          : "≈ approximate conversion"}
                      </p>
                    )}
                    {breakdown.isCustom && (
                      <p className="text-xs text-amber-600 text-right mt-1">
                        {language === "ru" ? "Индивидуальный расчёт" : "Custom pricing"}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-gray-400 mb-4">
                    {t.pricing.estimator.disclaimer}
                  </p>

                  <Button
                    asChild
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full py-6 text-base font-medium"
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
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
