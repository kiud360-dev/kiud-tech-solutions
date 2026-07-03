"use client";

import { motion } from "framer-motion";

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

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
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
];

const services = [
  {
    number: "01",
    title: "Web Development",
    desc: "High-performance websites and web applications engineered to feel polished, fast, and dependable at every touchpoint.",
  },
  {
    number: "02",
    title: "UI / UX Design",
    desc: "Clear, premium interfaces shaped around real user journeys, not decoration for its own sake.",
  },
  {
    number: "03",
    title: "E-Commerce",
    desc: "Custom storefronts and modern commerce builds designed to earn trust quickly and convert consistently.",
  },
  {
    number: "04",
    title: "SaaS Products",
    desc: "Scalable product experiences for startups and teams that need structure, speed, and long-term clarity.",
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
      "Fast turnaround, clean communication, and a site that finally felt aligned with the quality of our service. The polish absolutely showed.",
    name: "Aarav Mehta",
    role: "Brand Lead",
    initials: "AM",
  },
];

const testimonialLoop = [...testimonials, ...testimonials];

const teamMembers: TeamMember[] = [
  {
    name: "Uday Pandit",
    role: "Founder, Kiud Universe",
    bio: "Visionary founder driving the larger direction of Kiud Universe, recognized by Apollo Group for his leadership and long-range thinking.",
    initials: "UP",
  },
  {
    name: "Krishna",
    role: "Joint Founder",
    bio: "Works closely with Uday to shape the company, guide major decisions, and keep the business moving with clarity and intent.",
    initials: "K",
  },
  {
    name: "Aman",
    role: "Lead Developer",
    bio: "Backend-focused lead developer with 2 years of experience, having shipped products used by more than 10,000 users.",
    initials: "A",
  },
  {
    name: "Rishu",
    role: "Senior Developer",
    bio: "Senior developer known for strong UI execution, with apps deployed to the Play Store that have crossed 15,000+ users.",
    initials: "R",
  },
];

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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const navFade = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroTitleReveal = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)", scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
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
              <p className="flex items-center gap-2 text-black/85">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_14px_rgba(200,255,32,0.9)]" />
                Kiud-Tech
              </p>
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
                  <span className="case-arrow">-&gt;</span>
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
                    KIUD-TECH
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
            variants={staggerContainer}
            className="py-16 md:py-24 lg:py-30"
          >
            <div className="mx-auto max-w-[1160px] rounded-[1.5rem] border border-black/8 bg-[#f8f6f1] px-6 py-8 shadow-[0_18px_60px_rgba(17,17,17,0.05)] md:px-10 md:py-12 lg:px-14">
              <motion.p
                variants={fader}
                className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-black/45"
              >
                About
              </motion.p>

              <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
                <motion.h2
                  variants={fader}
                  className="max-w-[13ch] text-left font-display text-[clamp(1.8rem,5vw,4.8rem)] font-bold uppercase leading-[0.94] tracking-[-0.06em] text-black"
                >
                  We build digital experiences that feel premium before a word is read.
                </motion.h2>

                <div>
                  <motion.p
                    variants={fader}
                    className="max-w-[32rem] text-left text-[0.92rem] leading-[1.8] text-black/62 lg:text-[1rem]"
                  >
                    Kiud-Tech partners with brands that want more than a working website. We create sharper interfaces, clearer storytelling, and faster experiences that help businesses look credible and convert with more confidence.
                  </motion.p>

                  <motion.div variants={fader} className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-black/60">
                      Strategy-led
                    </span>
                    <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-black/60">
                      Conversion-aware
                    </span>
                    <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-black/60">
                      Built to scale
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          <section className="pt-6 md:pt-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fader}
              className="section-rule mb-10 md:mb-12"
            >
              <p className="font-semibold">Core team</p>
              <span className="h-px flex-1 bg-black/8" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={staggerContainer}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 pb-6 md:pb-10"
            >
              {teamMembers.map((member) => (
                <motion.article
                  key={member.name}
                  variants={fader}
                  className="rounded-[1.25rem] border border-black/8 bg-[#f8f6f1] p-6 shadow-[0_14px_40px_rgba(17,17,17,0.04)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#141517] font-display text-[0.78rem] font-bold uppercase tracking-[0.04em] text-accent">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-display text-[1.02rem] font-bold uppercase tracking-[-0.04em] text-black">
                        {member.name}
                      </h3>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-black/42">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-[0.82rem] leading-[1.72] text-black/58 lg:text-[0.88rem]">
                    {member.bio}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </section>

          <section id="services" className="pt-10 md:pt-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fader}
              className="section-rule border-t border-black/6 pt-6 md:pt-8"
            >
              <p className="font-semibold">What we do</p>
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
                <motion.article key={svc.number} variants={fader} className="service-card">
                  <span className="service-num">{svc.number}</span>
                  <h3 className="service-title">{svc.title}</h3>
                  <p className="service-desc">{svc.desc}</p>
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
              className="section-rule mb-10 md:mb-12"
            >
              <p className="font-semibold">Selected work</p>
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
                      -&gt;
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
                      -&gt;
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
              className="section-rule mb-10 md:mb-12"
            >
              <p className="font-semibold">What clients say</p>
              <span className="h-px flex-1 bg-black/8" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fader}
              className="overflow-hidden"
            >
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
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
                  Websites, e-commerce builds, SaaS products, and brand platforms for teams that care how their work looks and performs.
                </p>
                <div className="mt-8 grid gap-3">
                  <a
                    href="mailto:kiudev360@gmail.com"
                    className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-[0.88rem] text-white/90 transition-colors hover:bg-white/[0.08]"
                  >
                    <span className="text-white/45">Email</span>
                    <span>kiudev360@gmail.com</span>
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
                href="mailto:kiudev360@gmail.com"
                className="mt-8 inline-flex self-start rounded-full bg-accent px-5 py-3 text-[0.76rem] font-bold uppercase tracking-[0.04em] text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get in touch
              </a>
            </motion.article>
          </section>

          <footer className="mt-18 border-t border-black/6 pt-5 pb-2">
            <div className="flex flex-col items-center justify-between gap-3 text-[0.64rem] uppercase tracking-[0.14em] text-black/35 sm:flex-row lg:text-[0.7rem]">
              <p>Copyright 2026 Kiud-Tech</p>
              <p className="text-black/28">Crafted for clarity, speed, and trust</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}










