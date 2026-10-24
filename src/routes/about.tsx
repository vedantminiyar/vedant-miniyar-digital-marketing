import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui";
import { About, FinalCta, Process, Why } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vedant Miniyar | Freelance Digital Marketer" },
      { name: "description", content: "Meet Vedant Miniyar, a Pune-based freelance digital marketer combining strategy, creative content and affordable pricing." },
      { property: "og:title", content: "About Vedant Miniyar | Freelance Digital Marketer" },
      { property: "og:description", content: "Meet Vedant Miniyar, a Pune-based freelance digital marketer combining strategy, creative content and affordable pricing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About me" title="More Than Marketing. A Partner in Your Growth." />
      <About />
      <Why />
      <Process />
      <FinalCta />
    </SiteLayout>
  );
}
