import Image from "next/image";
import { SiteFooter } from "./components/SiteFooter";

const apkDownloadUrl =
  "https://github.com/vladbogus498-design/my_messenger/releases/download/v1.0.0/app-release.11.zip";

const githubUrl = "https://github.com/vladbogus498-design/my_messenger";

const navItems = [
  ["Главная", "#top"],
  ["Возможности", "#features"],
  ["Безопасность", "#security"],
  ["Стикеры", "#screenshots"],
  ["О проекте", "#about"],
  ["FAQ", "#download"],
];

const features = [
  {
    title: "Чаты",
    text: "Быстрые, безопасные и приватные чаты без компромиссов.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path d="M4 5.5h16v10.8H9.3L4 20.5v-15Z" />
      </svg>
    ),
  },
  {
    title: "Звонки",
    text: "Качественные звонки со сквозным шифрованием и без слежки.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path d="M6.6 3.8 10 7.2l-2.2 2.6c1.4 2.9 3.6 5 6.5 6.5l2.6-2.2 3.4 3.4c-.4 2-1.6 3-3.5 3C9.4 20.5 3.5 14.6 3.5 7.2c0-1.9 1.1-3 3.1-3.4Z" />
      </svg>
    ),
  },
  {
    title: "Приватность",
    text: "Ваши данные принадлежат только вам. Никаких трекеров и сбора информации.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path d="M7 10V7.8a5 5 0 0 1 10 0V10" />
        <path d="M5.5 10h13v10h-13V10Z" />
        <path d="M12 14v2.5" />
      </svg>
    ),
  },
  {
    title: "Стикеры",
    text: "Создавайте и делитесь уникальными наборами стикеров.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path d="M7 4h10l3 3v10l-3 3H7l-3-3V7l3-3Z" />
        <path d="M9 10h.1M15 10h.1M9.5 15c1.6 1.2 3.4 1.2 5 0" />
      </svg>
    ),
  },
  {
    title: "Кастомизация",
    text: "Настраивайте внешний вид приложения под себя. Тёмный стиль по умолчанию.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path d="M12 3.5a8.5 8.5 0 0 0 0 17h1.4a2 2 0 0 0 1.4-3.4l-.5-.5a2 2 0 0 1 1.4-3.4H18a3 3 0 0 0 2.8-4.2A9 9 0 0 0 12 3.5Z" />
        <path d="M7.8 10h.1M10.2 7.5h.1M13.2 7.5h.1M16 10h.1" />
      </svg>
    ),
  },
];

const privacyItems = [
  {
    title: "Защита сообщений",
    shortTitle: "Защита",
    text: "DARKKICK стремится защищать сообщения и данные в пределах возможностей сервиса.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path d="M12 3.5 19 6v5.8c0 4.2-2.7 7.2-7 8.7-4.3-1.5-7-4.5-7-8.7V6l7-2.5Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
  },
  {
    title: "Самоуничтожение",
    shortTitle: "Самоуничтожение",
    text: "Сообщения могут исчезать через заданное время.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path d="M12 6v6l3 2" />
        <path d="M9 2.8h6" />
        <path d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      </svg>
    ),
  },
  {
    title: "Без номера телефона",
    shortTitle: "Без номера",
    text: "Регистрация без привязки к номеру и без лишних данных.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4.5 20c.8-4 3.3-6 7.5-6s6.7 2 7.5 6" />
      </svg>
    ),
  },
  {
    title: "Открытый код",
    shortTitle: "Open Source",
    text: "Весь код открыт и доступен на GitHub для проверки.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </svg>
    ),
  },
];

const mobileFeatureTiles = [
  features[0],
  features[1],
  features[2],
  features[3],
  features[4],
  {
    title: "Безопасность",
    text: "",
    icon: privacyItems[0].icon,
  },
];

