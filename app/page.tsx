"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, Target, Code2, Palette, ShoppingBag, Layers, ArrowUpRight, User, Check, ArrowRight } from "lucide-react";

type PortfolioProject = {
  name: string;
  discipline: string;
  description: string;
  url: string;
  image?: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    name: "EventViewz",
    discipline: "Ticketing Platform",
    description:
      "One of the largest ticketing platforms at Lovely Professional University, built to make discovery, booking, and event operations feel effortless.",
    url: "https://eventviewz.com",
    image: "/eventviewz.png",
  },
  {
    name: "Rowh",
    discipline: "E-Commerce",
    description:
      "A beauty commerce launch that paired clean brand presentation with a conversion-focused storefront and strong first-day sales.",
    url: "https://rowh.in",
    image: "/rowh.png",
  },
  {
    name: "EDC India",
    discipline: "Web Platform",
    description:
      "A digital platform for Entrepreneurship Development Cell India, designed to support ambitious students and a fast-growing community.",
    url: "https://edcindia.org",
    image: "/edcindia.png",
  },
  {
    name: "Yana Nail Studio",
    discipline: "Landing Page",
    description:
      "A sharp, conversion-ready landing page that helped turn interest into paying appointments from day one.",
    url: "https://yana-nail-dream.vercel.app",
    image: "/yananails.png",
  },
  {
    name: "Kiud360",
    discipline: "School Management",
    description:
      "A complete school operations ecosystem covering admissions, academics, attendance, and communication in one product.",
    url: "https://www.kiud360.in",
    image: "/kiud360.png",
  },
  {
    name: "Closers With Chandan",
    discipline: "Portfolio Site",
    description:
      "A portfolio site built for an expert closer who has worked with 70+ startups.",
    url: "https://www.closerswithchandan.com/",
    image: "/closer-chandan.png",
  },
  {
    name: "Data Usage Manager",
    discipline: "Android App",
    description:
      "A live mobile app on Google Play for tracking daily and monthly data usage with a clean, minimalist UI.",
    url: "https://play.google.com/store/apps/details?id=com.rishukumarcodes.DataUsageManager",
    image: "/data-usage-manager.svg",
  },
];

const services = [
  {
    number: "01",
    title: "Web & App Development",
    desc: "High-performance websites and web applications engineered to feel polished, fast, and dependable at every touchpoint.",
    bullets: [
      "95+ Lighthouse performance scores by default",
      "SEO-first semantic structure & clean metadata",
      "Responsive fluid layouts with custom interactions"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: Code2,
  },
  {
    number: "02",
    title: "UI / UX Design",
    desc: "Clear, premium interfaces shaped around real user journeys, not decoration for its own sake.",
    bullets: [
      "Component-driven Figma design systems",
      "Interactive prototyping & flow mapping",
      "User research & accessibility compliance (WCAG)"
    ],
    tech: ["Figma Systems", "User Journeys", "Wireframing", "Prototypes"],
    icon: Palette,
  },
  {
    number: "03",
    title: "E-Commerce",
    desc: "Custom storefronts and modern commerce builds designed to earn trust quickly and convert consistently.",
    bullets: [
      "Headless Shopify setups & custom checkouts",
      "Stripe payment flow & cart optimization",
      "Instant page transitions & fast catalog filtering"
    ],
    tech: ["Custom Cart Flows", "Stripe / Shopify", "Conversion Audits", "Headless"],
    icon: ShoppingBag,
  },
  {
    number: "04",
    title: "SaaS Products",
    desc: "Scalable product experiences for startups and teams that need structure, speed, and long-term clarity.",
    bullets: [
      "Secure dashboard interfaces & role access",
      "Real-time analytics, data feeds, & charting",
      "Scalable database structures & API designs"
    ],
    tech: ["Dashboard UI", "API Integrations", "Database Architecture", "Auth Systems"],
    icon: Layers,
  },
];

const stats = [
  { value: "20+", label: "Projects delivered" },
  { value: "4.9", label: "Average client rating" },
  { value: "99%", label: "Client satisfaction" },
  { value: "4+", label: "Countries served" },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "You made event management feel simple. The platform handles everything from ticketing to check-ins with almost no friction for our team.",
    name: "Akshat Tiwari",
    role: "Founder, EventViewz",
    initials: "AT",
  },
  {
    quote:
      "The commerce experience felt smooth from the start. Our customers loved it, and we saw strong sales momentum right after launch.",
    name: "Nagma",
    role: "Founder, Rowh",
    initials: "N",
  },
  {
    quote:
      "The landing page looked premium and started bringing real clients in immediately. It felt like the right brand from day one.",
    name: "Yana Nail Studio",
    role: "Client",
    initials: "YN",
  },
  {
    quote:
      "The product direction was still evolving, but the interface already felt solid, sharp, and investor-ready. It gave the whole team more confidence in demos.",
    name: "Stealth Project",
    role: "Founding Team",
    initials: "SP",
  },
  {
    quote:
      "The digital platform has helped us support thousands of student entrepreneurs and coordinate operations with absolute clarity.",
    name: "Chandan Tiwari",
    role: "Director, EDC India",
    initials: "CT",
  },
];

