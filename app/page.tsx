import Image from "next/image";

const apkDownloadUrl =
  "https://github.com/vladbogus498-design/my_messenger/releases/download/v1.0.0/app-release.11.zip";

const githubUrl = "https://github.com/vladbogus498-design/my_messenger";

const features = [
  {
    title: "Чаты",
    text: "Личные диалоги, группы и быстрый обмен сообщениями без лишнего шума.",
  },
  {
    title: "Звонки",
    text: "Голосовое общение внутри приватного пространства DARKKICK.",
  },
  {
    title: "Профиль",
    text: "Минимальная идентичность, контроль видимости и темный стиль по умолчанию.",
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

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
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
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function MessengerShot({ compact = false }: { compact?: boolean }) {
  const messages = [
    ["DARKKICK", "Сообщение исчезнет через 24 часа"],
    ["Vlad", "Без номера. Без лишних данных."],
    ["Ari", "Звонок защищен"],
  ];

  return (
    <div
      className={
        compact
          ? "w-[min(76vw,310px)] rounded-[34px] border border-white/12 bg-[#050506] p-2 shadow-[0_0_70px_rgba(109,40,217,0.34),0_28px_80px_rgba(0,0,0,0.9)]"
          : "w-full rounded-[28px] border border-white/10 bg-[#050506] p-2 shadow-[0_0_90px_rgba(109,40,217,0.32),0_36px_120px_rgba(0,0,0,0.86)] sm:rounded-[42px] sm:p-3"
      }
    >
      <div className="overflow-hidden rounded-[26px] border border-white/[0.07] bg-black sm:rounded-[34px]">
        <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#08080a] px-4 py-4 sm:px-6 sm:py-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-purple-300/80">
              Secure messenger
            </p>
            <p className="mt-1 text-[22px] font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-[28px]">
              DARKKICK
            </p>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_16px_rgba(168,85,247,1)]" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
          </div>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-[0.86fr_1.14fr] sm:gap-0 sm:p-0">
          <div className="space-y-2 sm:border-r sm:border-white/[0.07] sm:p-5">
            {messages.map(([name, text], index) => (
              <div
                key={name}
                className={`rounded-2xl border p-3 ${
                  index === 0
                    ? "border-purple-400/40 bg-purple-500/12"
                    : "border-white/[0.07] bg-white/[0.035]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[11px] font-black text-black">
                    {name.slice(0, 1)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-bold text-white">
                      {name}
                    </p>
                    <p className="truncate text-[11px] text-zinc-500">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="min-h-[280px] bg-[radial-gradient(circle_at_70%_0%,rgba(109,40,217,0.24),transparent_38%),#030304] p-4 sm:min-h-[520px] sm:p-6">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
              <div>
                <p className="text-[15px] font-bold text-white">Private room</p>
                <p className="mt-1 text-[11px] text-purple-300">online now</p>
              </div>
              <div className="h-10 w-10 rounded-full border border-purple-400/40 bg-purple-500/10" />
            </div>

            <div className="mt-8 space-y-4">
              <div className="mr-10 rounded-2xl rounded-tl-md border border-white/[0.08] bg-white/[0.055] p-4 text-[13px] leading-6 text-zinc-200">
                Без границ. Без слежки.
              </div>
              <div className="ml-12 rounded-2xl rounded-tr-md bg-purple-600 p-4 text-[13px] leading-6 text-white shadow-[0_0_34px_rgba(124,58,237,0.5)]">
                Минимум данных. Максимум контроля.
              </div>
              <div className="mr-16 rounded-2xl rounded-tl-md border border-white/[0.08] bg-white/[0.055] p-4 text-[13px] leading-6 text-zinc-200">
                Звонок начнется в защищенном режиме.
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-full border border-white/[0.08] bg-black/70 p-2">
              <div className="h-9 flex-1 rounded-full bg-white/[0.06]" />
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneProof() {
  return (
    <div className="relative mx-auto w-fit lg:ml-auto lg:mr-0">
      <div className="absolute -inset-10 rounded-full bg-purple-700/24 blur-[80px]" />
      <div className="relative rounded-[42px] border border-white/10 bg-[#050506] p-2 shadow-[0_0_90px_rgba(109,40,217,0.34),0_42px_110px_rgba(0,0,0,0.9)]">
        <div className="relative h-[520px] w-[256px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-black sm:h-[610px] sm:w-[300px]">
          <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          <div className="h-full bg-[radial-gradient(circle_at_70%_12%,rgba(124,58,237,0.3),transparent_36%),#030304] px-4 pb-4 pt-11">
            <div className="flex items-center justify-between">
              <p className="text-[22px] font-black uppercase tracking-[-0.06em]">
                DARKKICK
              </p>
              <span className="h-9 w-9 rounded-full border border-purple-400/40 bg-purple-500/10" />
            </div>
            <p className="mt-2 text-[12px] text-zinc-500">private messenger</p>

            <div className="mt-8 rounded-3xl border border-purple-400/30 bg-purple-500/12 p-4">
              <p className="text-[12px] uppercase tracking-[0.18em] text-purple-200">
                live room
              </p>
              <p className="mt-3 text-[24px] font-bold leading-none tracking-[-0.04em]">
                Без слежки.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {["Чаты", "Звонки", "Профиль"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-3"
                >
                  <span className="h-10 w-10 rounded-full bg-white" />
                  <div className="flex-1">
                    <p className="text-[14px] font-bold">{item}</p>
                    <div className="mt-2 h-2 w-3/4 rounded-full bg-white/10" />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute inset-x-4 bottom-4 rounded-[26px] border border-white/[0.08] bg-[#09090b]/95 p-3">
              <div className="flex justify-around text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                <span className="text-purple-300">chat</span>
                <span>call</span>
                <span>me</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section
        id="top"
        className="relative isolate min-h-[100svh] overflow-hidden px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-20 lg:pt-10"
      >
        <div className="pointer-events-none absolute inset-0 -z-20">
          <Image
            src="/dark-angel-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 sm:opacity-24 lg:object-[72%_center] lg:opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_35%,rgba(88,28,135,0.26),transparent_34%),linear-gradient(90deg,#000_0%,rgba(0,0,0,0.94)_34%,rgba(0,0,0,0.7)_62%,#000_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.34)_0%,#000_96%)] lg:bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,#000_100%)]" />
        </div>

        <header className="mx-auto flex max-w-[1320px] items-center justify-between">
          <a
            href="#top"
            className="text-[22px] font-black uppercase leading-none tracking-[-0.06em] text-white sm:text-[28px]"
          >
            DARKKICK
          </a>
          <a
            href={githubUrl}
            className="text-[12px] font-bold uppercase tracking-[0.18em] text-zinc-500 transition hover:text-purple-300"
          >
            GitHub
          </a>
        </header>

        <div className="mx-auto grid max-w-[1320px] gap-12 pt-20 sm:pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:pt-24">
          <div className="max-w-[620px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-purple-300">
              Private messenger
            </p>
            <h1 className="mt-5 text-[clamp(64px,18vw,128px)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-white lg:text-[138px]">
              DARKKICK
            </h1>
            <h2 className="mt-8 max-w-[600px] text-[clamp(32px,8vw,64px)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
              Без границ.
              <br />
              <span className="text-purple-300">Без слежки.</span>
            </h2>
            <p className="mt-6 max-w-[470px] text-[16px] leading-7 text-zinc-400 sm:text-[18px] sm:leading-8">
              Приватный мессенджер с темным характером, минимальным сбором
              данных и фокусом на личное общение.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={apkDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-[14px] font-black uppercase tracking-[0.08em] text-black shadow-[0_0_44px_rgba(255,255,255,0.18)] transition hover:bg-purple-200"
              >
                <DownloadIcon className="h-5 w-5" />
                Скачать
              </a>
              <a
                href="#product"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-7 text-[14px] font-bold uppercase tracking-[0.08em] text-white transition hover:border-purple-300/60 hover:text-purple-200"
              >
                Продукт
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <PhoneProof />
          </div>
        </div>
      </section>

      <section id="product" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-[650px] text-[clamp(38px,7vw,76px)] font-semibold leading-[0.95] tracking-[-0.06em]">
              Product proof,
              <br />
              not promises.
            </h2>
            <p className="max-w-[330px] text-[15px] leading-7 text-zinc-500">
              Черный интерфейс, чистые состояния, быстрый доступ к главным
              функциям.
            </p>
          </div>
          <MessengerShot />
        </div>
      </section>

      <section id="privacy" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1180px] border-y border-white/[0.08] py-16 sm:py-24">
          <h2 className="max-w-[900px] text-[clamp(42px,8vw,92px)] font-semibold leading-[0.94] tracking-[-0.065em]">
            Минимальный сбор данных.
            <br />
            <span className="text-purple-300">Максимальный контроль.</span>
          </h2>
          <p className="mt-8 max-w-[620px] text-[17px] leading-8 text-zinc-400">
            DARKKICK строится вокруг личного пространства: меньше лишней
            идентификации, меньше шума, больше контроля над общением.
          </p>
        </div>
      </section>

      <section id="features" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="min-h-[260px] rounded-[28px] border border-white/[0.08] bg-[#050506] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-9"
              >
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-purple-300">
                  Core
                </p>
                <h3 className="mt-12 text-[42px] font-semibold leading-none tracking-[-0.055em]">
                  {feature.title}
                </h3>
                <p className="mt-6 text-[15px] leading-7 text-zinc-500">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="independent" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 className="text-[clamp(44px,8vw,96px)] font-semibold leading-[0.94] tracking-[-0.07em]">
            Без команды.
            <br />
            Без инвесторов.
            <br />
            <span className="text-purple-300">Без корпорации.</span>
          </h2>
          <p className="max-w-[510px] text-[17px] leading-8 text-zinc-400 lg:pb-2">
            DARKKICK solo-developed: независимый продукт, собранный вручную
            вокруг приватности, атмосферы и контроля над собственным общением.
          </p>
        </div>
      </section>

      <section id="download" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative mx-auto overflow-hidden rounded-[34px] border border-purple-400/25 bg-[#050506] px-6 py-14 shadow-[0_0_90px_rgba(109,40,217,0.22)] sm:px-12 sm:py-20 lg:max-w-[1180px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,0.34),transparent_38%)]" />
          <div className="relative z-10 mx-auto max-w-[780px] text-center">
            <p className="text-[clamp(64px,14vw,132px)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
              DARKKICK
            </p>
            <h2 className="mt-8 text-[clamp(32px,7vw,64px)] font-semibold leading-[0.98] tracking-[-0.06em]">
              Начало чего-то большего.
            </h2>
            <a
              href={apkDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-[14px] font-black uppercase tracking-[0.08em] text-black transition hover:bg-purple-200 sm:h-16 sm:px-11"
            >
              <DownloadIcon className="h-5 w-5" />
              Скачать
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 border-t border-white/[0.08] pt-8 text-[13px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black uppercase tracking-[-0.04em] text-white">
            DARKKICK
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            <a className="transition hover:text-purple-300" href="/privacy">
              Privacy Policy
            </a>
            <a className="transition hover:text-purple-300" href="/terms">
              Terms of Service
            </a>
            <a className="transition hover:text-purple-300" href="/support">
              Support
            </a>
            <a className="transition hover:text-purple-300" href={githubUrl}>
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
