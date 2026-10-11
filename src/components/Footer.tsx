import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t border-border pt-16 pb-10 overflow-hidden">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground -rotate-6">
                <Icon name="Zap" size={20} />
              </span>
              <span className="font-display font-extrabold text-lg">
                Short<span className="text-primary">App</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Сообщения и звонки без лишнего. Коротко и по делу.</p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-semibold">Разделы</span>
              <a href="#home" className="text-muted-foreground hover:text-foreground">Главная</a>
              <a href="#features" className="text-muted-foreground hover:text-foreground">Функции</a>
              <a href="#calls" className="text-muted-foreground hover:text-foreground">Звонки</a>
              <a href="#download" className="text-muted-foreground hover:text-foreground">Скачать</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold">Связь</span>
              <a href="mailto:hello@shortapp.ru" className="text-muted-foreground hover:text-foreground">hello@shortapp.ru</a>
              <div className="flex gap-3 mt-1">
                {["Send", "Youtube", "Github"].map((n) => (
                  <a key={n} href="#home" className="grid place-items-center w-9 h-9 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon name={n} size={16} fallback="Link" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 font-display font-black text-[18vw] md:text-[12rem] leading-none tracking-tighter text-outline opacity-30 select-none">
          ShortApp
        </div>
        <div className="mt-6 text-xs text-muted-foreground">© 2026 ShortApp. Все права защищены.</div>
      </div>
    </footer>
  );
};

export default Footer;
