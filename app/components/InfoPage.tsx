import Link from "next/link";
import { SiteFooter } from "./SiteFooter";

type Section = {
  title: string;
  body: string[];
};

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: Section[];
  children?: React.ReactNode;
};

export function InfoPage({
  eyebrow,
  title,
  description,
  sections,
  children,
}: InfoPageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/[0.07] bg-black">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 sm:px-10">
          <Link
            href="/"
            className="text-[26px] font-black uppercase tracking-[-0.08em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.24)]"
          >
            DARKKICK
          </Link>
          <Link
            href="/#download"
            className="text-sm font-bold text-zinc-200 hover:text-purple-300"
          >
            Скачать
          </Link>
        </div>
      </header>

      <section className="relative mx-auto max-w-[1120px] overflow-hidden px-6 py-16 sm:px-10 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="relative">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-purple-400">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-none tracking-[-0.06em] sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {description}
          </p>
        </div>

        <div className="relative mt-12 grid gap-4">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="rounded-xl border border-white/[0.08] bg-[#030306] p-6 shadow-[0_0_44px_rgba(88,28,135,0.08)] sm:p-8"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-950/25 text-sm font-bold text-purple-300">
                  {index + 1}
                </span>
                <h2 className="text-2xl font-bold tracking-[-0.04em]">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 text-[16px] leading-8 text-zinc-400">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {children}
      </section>

      <SiteFooter />
    </main>
  );
}
