import Icon from "@/components/ui/icon";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/82eb0b6d-91ae-4d3d-a0a1-a53fb8c6e823/files/f6b681bd-fac4-4010-a438-2123254d42af.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative lg:min-h-[min(100vh,920px)] pt-32 pb-20 overflow-hidden grid-bg">
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[460px] h-[460px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative container max-w-6xl grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Сообщения и звонки — в одном касании
          </div>

          <h1 className="mt-6 font-display font-black leading-[0.92] tracking-tight text-[clamp(3rem,8vw,6.5rem)]">
            <span className="block animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Говори
            </span>
            <span className="block text-outline animate-fade-in" style={{ animationDelay: "0.2s" }}>
              коротко.
            </span>
            <span className="block animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <span className="relative inline-block">
                <span className="relative z-10 text-primary-foreground px-3">Звони</span>
                <span className="absolute inset-0 bg-primary rounded-2xl -rotate-2" />
              </span>{" "}
              <span className="text-accent">сразу.</span>
            </span>
          </h1>

          <p
            className="mt-8 max-w-md text-lg text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.45s" }}
          >
            ShortApp — мессенджер без лишнего шума: быстрые сообщения, голосовые, видео- и аудиозвонки
            в кристально чистом качестве. Всё, что нужно, — и ничего больше.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="#download"
              className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-6 pr-2 py-2 font-semibold text-lg hover-scale"
            >
              Скачать бесплатно
              <span className="grid place-items-center w-11 h-11 rounded-full bg-primary-foreground text-primary group-hover:rotate-[-45deg] transition-transform">
                <Icon name="ArrowRight" size={20} />
              </span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold hover:bg-secondary transition-colors"
            >
              <Icon name="Sparkles" size={18} className="text-accent" />
              Что умеет
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 animate-fade-in" style={{ animationDelay: "0.75s" }}>
            {[
              ["2M+", "пользователей"],
              ["4.9", "рейтинг"],
              ["0.2с", "доставка"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-extrabold">{n}</div>
                <div className="text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-primary/40 animate-spin-slow" />
          <div className="relative aspect-square rounded-[3rem] overflow-hidden rotate-3 border border-border shadow-2xl">
            <img src={HERO_IMG} alt="Приложение ShortApp" className="w-full h-full object-cover" />
          </div>

          <div
            className="absolute -left-6 top-10 rounded-2xl bg-card border border-border px-4 py-3 shadow-xl animate-float"
            style={{ ["--r" as string]: "-6deg" }}
          >
            <div className="text-xs text-muted-foreground">Маша</div>
            <div className="font-medium">Созвонимся? 📞</div>
          </div>

          <div
            className="absolute -right-4 bottom-12 flex items-center gap-3 rounded-2xl bg-primary text-primary-foreground px-4 py-3 shadow-xl animate-float"
            style={{ ["--r" as string]: "5deg", animationDelay: "1.5s" }}
          >
            <span className="relative grid place-items-center w-9 h-9 rounded-full bg-primary-foreground text-primary">
              <span className="absolute inset-0 rounded-full bg-primary-foreground animate-ring" />
              <Icon name="Phone" size={16} className="relative" />
            </span>
            <div>
              <div className="text-xs opacity-70">Входящий звонок</div>
              <div className="font-semibold">00:42</div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-10 flex items-end gap-1 h-10 rounded-full bg-card border border-border px-4 py-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="w-1 h-full rounded-full bg-accent origin-bottom animate-wave"
                style={{ animationDelay: `${i * 0.09}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;