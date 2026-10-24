import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui";
import { FinalCta, Portfolio, Showcase, Testimonials } from "@/components/site/sections";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Projects | Vedant Miniyar" },
      { name: "description", content: "Explore social media, content, branding, SEO and advertising work by freelance digital marketer Vedant Miniyar." },
      { property: "og:title", content: "Portfolio & Projects | Vedant Miniyar" },
      { property: "og:description", content: "Explore social media, content, branding, SEO and advertising work by freelance digital marketer Vedant Miniyar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Portfolio" title="Creative Work. Strategic Thinking." />
      <Portfolio />
      <Showcase />
      <Testimonials />
      <FinalCta />
    </SiteLayout>
  );
}
