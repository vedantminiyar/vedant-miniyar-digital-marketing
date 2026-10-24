/**
 * EDIT YOUR WEBSITE CONTENT HERE.
 * Services, prices, projects, testimonials and contact links all live in this file.
 */

export const profile = {
  name: "Vedant Miniyar",
  title: "Freelance Digital Marketer | Social Media Strategist | Brand & Growth Marketing",
  location: "Pune, Maharashtra, India",
  email: "miniyarvedantt@gmail.com",
  phone: "+91-8446342598",
  whatsapp: "918446342598",
  linkedin: "", // add your LinkedIn URL
  instagram: "", // add your Instagram URL
  tagline: "Your Brand. My Strategy. Real Growth.",
  subTagline: "Smart Marketing. Quality Content. Affordable Pricing.",
};

export const waLink = (text = "Hi Vedant, I'd like to discuss a marketing project.") =>
  `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`;

export type Service = { id: string; title: string; desc: string; items: string[]; icon: string };

export const services: Service[] = [
  { id: "seo", icon: "Search", title: "SEO Optimization", desc: "Improve search visibility and attract relevant organic traffic.", items: ["Keyword Research", "On-Page & Technical SEO", "Local SEO & Google Business Profile", "SEO Audits & Reporting"] },
  { id: "social", icon: "Share2", title: "Social Media Management", desc: "A consistent, engaging, professional social presence.", items: ["Social Media Strategy", "Account Management", "Content Calendars & Scheduling", "Performance Reporting"] },
  { id: "content", icon: "Sparkles", title: "Content Creation", desc: "Visual content that reflects your brand and objectives.", items: ["Branded Posts & Carousels", "Reels & Short-Form Video", "Captions, Hooks & Copy", "Promotional Creatives"] },
  { id: "ads", icon: "Megaphone", title: "Paid Advertising", desc: "Campaigns that reach relevant audiences.", items: ["Meta Ads — FB & Instagram", "Google Ads", "Audience Targeting", "Optimization & Reporting"] },
  { id: "leads", icon: "Magnet", title: "Lead Generation", desc: "Attract potential customers with targeted campaigns.", items: ["Lead-Gen Strategy", "Audience Research", "Landing-Page Planning", "Lead Quality Tracking"] },
  { id: "brand", icon: "Gem", title: "Branding & Brand Strategy", desc: "A consistent, recognizable brand identity.", items: ["Positioning & Messaging", "Colors & Typography", "Brand Voice & Guidelines", "Competitor Research"] },
  { id: "product", icon: "Package", title: "Product Marketing", desc: "Present products with strategic messaging.", items: ["Product Positioning", "Launch Campaigns", "Product Storytelling", "E-commerce Support"] },
  { id: "web", icon: "MousePointerClick", title: "Website & Landing-Page Optimization", desc: "Help visitors understand your value.", items: ["Content Recommendations", "Landing-Page Strategy", "CTA Optimization", "Conversion-Flow Improvements"] },
  { id: "email", icon: "MessageCircle", title: "Email & WhatsApp Marketing", desc: "Communicate with customers and nurture leads.", items: ["Email Campaigns", "Lead Follow-Up Workflows", "WhatsApp Business Campaigns", "Retention Messaging"] },
  { id: "influencer", icon: "Users", title: "Influencer Marketing", desc: "Relevant creator collaborations.", items: ["Influencer Research", "Collaboration Strategy", "Outreach Preparation", "Performance Review"] },
  { id: "analytics", icon: "BarChart3", title: "Analytics & Reporting", desc: "Use data to find areas for improvement.", items: ["GA4 Support", "Conversion Tracking", "Ads & Social Insights", "Monthly Recommendations"] },
];

export type Plan = {
  name: string; tagline: string; audience: string;
  price: string; // e.g. "₹9,999 / month" — leave "" to show "Custom quote"
  deliverables: string[]; content: string; platforms: string; timeline: string; revisions: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  { name: "Starter", tagline: "Start Smart", audience: "For startups and small businesses beginning their digital journey.", price: "", deliverables: ["Social media setup & optimization", "Monthly content plan", "Branded posts"], content: "[Add quantity]", platforms: "[Add platforms]", timeline: "[Add timeline]", revisions: "[Add revisions]" },
  { name: "Growth", tagline: "Build Your Presence", audience: "For businesses needing consistent content and structured marketing support.", price: "", deliverables: ["Content calendar & scheduling", "Posts, carousels & reels", "Engagement & monthly report"], content: "[Add quantity]", platforms: "[Add platforms]", timeline: "[Add timeline]", revisions: "[Add revisions]", featured: true },
  { name: "Performance", tagline: "Grow With Strategy", audience: "For businesses needing campaigns, paid ads and lead-generation planning.", price: "", deliverables: ["Everything in Growth", "Meta / Google ads management", "Lead-generation planning"], content: "[Add quantity]", platforms: "[Add platforms]", timeline: "[Add timeline]", revisions: "[Add revisions]" },
];