const stats = [
  {
    value: "50 000+",
    label: "Строк кода",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </svg>
    ),
  },
  {
    value: "60+",
    label: "Дней разработки",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path d="M7 3.5v3" />
        <path d="M17 3.5v3" />
        <path d="M4.5 8.5h15" />
        <path d="M5.5 5.5h13v15h-13v-15Z" />
      </svg>
    ),
  },
  {
    value: "1",
    label: "Разработчик",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path d="M12 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4.5 20c.9-4.1 3.4-6.2 7.5-6.2s6.6 2.1 7.5 6.2" />
      </svg>
    ),
  },
  {
    value: "0",
    label: "Инвесторы",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path d="M20.2 5.8c-2-2-5.2-1.8-7.1.4L12 7.5l-1.1-1.3C9 4 5.8 3.8 3.8 5.8c-2.1 2.1-2.1 5.6 0 7.7L12 21l8.2-7.5c2.1-2.1 2.1-5.6 0-7.7Z" />
      </svg>
    ),
  },
];

function DownloadIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 4v11" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-black/72 backdrop-blur-xl sm:bg-black">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:h-[76px] sm:px-10">
          <a
            href="#top"
            className="text-[24px] font-black uppercase tracking-[-0.08em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.24)] sm:text-[28px]"
          >
            DARKKICK
          </a>

          <nav className="hidden items-center gap-[52px] text-[15px] font-medium text-zinc-200 lg:flex">
            {navItems.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={index === 0 ? "text-purple-400" : "hover:text-purple-300"}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#download"
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[13px] font-bold text-zinc-200 hover:text-purple-300 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-[15px]"
          >
            Скачать
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative mx-auto min-h-[100svh] max-w-[1440px] scroll-mt-20 overflow-hidden px-5 pb-7 pt-[76px] sm:min-h-[764px] sm:scroll-mt-24 sm:px-10 sm:pt-[156px]"
      >
        <div className="pointer-events-none absolute -left-[10%] -right-[10%] top-16 h-[52svh] opacity-100 sm:left-[38%] sm:right-0 sm:top-[76px] sm:h-[690px] sm:w-[62%] sm:opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_20%,rgba(147,51,234,0.34),transparent_42%)] sm:hidden" />
          <Image
            src="/dark-angel-hero.png"
            alt=""
            fill
            priority
            sizes="(max-width: 639px) 100vw, 62vw"
            className="object-contain object-[center_top] sm:object-cover sm:object-right-top"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.18)_32%,rgba(0,0,0,0.72)_54%,#000_94%),linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.58)_42%,rgba(0,0,0,0.12)_100%)] sm:inset-x-0 sm:bottom-auto sm:top-[76px] sm:h-[690px] sm:bg-[linear-gradient(90deg,#000_0%,#000_32%,rgba(0,0,0,0.82)_42%,rgba(0,0,0,0.12)_65%,#000_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 flex min-h-[calc(100svh-104px)] max-w-[540px] flex-col justify-start pt-[43svh] sm:block sm:min-h-0 sm:pt-0">
          <div className="inline-flex h-8 w-fit items-center gap-2 rounded-full bg-[#101014]/90 px-3 text-[12px] text-zinc-200 ring-1 ring-white/[0.06] sm:gap-3 sm:px-4 sm:text-[15px]">
            <span className="h-2.5 w-2.5 rounded-full bg-purple-500 shadow-[0_0_16px_rgba(168,85,247,1)]" />
            Приватный мессенджер нового поколения
          </div>

          <h1 className="mt-5 max-w-full text-[clamp(52px,15vw,72px)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-zinc-100 drop-shadow-[0_8px_28px_rgba(255,255,255,0.16)] sm:mt-8 sm:text-[104px] sm:tracking-[-0.075em]">
            DARKKICK
          </h1>

          <h2 className="mt-4 text-[clamp(28px,8vw,38px)] font-bold leading-[1.02] tracking-[-0.04em] text-white sm:mt-8 sm:text-[34px] sm:leading-tight">
            Без границ. <span className="text-purple-500">Без слежки.</span>
          </h2>

          <p className="mt-4 max-w-[470px] text-[15px] leading-7 text-zinc-300 sm:mt-8 sm:text-[17px] sm:leading-8 sm:text-zinc-400">
            DARKKICK — приватный мессенджер без телефонных номеров и
            компромиссов.
            <span className="hidden sm:inline">
              {" "}
              С упором на безопасность, свободу и стиль.
            </span>
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:gap-5">
            <a
              href={apkDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-purple-600 px-3 text-[13px] font-bold text-white shadow-[0_0_36px_rgba(124,58,237,0.62)] hover:bg-purple-500 sm:h-[58px] sm:gap-3 sm:px-8 sm:text-[16px]"
            >
              <DownloadIcon className="h-5 w-5" />
              Скачать DARKKICK
            </a>
            <a
              href={githubUrl}
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-[#09090d]/90 px-3 text-[13px] font-bold text-white hover:border-purple-500/70 sm:h-[58px] sm:px-8 sm:text-[16px]"
            >
              GitHub
            </a>
          </div>

          <p className="mt-5 text-[13px] text-zinc-500 sm:mt-7 sm:text-[14px]">
            Открытый код. Проверяемая безопасность.
          </p>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto grid max-w-[1440px] scroll-mt-20 grid-cols-2 gap-3 px-5 pb-5 sm:hidden"
      >
        {mobileFeatureTiles.map((feature) => (
          <article
            key={feature.title}
            className="min-h-[148px] rounded-2xl border border-purple-500/35 bg-[radial-gradient(circle_at_18%_0%,rgba(124,58,237,0.2),transparent_42%),#050509] p-5 shadow-[0_0_34px_rgba(88,28,135,0.22)] transition hover:border-purple-400/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] active:border-purple-400/70 active:bg-purple-950/20"
          >
            <div className="mb-4 text-purple-400 [&_svg]:h-7 [&_svg]:w-7 [&_path]:fill-none [&_path]:stroke-current [&_path]:stroke-2">
              {feature.icon}
            </div>
            <h3 className="text-[14px] font-black uppercase tracking-[-0.03em]">
              {feature.title}
            </h3>
            {feature.text ? (
              <p className="mt-3 overflow-hidden text-[12px] leading-5 text-zinc-500 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                {feature.text}
              </p>
            ) : null}
          </article>
        ))}
      </section>

      <section
        id="features-desktop"
        className="mx-auto hidden max-w-[1440px] gap-5 px-10 pb-6 sm:grid md:grid-cols-2 xl:grid-cols-5"
      >
        {features.map((feature) => (
          <article
            key={feature.title}
            className="min-h-[266px] rounded-xl border border-purple-500/35 bg-[#050509] p-7 shadow-[0_0_34px_rgba(88,28,135,0.12)]"
          >
            <div className="mb-8 text-purple-500 [&_path]:fill-none [&_path]:stroke-current [&_path]:stroke-2">
              {feature.icon}
            </div>
            <h3 className="text-[20px] font-black uppercase tracking-[-0.03em]">
              {feature.title}
            </h3>
            <p className="mt-5 text-[15px] leading-7 text-zinc-500">
              {feature.text}
            </p>
            <a
              href="#download"
              className="mt-7 inline-flex text-[15px] font-bold text-purple-400"
            >
              Подробнее →
            </a>
          </article>
        ))}
      </section>

      <section id="security" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-2 sm:scroll-mt-24 sm:px-10 sm:py-4">
        <div className="grid gap-4 rounded-2xl border border-white/[0.08] bg-[#030306] px-4 py-5 shadow-[0_0_44px_rgba(88,28,135,0.08)] sm:min-h-[258px] sm:gap-10 sm:rounded-xl sm:px-7 sm:py-8 lg:grid-cols-[0.9fr_1.2fr]">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-purple-400 sm:text-[13px]">
              Почему DARKKICK
            </p>
            <h2 className="mt-3 max-w-[520px] text-[clamp(32px,9vw,44px)] font-bold leading-[1.02] tracking-[-0.04em] sm:mt-4 sm:text-[30px] sm:leading-tight">
              Приватность по умолчанию.
              <br />
              <span className="hidden sm:inline">Свобода навсегда.</span>
            </h2>
            <p className="mt-3 hidden max-w-[570px] text-[14px] leading-6 text-zinc-500 sm:mt-6 sm:block sm:text-[15px] sm:leading-7">
              Мы создали DARKKICK, чтобы вернуть контроль над общением
              пользователям. Никаких компромиссов между удобством и
              безопасностью.
            </p>
            <a
              href="#screenshots"
              className="mt-5 hidden h-11 items-center rounded-lg bg-purple-600 px-6 text-[15px] font-bold text-white shadow-[0_0_24px_rgba(124,58,237,0.44)] sm:inline-flex sm:mt-7"
            >
              Узнать больше
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 overflow-hidden sm:gap-px sm:bg-white/[0.07] lg:grid-cols-2">
            {privacyItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-purple-500/15 bg-[#07070b] p-3.5 sm:flex sm:gap-5 sm:rounded-none sm:border-0 sm:bg-[#030306] sm:p-5">
                <div className="mb-2.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-500/25 bg-purple-950/20 text-purple-400 sm:mb-0 sm:h-12 sm:w-12 [&_path]:fill-none [&_path]:stroke-current [&_path]:stroke-2">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[13px] font-bold leading-tight sm:text-[16px]">
                    <span className="sm:hidden">{item.shortTitle}</span>
                    <span className="hidden sm:inline">{item.title}</span>
                  </h3>
                  <p className="mt-2 hidden text-[14px] leading-6 text-zinc-500 sm:block">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="screenshots" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-2 sm:scroll-mt-24 sm:px-10 sm:py-4">
        <div className="relative grid gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#030306] p-5 shadow-[0_0_58px_rgba(88,28,135,0.14)] sm:min-h-[310px] sm:gap-5 sm:rounded-xl sm:px-7 sm:py-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(124,58,237,0.24),transparent_34%),linear-gradient(rgba(168,85,247,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.045)_1px,transparent_1px)] bg-[size:auto,34px_34px,34px_34px]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.45)_1px,transparent_0)] [background-size:18px_18px]" />
          <div className="relative z-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-purple-400 sm:text-[13px]">
              Приложение
            </p>
            <h2 className="mt-3 text-[24px] font-bold leading-tight tracking-[-0.04em] sm:mt-4 sm:text-[34px]">
              Скриншоты скоро появятся.
            </h2>
            <p className="mt-3 max-w-[520px] text-[14px] leading-6 text-zinc-400 sm:mt-7 sm:text-[18px] sm:leading-9">
              DARKKICK активно развивается.
              <br />
              Сейчас мы сосредоточены на разработке новых функций и улучшении
              интерфейса.
            </p>
            <p className="mt-2 max-w-[530px] text-[12px] leading-5 text-zinc-500 sm:mt-5 sm:text-[14px] sm:leading-7">
              Первые реальные скриншоты появятся после финального редизайна
              интерфейса.
            </p>
          </div>

          <div className="relative z-10 flex min-h-[132px] max-w-full items-center justify-center rounded-2xl border border-purple-500/45 bg-[#050508] shadow-[0_0_62px_rgba(124,58,237,0.26)] sm:min-h-[205px] sm:rounded-lg sm:shadow-[0_0_86px_rgba(124,58,237,0.34)]">
            <div className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.2),transparent_58%)]" />
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.22em] text-purple-300 sm:text-[15px] sm:tracking-[0.55em]">
                DARKKICK
              </p>
              <p className="mt-3 text-[clamp(28px,8vw,40px)] font-bold uppercase tracking-[0.08em] text-purple-400 sm:mt-5 sm:text-[32px] sm:tracking-[0.42em]">
                SCREENSHOTS
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-zinc-300 sm:mt-5 sm:text-[17px] sm:tracking-[0.42em]">
                COMING SOON
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-2 sm:scroll-mt-24 sm:px-10 sm:py-4">
        <div className="grid gap-5 rounded-2xl border border-white/[0.08] bg-[linear-gradient(125deg,rgba(88,28,135,0.12),#030306_34%,#030306)] px-4 py-5 shadow-[0_0_52px_rgba(88,28,135,0.1)] sm:gap-12 sm:rounded-xl sm:px-7 sm:py-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-purple-400 sm:text-[13px]">
              О проекте
            </p>
            <h2 className="mt-3 max-w-[560px] text-[clamp(30px,8vw,38px)] font-bold leading-[1.03] tracking-[-0.045em] sm:mt-5 sm:text-[38px] sm:leading-tight">
              Создано одним человеком.
              <br />
              Без команды.
              <span className="sm:hidden"> </span>
              <br className="hidden sm:block" />
              Без инвесторов.
              <span className="sm:hidden"> </span>
              <br className="hidden sm:block" />
              Без корпорации.
            </h2>
            <p className="mt-3 max-w-[560px] text-[13px] leading-6 text-zinc-400 sm:mt-7 sm:text-[17px] sm:leading-8">
              DARKKICK — независимый проект, созданный из любви к приватности,
              свободе и собственному стилю.
            </p>
            <a
              href="#download"
              className="mt-4 inline-flex h-10 items-center rounded-md border border-purple-500/60 bg-purple-950/10 px-5 text-[13px] font-bold text-purple-200 shadow-[0_0_24px_rgba(124,58,237,0.14)] sm:mt-7 sm:h-11 sm:px-6 sm:text-[14px]"
            >
              История проекта
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-5 xl:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="min-h-[112px] max-h-[150px] rounded-2xl border border-white/[0.08] bg-[#060609] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:min-h-[196px] sm:max-h-none sm:rounded-xl sm:p-7"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-950/25 text-purple-400 shadow-[0_0_28px_rgba(124,58,237,0.18)] sm:mb-7 sm:h-12 sm:w-12 [&_svg]:h-5 [&_svg]:w-5 sm:[&_svg]:h-9 sm:[&_svg]:w-9 [&_path]:fill-none [&_path]:stroke-current [&_path]:stroke-2">
                  {stat.icon}
                </div>
                <p className="text-[20px] font-bold tracking-[-0.04em] sm:text-[31px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[12px] text-zinc-500 sm:mt-2 sm:text-[15px]">
                  {stat.label.toLowerCase()}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-2 sm:scroll-mt-24 sm:px-10 sm:py-4">
        <div className="relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-purple-500/45 bg-[#050507] p-7 shadow-[0_0_54px_rgba(124,58,237,0.2)] sm:min-h-[180px] sm:rounded-xl sm:px-16 sm:py-10 sm:shadow-[0_0_70px_rgba(124,58,237,0.24)] lg:flex-row lg:items-center lg:justify-between">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[56%] bg-[radial-gradient(circle_at_0%_50%,rgba(147,51,234,0.62),rgba(91,33,182,0.28)_34%,transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(91,33,182,0.34),transparent_46%)]" />
          <div className="relative z-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-purple-300 sm:text-[13px]">
              Скачать
            </p>
            <h2 className="mt-2 max-w-[660px] text-[clamp(30px,8vw,42px)] font-bold leading-[1.02] tracking-[-0.04em] sm:text-[36px] sm:leading-tight">
              DARKKICK для общения
              <br />
              без лишних свидетелей.
            </h2>
            <p className="mt-3 text-[13px] leading-6 text-purple-100/75 sm:mt-4 sm:text-[17px]">
              Скоро будет доступен для первых пользователей.
            </p>
          </div>

          <a
            href={apkDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-purple-600 px-6 text-[15px] font-bold text-white shadow-[0_0_44px_rgba(168,85,247,0.68),0_0_92px_rgba(124,58,237,0.36)] hover:bg-purple-500 sm:h-[64px] sm:w-auto sm:px-14 sm:text-[16px]"
          >
            <DownloadIcon className="h-5 w-5" />
            Скачать DARKKICK
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
