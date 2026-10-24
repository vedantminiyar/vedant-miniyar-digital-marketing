import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/ui";
import { Contact, FinalCta } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vedant Miniyar | Freelance Digital Marketer Pune" },
      { name: "description", content: "Tell me about your business and goals. Reach Vedant Miniyar by WhatsApp, email or the enquiry form." },
      { property: "og:title", content: "Contact Vedant Miniyar | Freelance Digital Marketer Pune" },
      { property: "og:description", content: "Tell me about your business and goals. Reach Vedant Miniyar by WhatsApp, email or the enquiry form." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's Talk About Your Brand." />
      <Contact />
      <FinalCta />
    </SiteLayout>
  );
}