export const portfolioCategories = ["All", "Social Media", "Content Creation", "Branding", "SEO", "Paid Advertising", "Product Marketing", "Lead Generation"] as const;

export type Project = { title: string; category: (typeof portfolioCategories)[number]; objective: string; role: string; label: "Concept Project" | "Self-Initiated Project" | "Client Project"; hue: number };

// Replace with real work. Keep the label honest.
export const projects: Project[] = [
  { title: "Café Launch Carousel Series", category: "Social Media", objective: "Introduce a new café to a local audience.", role: "Strategy & design", label: "Concept Project", hue: 230 },
  { title: "Skincare Reel Concepts", category: "Content Creation", objective: "Short-form hooks for product education.", role: "Scripting & creative", label: "Concept Project", hue: 200 },
  { title: "Fitness Studio Identity", category: "Branding", objective: "A bold, consistent visual direction.", role: "Brand direction", label: "Self-Initiated Project", hue: 255 },
  { title: "Local Clinic SEO Plan", category: "SEO", objective: "Improve local search visibility.", role: "Audit & keyword plan", label: "Concept Project", hue: 190 },
  { title: "D2C Meta Ad Set", category: "Paid Advertising", objective: "Ad creatives and audience testing plan.", role: "Creative & targeting", label: "Concept Project", hue: 240 },
  { title: "Sneaker Drop Campaign", category: "Product Marketing", objective: "Launch storytelling for a new product.", role: "Campaign planning", label: "Self-Initiated Project", hue: 215 },
  { title: "Coaching Lead Funnel", category: "Lead Generation", objective: "Lead capture journey for a coach.", role: "Funnel strategy", label: "Concept Project", hue: 205 },
];

export type Testimonial = { name: string; brand: string; feedback: string; photo?: string };
// Add genuine testimonials here. The section stays hidden while this list is empty.
export const testimonials: Testimonial[] = [];

export const metrics = ["Reach & Brand Awareness", "Website Traffic", "Qualified Leads", "Engagement", "Conversion Rate", "Campaign Performance"];

export const reasons = [
  { t: "Affordable Pricing", d: "Digital marketing solutions suited to different budgets." },
  { t: "Personalized Strategy", d: "Recommendations aligned with your business goals." },
  { t: "Brand-Focused Creativity", d: "Content that reflects your brand identity." },
  { t: "Professional Workflow", d: "Organized timelines and clear deliverables." },
  { t: "Flexible Freelance Support", d: "Choose individual services or customized packages." },
  { t: "Growth-Oriented Thinking", d: "Use marketing insights to find opportunities to improve." },
];

export const steps = [
  { t: "Discover", d: "Understand the brand, audience, and goals." },
  { t: "Plan", d: "Develop the strategy, deliverables, and project timeline." },
  { t: "Create", d: "Prepare content, creatives, or campaign materials." },
  { t: "Review", d: "Share work for client feedback and agreed revisions." },
  { t: "Execute", d: "Publish approved content or launch campaigns within scope." },
  { t: "Improve", d: "Review performance and identify the next opportunities." },
];

export const faqs = [
  { q: "What digital marketing services do you offer?", a: "SEO, social media management, content creation, paid ads, lead generation, branding, product marketing, landing-page optimization, email & WhatsApp marketing, influencer marketing and analytics." },
  { q: "Are your services affordable for small businesses?", a: "Yes. Pricing is designed for startups and small businesses — professional work without an agency-sized budget." },
  { q: "Can I hire you for just one service?", a: "Absolutely. Every service is available on its own, or combined into a package." },
  { q: "Can you create content according to my brand?", a: "Yes. All content follows your brand identity, audience, tone and goals — never generic posts." },
  { q: "Do you offer customized packages?", a: "Yes. Packages can be adjusted to your goals, platforms and budget." },
  { q: "Does the price include advertising expenditure?", a: "No. Ad spend, paid tools and external production costs are billed separately and transparently." },
  { q: "How do I get started?", a: "Send a message through the contact form or WhatsApp. We'll discuss your business and I'll share a clear proposal." },
  { q: "Do you guarantee leads or sales?", a: "No honest marketer can. I focus on sound strategy, quality execution and continuous improvement toward your goals." },
];
