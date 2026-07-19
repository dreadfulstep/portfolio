import {
  ArrowRight,
  Code2,
  Database,
  Mail,
  MapPin,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Signl",
    category: "SaaS",
    type: "Personal project",
    year: "2026",
    description:
      "A visual no-code platform for building, deploying and managing powerful Discord bots through a drag and drop builder.",
    technologies: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Redis"],
    image: "/project.png",
    href: "#",
  },
  {
    name: "Discord Bot Website",
    category: "Web development",
    type: "Client work",
    year: "2026",
    description:
      "A polished marketing website created for a Discord bot, presenting its features and identity through a clear, engaging experience.",
    technologies: ["Next.js", "TypeScript"],
    image: "/not-fbi.png",
    href: "https://notfbi.dev",
  },
  {
    name: "First Steps",
    category: "Web development",
    type: "Client work",
    year: "2025",
    description:
      "An approachable, responsive website designed to clearly communicate the organisation’s services and help families find the support they need.",
    technologies: ["React", "Node.js", "Docker"],
    image: "/first-steps.png",
    href: "https://firststepstogether.co.uk",
  },
];

const experience = [
  {
    period: "2022 — Present",
    title: "Independent full-stack developer",
    description:
      "Designing and building web products, backend services and developer tools from concept through deployment.",
  },
  {
    period: "Current focus",
    title: "Signl",
    description:
      "Building a scalable no-code Discord bot platform using Next.js, TypeScript, Go, PostgreSQL and NATS.",
  },
];

const GitHubIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .7A11.3 11.3 0 0 0 8.43 22.72c.57.1.77-.25.77-.55v-2.18c-3.15.69-3.82-1.34-3.82-1.34-.51-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.73.4-1.24.72-1.52-2.52-.29-5.17-1.26-5.17-5.59 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.44.11-3 0 0 .95-.3 3.11 1.16A10.82 10.82 0 0 1 12 6.05c.96 0 1.91.13 2.82.38 2.16-1.46 3.11-1.16 3.11-1.16.62 1.56.23 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.34-2.66 5.3-5.19 5.58.41.35.77 1.04.77 2.1v3.18c0 .31.21.66.78.55A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
};

const DiscordIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.51.07.07 0 0 0-.08.04c-.21.38-.45.88-.62 1.27a18.27 18.27 0 0 0-5.46 0A13 13 0 0 0 8.64 2.9a.08.08 0 0 0-.08-.04 19.74 19.74 0 0 0-4.89 1.51.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .09-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1 0-.13c.13-.1.25-.2.37-.29a.07.07 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.06 0a.07.07 0 0 1 .08.01l.37.3a.08.08 0 0 1 0 .12c-.6.35-1.23.65-1.87.9a.08.08 0 0 0-.04.1c.36.69.77 1.36 1.23 1.99a.08.08 0 0 0 .09.03 19.84 19.84 0 0 0 6-3.03.08.08 0 0 0 .03-.05c.5-5.18-.84-9.67-3.55-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.41 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.33-.96 2.41-2.16 2.41Zm7.97 0c-1.18 0-2.16-1.08-2.16-2.41 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.33-.95 2.41-2.16 2.41Z" />
    </svg>
  );
};

