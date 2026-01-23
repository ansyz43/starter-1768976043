export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export const sectionIds = [
  "results",
  "problems",
  "services",
  "works",
  "pricing",
  "process",
  "faq",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
