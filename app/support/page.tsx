import type { Metadata } from "next";
import { InfoPage } from "../components/InfoPage";

const email = "darkkick.app@gmail.com";

export const metadata: Metadata = {
  title: "Support — DARKKICK",
  description: "Поддержка DARKKICK.",
};

export default function SupportPage() {
  return (
    <InfoPage
      eyebrow="Support"
      title="Поддержка DARKKICK"
      description="Если у вас возникли вопросы, предложения или проблемы, свяжитесь с нами."
      sections={[
        {
          title: "Email",
          body: [
            `Напишите нам на ${email}. Опишите вопрос или проблему коротко, но с важными деталями: что произошло, где именно и что вы ожидали увидеть.`,
          ],
        },
        {
          title: "Ответ",
          body: [
            "Мы стараемся отвечать на обращения как можно быстрее.",
            "DARKKICK развивается постепенно, поэтому обратная связь помогает делать продукт стабильнее, понятнее и ближе к людям, которые им пользуются.",
          ],
        },
      ]}
    >
      <div className="relative mt-6 rounded-xl border border-purple-500/30 bg-[linear-gradient(120deg,rgba(88,28,135,0.28),#030306_48%)] p-6 shadow-[0_0_52px_rgba(124,58,237,0.16)] sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-purple-300">
          Контакты
        </p>
        <a
          href={`mailto:${email}`}
          className="mt-4 inline-flex text-2xl font-bold tracking-[-0.04em] text-white hover:text-purple-300"
        >
          {email}
        </a>
      </div>
    </InfoPage>
  );
}
