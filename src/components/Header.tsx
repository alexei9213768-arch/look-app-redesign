import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const links = [
  { href: "#home", label: "Главная" },
  { href: "#features", label: "Функции" },
  { href: "#calls", label: "Звонки" },
  { href: "#download", label: "Скачать" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "bg-card/80 backdrop-blur-xl border-border shadow-2xl" : "bg-transparent border-transparent"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground rotate-[-8deg] group-hover:rotate-6 transition-transform">
            <Icon name="Zap" size={20} />
          </span>
          <span className="font-display font-extrabold text-lg tracking-tight">
            Short<span className="text-primary">App</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="story-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover-scale"
        >
          <Icon name="Download" size={16} />
          Скачать
        </a>

        <button
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground"
        >
          <Icon name={open ? "X" : "Menu"} size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-6xl mt-2 rounded-3xl bg-card border border-border p-4 animate-scale-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-display text-2xl font-semibold py-3 border-b border-border last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-3 flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold"
          >
            <Icon name="Download" size={18} />
            Скачать приложение
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
