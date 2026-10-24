import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui";
import { Faq, FinalCta, Metrics, ServicesGrid } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Services | Vedant Miniyar" },
      { name: "description", content: "SEO, social media, content creation, paid ads, branding, lead generation and more — affordable freelance services in Pune." },
      { property: "og:title", content: "Digital Marketing Services | Vedant Miniyar" },
      { property: "og:description", content: "SEO, social media, content creation, paid ads, branding, lead generation and more — affordable freelance services in Pune." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Services" title="Everything Your Brand Needs to Grow Digitally." />
      <ServicesGrid />
      <Metrics />
      <Faq />
      <FinalCta />
    </SiteLayout>
  );
}
