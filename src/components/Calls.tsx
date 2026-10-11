import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";

type Mode = "audio" | "video";
type State = "idle" | "ringing" | "active";

const perks = [
  { icon: "Waves", title: "HD-звук", text: "Шумоподавление убирает ветер, улицу и стук клавиатуры." },
  { icon: "Video", title: "Видео до 1080p", text: "Чёткая картинка даже на медленном мобильном интернете." },
  { icon: "UsersRound", title: "Групповые до 32", text: "Созвоны с друзьями или командой в один тап." },
  { icon: "MonitorUp", title: "Демонстрация экрана", text: "Покажите презентацию или фото прямо во время звонка." },
];

const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

const Calls = () => {
  const ref = useReveal<HTMLElement>();
  const [mode, setMode] = useState<Mode>("audio");
  const [state, setState] = useState<State>("idle");
  const [sec, setSec] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (state === "ringing") {
      const t = setTimeout(() => setState("active"), 1800);
      return () => clearTimeout(t);
    }
    if (state === "active") {
      const t = setInterval(() => setSec((s) => s + 1), 1000);
      return () => clearInterval(t);
    }
  }, [state]);

  const start = () => {
    setSec(0);
    setMuted(false);
    setState("ringing");
  };
  const end = () => setState("idle");

  return (
    <section id="calls" ref={ref} className="relative py-28 md:py-36 bg-card overflow-hidden">
      <div className="absolute -right-32 top-20 w-96 h-96 rounded-full bg-accent/20 blur-[120px]" />
      <div className="container max-w-6xl relative grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal order-2 lg:order-1 mx-auto w-full max-w-[360px]">
          <div className="flex justify-center gap-2 mb-6">
            {(["audio", "video"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  mode === m ? "bg-foreground text-background" : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {m === "audio" ? "Аудио" : "Видео"}
              </button>
            ))}
          </div>

          <div
            className={`relative rounded-[2.75rem] border-[10px] border-secondary h-[520px] overflow-hidden shadow-2xl transition-colors duration-500 ${
              state !== "idle" && mode === "video" ? "bg-gradient-to-br from-accent/70 via-background to-primary/40" : "bg-background"
            }`}
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-secondary z-10" />

            <div className="h-full flex flex-col items-center justify-between pt-16 pb-10 px-6">
              <div className="text-center">
                <div className="relative mx-auto w-28 h-28">
                  {state !== "idle" && (
                    <>
                      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ring" />
                      <span className="absolute inset-0 rounded-full bg-primary/30 animate-ring" style={{ animationDelay: "0.7s" }} />
                    </>
                  )}
                  <span className="relative grid place-items-center w-28 h-28 rounded-full bg-accent text-accent-foreground font-display text-4xl font-black">
                    М
                  </span>
                </div>
                <div className="mt-6 font-display text-2xl font-bold">Маша</div>
                <div className="mt-1 text-sm text-muted-foreground h-5">
                  {state === "idle" && (mode === "audio" ? "Нажмите, чтобы позвонить" : "Нажмите для видеозвонка")}
                  {state === "ringing" && "Вызов…"}
                  {state === "active" && <span className="text-primary font-semibold">{fmt(sec)}</span>}
                </div>
              </div>

              {state === "active" && (
                <div className="flex items-end gap-1 h-12">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-full rounded-full origin-bottom ${muted ? "bg-muted scale-y-[0.2]" : "bg-primary animate-wave"}`}
                      style={{ animationDelay: `${i * 0.07}s` }}
                    />
                  ))}
                </div>
              )}

              {state === "idle" ? (
                <button
                  onClick={start}
                  className="grid place-items-center w-20 h-20 rounded-full bg-primary text-primary-foreground hover-scale shadow-xl"
                  aria-label="Позвонить"
                >
                  <Icon name={mode === "audio" ? "Phone" : "Video"} size={30} />
                </button>
              ) : (
                <div className="flex items-center gap-5">
                  <button
                    onClick={() => setMuted((v) => !v)}
                    aria-label="Микрофон"
                    className={`grid place-items-center w-14 h-14 rounded-full transition-colors ${
                      muted ? "bg-foreground text-background" : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <Icon name={muted ? "MicOff" : "Mic"} size={22} />
                  </button>
                  <button
                    onClick={end}
                    aria-label="Завершить"
                    className="grid place-items-center w-20 h-20 rounded-full bg-destructive text-destructive-foreground hover-scale shadow-xl"
                  >
                    <Icon name="PhoneOff" size={30} />
                  </button>
                  <button
                    aria-label="Громкая связь"
                    className="grid place-items-center w-14 h-14 rounded-full bg-secondary text-secondary-foreground"
                  >
                    <Icon name="Volume2" size={22} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="reveal inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-sm font-semibold -rotate-2">
            <Icon name="PhoneCall" size={16} />
            Да, и звонки
          </div>
          <h2 className="reveal mt-6 font-display font-black text-5xl md:text-6xl leading-[0.95] tracking-tight">
            Звонки, которые <span className="text-primary">не рвутся</span>
          </h2>
          <p className="reveal mt-6 text-lg text-muted-foreground max-w-lg">
            Попробуйте прямо здесь: нажмите зелёную кнопку на телефоне — так выглядит звонок в ShortApp.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {perks.map((p, i) => (
              <div
                key={p.title}
                className="reveal rounded-3xl border border-border bg-background p-5 hover:border-primary/60 transition-colors"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <Icon name={p.icon} size={24} className="text-primary" fallback="Sparkles" />
                <div className="mt-4 font-display font-bold">{p.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calls;
