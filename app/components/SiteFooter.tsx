import Link from "next/link";

const footerLinks = [
  ["GitHub", "https://github.com/vladbogus498-design/my_messenger"],
  ["Privacy Policy", "/privacy"],
  ["Terms of Service", "/terms"],
  ["Support", "/support"],
];

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-10 pb-8 pt-5 text-[13px] text-zinc-600 md:flex-row md:items-center md:justify-between">
      <Link
        href="/"
        className="text-[20px] font-black uppercase tracking-[-0.08em] text-purple-500"
      >
        DARKKICK
      </Link>
      <p>© 2026 DARKKICK. Все права защищены.</p>
      <div className="flex flex-wrap gap-x-10 gap-y-3">
        {footerLinks.map(([label, href]) =>
          href.startsWith("http") ? (
            <a key={label} href={href}>
              {label}
            </a>
          ) : (
            <Link key={label} href={href}>
              {label}
            </Link>
          ),
        )}
      </div>
    </footer>
  );
}
