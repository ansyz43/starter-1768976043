export const FX_USD = 0.011; // 1 RUB = ~0.011 USD (configurable)

export const BASE_RATE_PER_SECOND = {
  upTo30: 1000,   // RUB per second for first 30 seconds
  upTo60: 900,    // RUB per second for seconds 31-60
  upTo120: 800,   // RUB per second for seconds 61-120
};

export const COMPLEXITY_MULTIPLIERS = {
  simple: 1.0,
  standard: 1.3,
  premium: 1.7,
  golden: 2.4,
} as const;

export const REVISIONS_PERCENT = {
  one: 0,
  two: 0.15,
  three: 0.30,
} as const;

export const URGENCY_PERCENT = {
  normal: 0,
  h72: 0.20,
  h48: 0.35,
  h24: 0.60,
} as const;

export const ADD_ONS_RUB = {
  hookPack: 30000,
  socialBasic: 25000,
  socialPro: 60000,
  styleStart: 45000,
  styleSystem: 120000,
  competitorScan: 25000,
} as const;

export type ComplexityKey = keyof typeof COMPLEXITY_MULTIPLIERS;
export type RevisionsKey = keyof typeof REVISIONS_PERCENT;
export type UrgencyKey = keyof typeof URGENCY_PERCENT;
export type AddOnKey = keyof typeof ADD_ONS_RUB;

export interface PriceBreakdown {
  baseDuration: number;
  includedScenes: number;
  extraScenesCost: number;
  complexityMultiplier: number;
  revisionsPercent: number;
  urgencyPercent: number;
  addOnsSum: number;
  subtotalAfterComplexity: number;
  subtotalAfterRevisions: number;
  subtotalAfterUrgency: number;
  total: number;
  isCustom: boolean;
}

export function calculatePrice(
  duration: number,
  scenes: number,
  complexity: ComplexityKey,
  revisions: RevisionsKey,
  urgency: UrgencyKey,
  addOns: AddOnKey[]
): PriceBreakdown {
  const isCustom = duration > 120;
  
  // Base duration cost
  let baseDuration = 0;
  if (duration <= 30) {
    baseDuration = duration * BASE_RATE_PER_SECOND.upTo30;
  } else if (duration <= 60) {
    baseDuration = 30 * BASE_RATE_PER_SECOND.upTo30 + (duration - 30) * BASE_RATE_PER_SECOND.upTo60;
  } else if (duration <= 120) {
    baseDuration = 30 * BASE_RATE_PER_SECOND.upTo30 + 30 * BASE_RATE_PER_SECOND.upTo60 + (duration - 60) * BASE_RATE_PER_SECOND.upTo120;
  } else {
    // For 120+, still compute but mark as custom
    baseDuration = 30 * BASE_RATE_PER_SECOND.upTo30 + 30 * BASE_RATE_PER_SECOND.upTo60 + 60 * BASE_RATE_PER_SECOND.upTo120;
  }

  // Included scenes calculation
  // 6 scenes for 30s baseline
  // For other durations: included = round(duration * 0.2) clamped 6–12
  const includedScenes = Math.max(6, Math.min(12, Math.round(duration * 0.2)));
  
  // Extra scenes cost
  const extraScenes = Math.max(0, scenes - includedScenes);
  const extraScenesCost = extraScenes * 3500; // 3500 RUB per extra scene

  // Subtotal before multipliers
  const subtotal = baseDuration + extraScenesCost;

  // Apply multipliers sequentially
  const complexityMultiplier = COMPLEXITY_MULTIPLIERS[complexity];
  const revisionsPercent = REVISIONS_PERCENT[revisions];
  const urgencyPercent = URGENCY_PERCENT[urgency];

  const subtotalAfterComplexity = subtotal * complexityMultiplier;
  const subtotalAfterRevisions = subtotalAfterComplexity * (1 + revisionsPercent);
  const subtotalAfterUrgency = subtotalAfterRevisions * (1 + urgencyPercent);

  // Add-ons (flat amounts, added at the end)
  const addOnsSum = addOns.reduce((sum, key) => sum + ADD_ONS_RUB[key], 0);

  const total = subtotalAfterUrgency + addOnsSum;

  return {
    baseDuration,
    includedScenes,
    extraScenesCost,
    complexityMultiplier,
    revisionsPercent,
    urgencyPercent,
    addOnsSum,
    subtotalAfterComplexity,
    subtotalAfterRevisions,
    subtotalAfterUrgency,
    total,
    isCustom,
  };
}

export function formatPrice(amount: number, currency: 'rub' | 'usd'): string {
  if (currency === 'rub') {
    return new Intl.NumberFormat('ru-RU').format(Math.round(amount)) + ' ₽';
  } else {
    const usdAmount = amount * FX_USD;
    return '$' + new Intl.NumberFormat('en-US').format(Math.round(usdAmount));
  }
}
