import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  {
    icon: "MessageCircle",
    title: "Мгновенные сообщения",
    text: "Доставка за доли секунды, статусы прочтения и ответы на конкретное сообщение свайпом.",
    preview: [
      { me: false, t: "Ты где?" },
      { me: true, t: "Уже подхожу 🏃" },
      { me: false, t: "Жду у входа" },
    ],
  },
  {
    icon: "Mic",
    title: "Голосовые за секунду",
    text: "Зажми и говори. Ускорение воспроизведения, расшифровка в текст и пауза в любой момент.",
    preview: [
      { me: false, t: "🎙 0:12 голосовое" },
      { me: true, t: "Расшифровка: «Буду через 10 минут»" },
    ],
  },
  {
    icon: "Users",
    title: "Группы и каналы",
    text: "Чаты до 1000 человек, упоминания, опросы и закреплённые сообщения для важного.",
    preview: [
      { me: false, t: "Аня: Голосуем за пятницу?" },
      { me: false, t: "📊 Да — 8 · Нет — 2" },
      { me: true, t: "Я за!" },
    ],
  },
  {
    icon: "ShieldCheck",
    title: "Сквозное шифрование",
    text: "Сообщения и звонки защищены. Прочитать переписку можете только вы и собеседник.",
    preview: [
      { me: false, t: "🔒 Чат защищён" },
      { me: true, t: "Отлично, пересылаю документы" },
    ],
  },
];

const Features = () => {
  const [active, setActive] = useState(0);
  const ref = useReveal<HTMLElement>();
  const f = features[active];

  return (
    <section id="features" ref={ref} className="relative py-28 md:py-36">
      <div className="container max-w-6xl">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Функции,
            <br />
            <span className="text-outline">а не</span> <span className="text-accent">шум</span>
          </h2>
          <p className="max-w-sm text-muted-foreground text-lg">
            Мы убрали всё лишнее и оставили то, чем вы пользуетесь каждый день. Нажмите на функцию —
            посмотрите, как она выглядит.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setActive(i)}
                className={`reveal text-left rounded-3xl border p-6 transition-all duration-300 ${
                  i === active
                    ? "bg-primary text-primary-foreground border-primary -rotate-1 shadow-2xl"
                    : "bg-card text-card-foreground border-border hover:-translate-y-1 hover:border-primary/50"
                }`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid place-items-center w-12 h-12 rounded-2xl ${
                      i === active ? "bg-primary-foreground text-primary" : "bg-secondary text-primary"
                    }`}
                  >
                    <Icon name={item.icon} size={24} />
                  </span>
                  <span className="font-display text-sm font-bold opacity-60">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${i === active ? "opacity-80" : "text-muted-foreground"}`}>
                  {item.text}
                </p>
              </button>
            ))}
          </div>

          <div className="reveal lg:sticky lg:top-28 mx-auto w-full max-w-[340px]">
            <div className="relative rounded-[2.75rem] border-[10px] border-secondary bg-background shadow-2xl overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-secondary z-10" />
              <div className="pt-10 px-4 pb-4 flex items-center gap-3 border-b border-border">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-display font-bold">
                  М
                </span>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Маша</div>
                  <div className="text-xs text-primary">в сети</div>
                </div>
                <Icon name="Phone" size={18} className="text-muted-foreground" />
                <Icon name="Video" size={18} className="text-muted-foreground" />
              </div>
              <div key={active} className="h-80 p-4 flex flex-col justify-end gap-2">
                {f.preview.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm animate-fade-in ${
                      m.me
                        ? "self-end bg-primary text-primary-foreground rounded-br-md"
                        : "self-start bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                    style={{ animationDelay: `${i * 0.25}s` }}
                  >
                    {m.t}
                  </div>
                ))}
              </div>
              <div className="p-3 flex items-center gap-2 border-t border-border">
                <div className="flex-1 rounded-full bg-secondary px-4 py-2 text-sm text-muted-foreground">Сообщение…</div>
                <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground">
                  <Icon name="Send" size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
