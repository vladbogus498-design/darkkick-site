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
    title: "Сквозное шифрование",
    text: "Все сообщения и звонки защищены сквозным шифрованием.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path d="M12 3.5 19 6v5.8c0 4.2-2.7 7.2-7 8.7-4.3-1.5-7-4.5-7-8.7V6l7-2.5Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
  },
  {
    title: "Самоуничтожение",
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
    text: "Регистрация без привязки к номеру. Полная анонимность.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4.5 20c.8-4 3.3-6 7.5-6s6.7 2 7.5 6" />
      </svg>
    ),
  },
  {
    title: "Открытый код",
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
    <main className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-black">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-10">
          <a
            href="#top"
            className="text-[28px] font-black uppercase tracking-[-0.08em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.24)]"
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
            className="text-[15px] font-bold text-zinc-200 hover:text-purple-300"
          >
            Скачать
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative mx-auto min-h-[764px] max-w-[1440px] overflow-hidden px-10 pt-[156px]"
      >
        <div className="absolute inset-x-0 top-[76px] h-[690px] bg-[url('/dark-angel-hero.png')] bg-[length:auto_100%] bg-[position:right_top] bg-no-repeat" />
        <div className="absolute inset-x-0 top-[76px] h-[690px] bg-[linear-gradient(90deg,#000_0%,#000_32%,rgba(0,0,0,0.82)_42%,rgba(0,0,0,0.12)_65%,#000_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 max-w-[540px]">
          <div className="inline-flex h-8 items-center gap-3 rounded-full bg-[#101014] px-4 text-[15px] text-zinc-200 ring-1 ring-white/[0.06]">
            <span className="h-2.5 w-2.5 rounded-full bg-purple-500 shadow-[0_0_16px_rgba(168,85,247,1)]" />
            Приватный мессенджер нового поколения
          </div>

          <h1 className="mt-8 text-[104px] font-black uppercase leading-[0.9] tracking-[-0.075em] text-zinc-100 drop-shadow-[0_8px_28px_rgba(255,255,255,0.16)]">
            DARKKICK
          </h1>

          <h2 className="mt-8 text-[34px] font-bold leading-tight tracking-[-0.04em] text-white">
            Без границ. <span className="text-purple-500">Без слежки.</span>
          </h2>

          <p className="mt-8 max-w-[470px] text-[17px] leading-8 text-zinc-400">
            DARKKICK — это приватный мессенджер с упором на безопасность,
            свободу и стиль. Никаких телефонных номеров. Никаких компромиссов.
          </p>

          <div className="mt-10 flex gap-5">
            <a
              href={apkDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[58px] items-center gap-3 rounded-lg bg-purple-600 px-8 text-[16px] font-bold text-white shadow-[0_0_36px_rgba(124,58,237,0.62)] hover:bg-purple-500"
            >
              <DownloadIcon className="h-5 w-5" />
              Скачать DARKKICK
            </a>
            <a
              href={githubUrl}
              className="inline-flex h-[58px] items-center justify-center rounded-lg border border-white/20 bg-[#09090d] px-8 text-[16px] font-bold text-white hover:border-purple-500/70"
            >
              GitHub
            </a>
          </div>

          <p className="mt-7 text-[14px] text-zinc-500">
            Открытый код. Проверяемая безопасность.
          </p>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 px-10 pb-6 md:grid-cols-2 xl:grid-cols-5"
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

      <section id="security" className="mx-auto max-w-[1440px] px-10 py-4">
        <div className="grid min-h-[258px] gap-10 rounded-xl border border-white/[0.08] bg-[#030306] px-7 py-8 shadow-[0_0_44px_rgba(88,28,135,0.08)] lg:grid-cols-[0.9fr_1.2fr]">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-purple-400">
              Почему DARKKICK
            </p>
            <h2 className="mt-4 max-w-[520px] text-[30px] font-bold leading-tight tracking-[-0.04em]">
              Приватность по умолчанию.
              <br />
              Свобода навсегда.
            </h2>
            <p className="mt-6 max-w-[570px] text-[15px] leading-7 text-zinc-500">
              Мы создали DARKKICK, чтобы вернуть контроль над общением
              пользователям. Никаких компромиссов между удобством и
              безопасностью.
            </p>
            <a
              href="#screenshots"
              className="mt-7 inline-flex h-11 items-center rounded-lg bg-purple-600 px-6 text-[15px] font-bold text-white shadow-[0_0_24px_rgba(124,58,237,0.44)]"
            >
              Узнать больше
            </a>
          </div>

          <div className="grid gap-px overflow-hidden bg-white/[0.07] lg:grid-cols-2">
            {privacyItems.map((item) => (
              <article key={item.title} className="flex gap-5 bg-[#030306] p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/25 bg-purple-950/20 text-purple-400 [&_path]:fill-none [&_path]:stroke-current [&_path]:stroke-2">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-zinc-500">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="screenshots" className="mx-auto max-w-[1440px] px-10 py-4">
        <div className="relative grid min-h-[310px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#030306] px-7 py-9 shadow-[0_0_58px_rgba(88,28,135,0.14)] lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(124,58,237,0.24),transparent_34%),linear-gradient(rgba(168,85,247,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.045)_1px,transparent_1px)] bg-[size:auto,34px_34px,34px_34px]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.45)_1px,transparent_0)] [background-size:18px_18px]" />
          <div className="relative z-10">
            <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-purple-400">
              Приложение
            </p>
            <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.04em]">
              Скриншоты скоро появятся.
            </h2>
            <p className="mt-7 max-w-[520px] text-[18px] leading-9 text-zinc-400">
              DARKKICK активно развивается.
              <br />
              Сейчас мы сосредоточены на разработке новых функций и улучшении
              интерфейса.
            </p>
            <p className="mt-5 max-w-[530px] text-[14px] leading-7 text-zinc-500">
              Первые реальные скриншоты появятся после финального редизайна
              интерфейса.
            </p>
          </div>

          <div className="relative z-10 flex min-h-[205px] items-center justify-center rounded-lg border border-purple-500/45 bg-[#050508] shadow-[0_0_86px_rgba(124,58,237,0.34)]">
            <div className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.2),transparent_58%)]" />
            <div className="text-center">
              <p className="text-[15px] uppercase tracking-[0.55em] text-purple-300">
                DARKKICK
              </p>
              <p className="mt-5 text-[32px] font-bold uppercase tracking-[0.42em] text-purple-400">
                SCREENSHOTS
              </p>
              <p className="mt-5 text-[17px] uppercase tracking-[0.42em] text-zinc-300">
                COMING SOON
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1440px] px-10 py-4">
        <div className="grid gap-12 rounded-xl border border-white/[0.08] bg-[linear-gradient(125deg,rgba(88,28,135,0.12),#030306_34%,#030306)] px-7 py-10 shadow-[0_0_52px_rgba(88,28,135,0.1)] lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-purple-400">
              О проекте
            </p>
            <h2 className="mt-5 max-w-[560px] text-[38px] font-bold leading-tight tracking-[-0.045em]">
              Создано одним человеком.
              <br />
              Без команды. Без инвесторов.
              <br />
              Без корпорации.
            </h2>
            <p className="mt-7 max-w-[560px] text-[17px] leading-8 text-zinc-400">
              DARKKICK — независимый проект, созданный из любви к приватности,
              свободе и собственному стилю.
            </p>
            <a
              href="#download"
              className="mt-7 inline-flex h-11 items-center rounded-md border border-purple-500/60 bg-purple-950/10 px-6 text-[14px] font-bold text-purple-200 shadow-[0_0_24px_rgba(124,58,237,0.14)]"
            >
              История проекта
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="min-h-[196px] rounded-xl border border-white/[0.08] bg-[#060609] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-950/25 text-purple-400 shadow-[0_0_28px_rgba(124,58,237,0.18)] [&_path]:fill-none [&_path]:stroke-current [&_path]:stroke-2">
                  {stat.icon}
                </div>
                <p className="text-[31px] font-bold tracking-[-0.04em]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[15px] text-zinc-500">
                  {stat.label.toLowerCase()}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-[1440px] px-10 py-4">
        <div className="relative flex min-h-[180px] flex-col gap-8 overflow-hidden rounded-xl border border-purple-500/45 bg-[#050507] px-16 py-10 shadow-[0_0_70px_rgba(124,58,237,0.24)] lg:flex-row lg:items-center lg:justify-between">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[56%] bg-[radial-gradient(circle_at_0%_50%,rgba(147,51,234,0.62),rgba(91,33,182,0.28)_34%,transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(91,33,182,0.34),transparent_46%)]" />
          <div className="relative z-10">
            <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-purple-300">
              Скачать
            </p>
            <h2 className="mt-2 max-w-[660px] text-[36px] font-bold leading-tight tracking-[-0.04em]">
              DARKKICK для общения
              <br />
              без лишних свидетелей.
            </h2>
            <p className="mt-4 text-[17px] text-purple-100/75">
              Скоро будет доступен для первых пользователей.
            </p>
          </div>

          <a
            href={apkDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex h-[64px] items-center gap-3 rounded-lg bg-purple-600 px-14 text-[16px] font-bold text-white shadow-[0_0_44px_rgba(168,85,247,0.68),0_0_92px_rgba(124,58,237,0.36)] hover:bg-purple-500"
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
