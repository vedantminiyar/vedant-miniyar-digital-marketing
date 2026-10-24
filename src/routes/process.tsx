import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui";
import { FinalCta, Process, Why } from "@/components/site/sections";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How I Work | Vedant Miniyar" },
      { name: "description", content: "A clear six-step process: discover, plan, create, review, execute and improve — with transparent communication." },
      { property: "og:title", content: "How I Work | Vedant Miniyar" },
      { property: "og:description", content: "A clear six-step process: discover, plan, create, review, execute and improve — with transparent communication." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Process" title="A Clear Process. A Professional Experience." />
      <Process />
      <Why />
      <FinalCta />
    </SiteLayout>
  );
}
