import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui";
import { Faq, FinalCta, Pricing } from "@/components/site/sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Affordable Marketing Packages | Vedant Miniyar" },
      { name: "description", content: "Flexible, budget-friendly digital marketing packages — Starter, Growth and Performance — with transparent scope." },
      { property: "og:title", content: "Affordable Marketing Packages | Vedant Miniyar" },
      { property: "og:description", content: "Flexible, budget-friendly digital marketing packages — Starter, Growth and Performance — with transparent scope." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Pricing" title="Practical Pricing. Built Around Your Budget." />
      <Pricing />
      <Faq />
      <FinalCta />
    </SiteLayout>
  );
}
