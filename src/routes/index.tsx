import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Hero, About, ServicesGrid, Pricing, Showcase, Portfolio, Metrics, Why, Process, Testimonials, Faq, Contact, FinalCta } from "@/components/site/sections";

const title = "Vedant Miniyar | Freelance Digital Marketer in Pune";
const description = "Explore affordable digital marketing services by Vedant Miniyar, including SEO, social media management, content creation, paid ads, branding, and lead generation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "ProfessionalService", name: "Vedant Miniyar — Digital Marketing",
        email: "miniyarvedantt@gmail.com", telephone: "+91-8446342598",
        address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <ServicesGrid limit={6} />
      <Showcase />
      <Pricing />
      <Portfolio />
      <Metrics />
      <Why />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
      <FinalCta />
    </SiteLayout>
  );
}