const testimonialLoop = [...testimonials, ...testimonials];

const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description: "We align on goals, audience, offer, and the details that shape the final experience.",
  },
  {
    title: "Design",
    description: "We translate strategy into visual direction, page flows, and interface systems that feel intentional.",
  },
  {
    title: "Develop",
    description: "We build with clean structure, modern tooling, and a strong focus on speed, responsiveness, and quality.",
  },
  {
    title: "Launch",
    description: "We ship carefully, polish the final details, and support rollout so the handoff feels easy.",
  },
];

const StarRating = () => (
  <div className="mb-3 flex gap-0.5 text-[#ffb800]" aria-hidden="true">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const fader = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const navFade = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const titleLetterReveal = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const heroTitleReveal = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)", scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="editorial-shell min-h-screen px-3 py-3 md:px-6 md:py-6">
        <div className="main-container mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1480px] flex-col bg-paper px-5 py-6 md:min-h-[calc(100vh-3rem)] md:px-10 md:py-8 lg:px-14 lg:py-10">
          <motion.header initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.nav
              variants={navFade}
              className="flex items-center justify-between text-[0.72rem] font-semibold uppercase tracking-[-0.02em] lg:text-[0.8rem]"
            >
              <a href="#top" className="flex items-center gap-3 text-black/85">
                <img src="/kiud-logo.png" alt="Kiud logo" className="h-24 w-auto md:h-28" />
              </a>
              <div className="flex items-center gap-6">
                <a href="#work" className="nav-link hidden sm:block">
                  Work
                </a>
                <a href="#services" className="nav-link hidden sm:block">
                  Services
                </a>
                <a href="#about" className="nav-link hidden sm:block">
                  About
                </a>
                 <a href="#contact" className="inline-flex items-center gap-2 leading-none transition-transform duration-300 hover:-translate-y-0.5">
                  <span className="text-right">
                    Let&apos;s
                    <br />
                    talk
                  </span>
                  <span className="case-arrow">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
              </div>
            </motion.nav>

            <section className="py-14 md:py-20 lg:py-28 xl:py-32 overflow-hidden">
              <motion.h1
                variants={heroTitleReveal}
                className="flex items-center justify-center gap-1.5 text-center font-display text-[clamp(2.1rem,9.5vw,10.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.08em] text-[#111111] will-change-transform md:gap-3"
              >
                <span className="overflow-hidden inline-block">
                  <motion.span
                    variants={titleLetterReveal}
                    className="inline-block"
                  >
                    KIUDTECH SOLUTIONS
                  </motion.span>
                </span>
              </motion.h1>
            </section>
          </motion.header>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={staggerContainer}
            className="stats-strip mt-2 md:mt-4"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fader} className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
            variants={fader}
            className="py-16 md:py-24 lg:py-32"
          >
            <div className="mx-auto max-w-[1160px] rounded-[2rem] border border-black/8 bg-white px-6 py-8 shadow-[0_18px_60px_rgba(17,17,17,0.05)] md:px-10 md:py-12 lg:px-14 lg:py-16">
              <div className="flex items-center justify-between border-b border-black/6 pb-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-black/45">
                  About KiudTech
                </p>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-black/30">
                  Est. 2024
                </span>
              </div>

              <div className="mt-8">
                <h2 className="text-left font-display text-[clamp(1.8rem,4.2vw,3.6rem)] font-bold uppercase leading-[1.0] tracking-[-0.05em] text-black max-w-[42ch]">
                  We build premium websites, web apps, and mobile product experiences that feel polished before a word is read.
                </h2>
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 border-t border-black/6 pt-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-black/45">
                    <Sparkles className="h-4 w-4" />
                    <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-black/40">Philosophy</h3>
                  </div>
                  <p className="text-[0.88rem] leading-[1.65] text-black/60">
                    We believe premium experiences are built on details. From animation choreography to load performance, every pixel and line of code should feel intentional, fast, and satisfying.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-black/45">
                    <Cpu className="h-4 w-4" />
                    <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-black/40">Core Expertise</h3>
                  </div>
                  <ul className="space-y-2 text-[0.88rem] font-medium text-black/70">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      React & Next.js Ecosystems
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Responsive UI & Animation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      E-Commerce Storefronts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Minimalist Mobile Apps
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-black/45">
                      <Target className="h-4 w-4" />
                      <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-black/40">Partnership</h3>
                    </div>
                    <p className="text-[0.88rem] leading-[1.65] text-black/60">
                      KiudTech Solutions partners with brands that want more than a working website or app. We create sharper interfaces, clearer storytelling, and faster experiences that help businesses look credible and convert with more confidence.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <span className="rounded-full border border-black/8 bg-paper px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.06em] text-black/65 hover:bg-black/5 transition-colors cursor-default">
                      Strategy-led
                    </span>
                    <span className="rounded-full border border-black/8 bg-paper px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.06em] text-black/65 hover:bg-black/5 transition-colors cursor-default">
                      Conversion-aware
                    </span>
                    <span className="rounded-full border border-black/8 bg-paper px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.06em] text-black/65 hover:bg-black/5 transition-colors cursor-default">
                      Built to scale
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <section id="services" className="pt-10 md:pt-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fader}
              className="flex items-center gap-4 border-t border-black/6 pt-6 md:pt-8"
            >
              <h2 className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold uppercase tracking-[0.18em] text-black/80">What we do</h2>
              <span className="h-px flex-1 bg-black/8" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={staggerContainer}
              className="grid gap-4 md:grid-cols-2"
            >
              {services.map((svc) => (
                <motion.article key={svc.number} variants={fader} className="service-card group">
                  <div className="flex justify-between items-start">
                    <span className="service-num">{svc.number}</span>
                    <svc.icon className="h-5 w-5 text-black/25 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <h3 className="service-title flex items-center justify-between gap-2">
                    {svc.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black/50" />
                  </h3>
                  <p className="service-desc">{svc.desc}</p>

                  <ul className="mt-4 space-y-2 border-t border-black/5 pt-4">
                    {svc.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-[0.72rem] text-black/60">
                        <Check className="h-3.5 w-3.5 text-accent-deep mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
                    {svc.tech.map((t) => (
                      <span key={t} className="rounded-full bg-black/[0.04] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.04em] text-black/50 transition-colors group-hover:bg-accent/15 group-hover:text-black">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </section>

          <section id="work" className="pt-22 md:pt-28 lg:pt-36">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fader}
              className="flex items-center gap-4 mb-10 md:mb-12"
            >
              <h2 className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold uppercase tracking-[0.18em] text-black/80">Selected work</h2>
              <span className="h-px flex-1 bg-black/8" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5%" }}
              variants={staggerContainer}
              className="grid gap-5 md:grid-cols-2"
            >
              {portfolioProjects.slice(0, 2).map((project) => (
                <motion.a
                  key={project.name}
                  variants={fader}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card group block"
                >
                  <div className="project-image aspect-video rounded-[1rem] overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.name} className="transition-transform duration-700 group-hover:scale-[1.04]" />
                    ) : (
                      <div className="placeholder-img">
                        <span className="placeholder-label">{project.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-3 px-1 pt-4 pb-1">
                    <div>
                      <h3 className="text-[0.98rem] font-semibold uppercase tracking-[-0.04em] text-black lg:text-[1.06rem]">
                        {project.name}
                      </h3>
                      <p className="text-[0.64rem] uppercase tracking-[0.06em] text-black/40 lg:text-[0.7rem]">
                        {project.discipline}
                      </p>
                    </div>
                    <span className="case-arrow mt-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                  <p className="mt-1 px-1 text-[0.72rem] leading-[1.65] text-black/50 lg:text-[0.8rem]">
                    {project.description}
                  </p>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5%" }}
              variants={staggerContainer}
              className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3"
            >
              {portfolioProjects.slice(2).map((project) => (
                <motion.a
                  key={project.name}
                  variants={fader}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card group block"
                >
                  <div className="project-image aspect-video rounded-[1rem] overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.name} className="transition-transform duration-700 group-hover:scale-[1.04]" />
                    ) : (
                      <div className="placeholder-img">
                        <span className="placeholder-label">{project.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-3 px-1 pt-4 pb-1">
                    <div>
                      <h3 className="text-[0.98rem] font-semibold uppercase tracking-[-0.04em] text-black lg:text-[1.06rem]">
                        {project.name}
                      </h3>
                      <p className="text-[0.64rem] uppercase tracking-[0.06em] text-black/40 lg:text-[0.7rem]">
                        {project.discipline}
                      </p>
                    </div>
                    <span className="case-arrow mt-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                  <p className="mt-1 px-1 text-[0.72rem] leading-[1.65] text-black/50 lg:text-[0.8rem]">
                    {project.description}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </section>

          <section className="pt-28 md:pt-40 lg:pt-44">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fader}
              className="flex items-center gap-4 mb-10 md:mb-12"
            >
              <h2 className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold uppercase tracking-[0.18em] text-black/80">What clients say</h2>
              <span className="h-px flex-1 bg-black/8" />
            </motion.div>

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fader}
              className="mx-auto max-w-[1160px] mb-10 rounded-[2rem] border border-black/8 bg-white px-8 py-10 shadow-[0_24px_80px_rgba(17,17,17,0.06)] md:px-10 lg:px-12"
            >
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:items-center">
                <div className="max-w-[38rem]">
                  <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                    Featured review
                  </p>
                  <p className="mt-4 text-[1.95rem] font-display font-bold uppercase leading-[0.95] tracking-[-0.05em] text-black lg:text-[2.6rem]">
                    "The digital platform has helped us support thousands of student entrepreneurs and coordinate operations with absolute clarity."
                  </p>
                  <p className="mt-5 text-[0.94rem] leading-[1.8] text-black/65">
                    It was the difference between running manual operations and showing up as a truly modern hub for innovation and growth.
                  </p>
                </div>

                <div className="justify-self-end rounded-[1.8rem] border border-white/10 bg-[#111111] p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] w-full max-w-[320px] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl pointer-events-none" />

                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/40">Verified Review</p>
                  <p className="mt-2 font-display text-[1.3rem] font-bold uppercase tracking-[-0.03em] leading-tight text-white">Chandan Tiwari</p>
                  <p className="text-[0.72rem] uppercase tracking-[0.12em] text-accent font-semibold mt-1">Director, EDC India</p>

                  <div className="mt-6 flex items-center gap-3.5 border-t border-white/10 pt-5">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-black shadow-[0_0_15px_rgba(200,255,32,0.3)] flex-shrink-0">
                      <User className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[0.74rem] text-white/60 leading-relaxed">
                        Building entrepreneurship hubs across universities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fader}
              className="overflow-hidden"
            >
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear" as const, repeat: Infinity }}
                className="flex w-max gap-6"
              >
                {testimonialLoop.map((testimonial, index) => (
                  <blockquote
                    key={`${testimonial.name}-${index}`}
                    className="testimonial-card w-[19rem] flex-shrink-0 md:w-[22rem]"
                  >
                    <div>
                      <StarRating />
                      <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                    </div>
                    <footer className="testimonial-author">
                      <div className="testimonial-avatar">{testimonial.initials}</div>
                      <div>
                        <cite className="testimonial-name">{testimonial.name}</cite>
                        <p className="testimonial-role">{testimonial.role}</p>
                      </div>
                    </footer>
                  </blockquote>
                ))}
              </motion.div>
            </motion.div>
          </section>

          <section id="contact" className="grid gap-5 pt-24 md:pt-36 lg:pt-40 xl:grid-cols-[1.15fr_0.85fr]">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={staggerContainer}
              className="rounded-[1.5rem] border border-black/8 bg-[#efede7] px-6 py-7 shadow-[0_18px_60px_rgba(17,17,17,0.04)] md:px-8 md:py-8 lg:px-10 lg:py-10"
            >
              <motion.p
                variants={fader}
                className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-black/42"
              >
                Our process
              </motion.p>
              <motion.h3
                variants={fader}
                className="mt-4 max-w-[14ch] font-display text-[clamp(1.7rem,4vw,3.4rem)] font-bold uppercase leading-[0.95] tracking-[-0.06em] text-black"
              >
                From concept to code to launch.
              </motion.h3>
              <div className="mt-8 space-y-6">
                {processSteps.map((step) => (
                  <motion.div key={step.title} variants={fader} className="flex items-start gap-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(200,255,32,0.6)]" />
                    <div>
                      <p className="font-display text-[1.05rem] font-bold uppercase tracking-[-0.04em] text-black">
                        {step.title}
                      </p>
                      <p className="mt-1 max-w-[44rem] text-[0.88rem] leading-[1.7] text-black/50 lg:text-[0.94rem]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fader}
              className="flex flex-col justify-between rounded-[1.5rem] bg-[#141517] px-6 py-7 text-white shadow-[0_24px_80px_rgba(17,17,17,0.14)] md:px-8 md:py-8 lg:px-10 lg:py-10"
            >
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                  Start a project
                </p>
                <p className="mt-4 max-w-[11ch] font-display text-[clamp(1.7rem,3.6vw,3.1rem)] font-bold uppercase leading-[0.95] tracking-[-0.06em] text-white">
                  Build something that feels as good as it works.
                </p>
                <p className="mt-5 max-w-sm text-[0.9rem] leading-[1.8] text-white/72 lg:text-[0.96rem]">
                    Websites, web apps, e-commerce builds, SaaS products, and brand platforms for teams that care how their work looks and performs.
                </p>
                <div className="mt-8 grid gap-3">
                  <a
                    href="mailto:uday@kiudtech.com"
                    className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-[0.88rem] text-white/90 transition-colors hover:bg-white/[0.08]"
                  >
                    <span className="text-white/45">Email</span>
                    <span>uday@kiudtech.com</span>
                  </a>
                  <a
                    href="tel:+918595389881"
                    className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-[0.88rem] text-white/90 transition-colors hover:bg-white/[0.08]"
                  >
                    <span className="text-white/45">Phone</span>
                    <span>+91 85953 89881</span>
                  </a>
                </div>
              </div>
              <a
                href="mailto:uday@kiudtech.com"
                className="mt-8 inline-flex self-start rounded-full bg-accent px-5 py-3 text-[0.76rem] font-bold uppercase tracking-[0.04em] text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get in touch
              </a>
            </motion.article>
          </section>

          <footer className="mt-18 border-t border-black/6 pt-5 pb-2">
            <div className="flex flex-col items-center justify-between gap-3 text-[0.64rem] uppercase tracking-[0.14em] text-black/35 sm:flex-row lg:text-[0.7rem]">
              <p>Copyright 2026 KiudTech Solutions</p>
              <p className="text-black/28">Crafted for clarity, speed, and trust</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}