const Page = () => {
  return (
    <main className="overflow-hidden bg-[#05070b] text-white">
      <section className="relative min-h-screen overflow-hidden bg-[#087cf0] px-5">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#1728b8_0%,#1263df_33%,#2ca5f4_68%,#b6eafa_100%)]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_31%,rgba(48,177,255,0.65),transparent_68%)]" />

        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_15px_rgba(255,255,255,0.35)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-[radial-gradient(ellipse_at_bottom,rgba(223,249,255,0.95),rgba(166,230,250,0.55)_40%,transparent_75%)]" />

        <header className="absolute inset-x-0 top-0 z-50 flex justify-center px-7">
          <nav
            className="
              relative flex h-15.5 items-center gap-8 rounded-b-[22px]
              bg-black px-3 text-sm text-white shadow-xl shadow-black/10

              before:absolute before:-left-6 before:top-0 before:size-6
              before:bg-[radial-gradient(circle_at_bottom_left,transparent_24px,#000_25px)]

              after:absolute after:-right-6 after:top-0 after:size-6
              after:bg-[radial-gradient(circle_at_bottom_right,transparent_24px,#000_25px)]
            "
          >
            <Link
              href="/"
              className="flex items-center gap-2 pr-2 font-semibold"
            >
              <span className="grid size-8 place-items-center rounded-[10px] bg-linear-to-b from-sky-300 via-blue-500 to-blue-700 shadow-inner shadow-white/40">
                <Code2 className="size-4" />
              </span>
              Dylan
            </Link>

            <div className="hidden items-center gap-7 text-white/50 md:flex">
              <Link
                href="#projects"
                className="transition-colors hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="#experience"
                className="transition-colors hover:text-white"
              >
                Experience
              </Link>

              <Link
                href="#about"
                className="transition-colors hover:text-white"
              >
                About
              </Link>
            </div>

            <Link
              href="#contact"
              className="ml-1 flex h-10 items-center gap-2 rounded-xl bg-white px-4 font-semibold text-black transition hover:bg-blue-50"
            >
              Let&apos;s talk
              <ArrowRight className="size-4" />
            </Link>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-2 pt-32 text-center sm:px-6 sm:pt-40">
          <div className="mb-6 inline-flex items-center gap-2 text-base font-medium text-white/95 sm:text-lg">
            <Sparkles className="size-5 fill-current" />
            Full-stack developer
          </div>

          <h1 className="max-w-5xl text-[clamp(3.6rem,7.3vw,7.7rem)] font-bold leading-[0.82] tracking-[-0.07em]">
            Ideas into products.
            <span className="mt-4 block font-serif text-[0.95em] font-normal italic tracking-[-0.055em]">
              Built to last.
            </span>
          </h1>

          <p className="mt-9 max-w-170 text-lg leading-8 text-white/78 sm:text-xl">
            I&apos;m Dylan, a full-stack developer with 4 years of experience
            building polished interfaces, developer tools and the scalable
            systems behind them.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="group flex h-14 items-center gap-2 rounded-2xl bg-black px-6 font-semibold shadow-xl shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-zinc-900"
            >
              Explore my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://github.com/dreadfulstep"
              target="_blank"
              className="flex h-14 items-center gap-2 rounded-2xl border border-white/30 bg-white/15 px-6 font-semibold backdrop-blur-md transition hover:bg-white/25"
            >
              <GitHubIcon className="size-5" />
              GitHub
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-blue-950/55">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              United Kingdom
            </span>
            <span>4 years of experience</span>
            <span>Available for new projects</span>
          </div>

          <div className="relative mt-16 w-full max-w-295 rounded-t-[36px] border border-white/60 bg-white/20 p-2 pb-0 shadow-[0_35px_100px_rgba(15,68,150,0.3)] backdrop-blur-xl sm:p-4 sm:pb-0 lg:p-6 lg:pb-0">
            <div className="absolute inset-x-[10%] -top-10 h-24 bg-white/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-t-[25px] border border-white/15 bg-[#080b0f] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-48/25 w-full">
                <Image
                  src="/project.png"
                  alt="Signl visual Discord bot builder interface"
                  fill
                  priority
                  sizes="(max-width: 1280px) 90vw, 1180px"
                  className="object-contain"
                />

                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_35px_rgba(0,0,0,0.35)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080b10]">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="py-8 md:px-8">
            <p className="text-sm text-white/40">Experience</p>
            <p className="mt-2 text-2xl font-semibold">4+ years</p>
          </div>

          <div className="py-8 md:px-8">
            <p className="text-sm text-white/40">Main stack</p>
            <p className="mt-2 text-2xl font-semibold">
              TypeScript, Go & React
            </p>
          </div>

          <div className="py-8 md:px-8">
            <p className="text-sm text-white/40">Specialising in</p>
            <p className="mt-2 text-2xl font-semibold">
              Products & infrastructure
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="relative px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-3/4 -translate-x-1/2 rounded-full bg-blue-600/8 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-blue-400">
                Selected work
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-tighter sm:text-6xl">
                A selection of things
                <span className="font-serif font-normal italic text-white/45">
                  {" "}
                  I&apos;ve built.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-base leading-7 text-white/45 lg:justify-self-end">
              Products and client work spanning frontend development, backend
              architecture, infrastructure and product design.
            </p>
          </div>

          <div className="mt-10 grid gap-x-5 gap-y-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={index} className="group">
                <Link href={project.href} className="block">
                  <div className="relative aspect-16/10 overflow-hidden rounded-[22px] border border-white/10 bg-[#0b1018]">
                    <Image
                      src={project.image}
                      alt={`${project.name} project preview`}
                      fill
                      unoptimized
                      quality={95}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

                    <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/15 bg-black/60 opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                      <ArrowRight className="size-4 -rotate-45" />
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/35">
                        <span>{project.type}</span>
                        <span className="size-1 rounded-full bg-white/25" />
                        <span>{project.year}</span>
                      </div>

                      <span className="text-sm text-blue-400">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      {project.name}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/8 bg-white/[0.035] px-3 py-1 text-xs text-white/40"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-white/10 bg-[#080b10] px-6 py-28 sm:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-blue-400">
              Experience
            </p>

            <h2 className="text-5xl font-semibold tracking-tighter sm:text-7xl">
              Four years of
              <span className="block font-serif font-normal italic text-white/45">
                learning by building.
              </span>
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {experience.map((item, index) => (
              <article
                key={index}
                className="grid gap-5 py-8 sm:grid-cols-[160px_1fr]"
              >
                <p className="text-sm text-white/35">{item.period}</p>

                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-xl leading-7 text-white/45">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-120 overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(38,126,255,0.4),transparent_45%),#0b1018]">
            <div className="absolute inset-8 rounded-[24px] border border-white/10 bg-black/20 backdrop-blur-sm">
              <div className="flex h-full flex-col justify-between p-8">
                <Code2 className="size-10 text-blue-400" />

                <div>
                  <p className="font-mono text-sm text-blue-300">
                    developer.ts
                  </p>
                  <pre className="mt-5 overflow-hidden font-mono text-sm leading-7 text-white/60">
                    {`const developer = {
  name: "Dylan",
  experience: "4+ years",
  focus: [
    "Product engineering",
    "Backend systems",
    "Developer tools"
  ],
  alwaysLearning: true
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-blue-400">
              About me
            </p>

            <h2 className="text-5xl font-semibold tracking-tighter sm:text-7xl">
              More than
              <span className="font-serif font-normal italic text-white/45">
                {" "}
                just code.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-white/50">
              <p>
                I&apos;m a full-stack developer based in the United Kingdom,
                interested in turning ambitious ideas into focused, reliable
                products.
              </p>

              <p>
                I enjoy working across the entire stack—from designing an
                interface and shaping its user experience to building the
                services, data models and infrastructure that support it.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "TypeScript",
                "Go",
                "React",
                "Next.js",
                "PostgreSQL",
                "Redis",
                "Docker",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080b10] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-blue-400">
                What I do
              </p>

              <h2 className="max-w-lg text-4xl font-semibold tracking-tighter sm:text-5xl">
                From the interface to
                <span className="font-serif font-normal italic text-white/45">
                  {" "}
                  the infrastructure.
                </span>
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {[
                {
                  icon: Workflow,
                  title: "Product development",
                  description:
                    "Turning early ideas into focused, maintainable and production-ready products.",
                },
                {
                  icon: Code2,
                  title: "Frontend engineering",
                  description:
                    "Responsive interfaces with careful attention to usability, accessibility and detail.",
                },
                {
                  icon: Server,
                  title: "Backend systems",
                  description:
                    "Fast APIs, distributed services and reliable application architecture.",
                },
                {
                  icon: Database,
                  title: "Infrastructure",
                  description:
                    "Databases, containers, deployment pipelines, monitoring and scalable hosting.",
                },
              ].map((service) => (
                <article
                  key={service.title}
                  className="border-b border-r border-white/10 p-7 sm:p-8"
                >
                  <service.icon className="size-6 text-blue-400" />

                  <h3 className="mt-8 text-lg font-semibold">{service.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-5 pt-12">
        <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(145deg,#1728b8,#087cf0_55%,#64cef8)] px-6 py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(3,18,105,0.35)]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-white/65">
              Get in touch
            </p>

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
              Have something
              <span className="block font-serif font-normal italic">
                interesting in mind?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-white/70">
              I&apos;m available for freelance work, collaborations and interesting
              software opportunities.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              <Link
                href="mailto:dreadfulstep@gmail.com"
                className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-black/85 p-4 text-left transition hover:-translate-y-0.5 hover:bg-black"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10">
                  <Mail className="size-4" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-white/40">Email</span>
                  <span className="block truncate text-sm font-medium">
                    Send a message
                  </span>
                </span>
              </Link>

              <Link
                href="https://discord.com/users/881277706862481479"
                target="_blank"
                className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-black/85 p-4 text-left transition hover:-translate-y-0.5 hover:bg-black"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10">
                  <DiscordIcon className="size-4" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-white/40">Discord</span>
                  <span className="block truncate text-sm font-medium">
                    banana.dev
                  </span>
                </span>
              </Link>

              <Link
                href="https://github.com/dreadfulstep"
                target="_blank"
                className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-black/85 p-4 text-left transition hover:-translate-y-0.5 hover:bg-black"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10">
                  <GitHubIcon className="size-4" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-white/40">GitHub</span>
                  <span className="block truncate text-sm font-medium">
                    dreadfulstep
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-sm text-white/35 sm:flex-row">
        <p>© {new Date().getFullYear()} Dylan. Built with care.</p>

        <div className="flex items-center gap-2">
          <Link
            href="mailto:dreadfulstep@gmail.com"
            aria-label="Email"
            className="grid size-9 place-items-center rounded-full transition hover:bg-white/10 hover:text-white"
          >
            <Mail className="size-4" />
          </Link>

          <Link
            href="https://discord.com/users/881277706862481479"
            target="_blank"
            aria-label="Discord"
            className="grid size-9 place-items-center rounded-full transition hover:bg-white/10 hover:text-white"
          >
            <DiscordIcon className="size-4" />
          </Link>

          <Link
            href="https://github.com/dreadfulstep"
            target="_blank"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-full transition hover:bg-white/10 hover:text-white"
          >
            <GitHubIcon className="size-4" />
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default Page;