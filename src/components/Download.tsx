import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { useReveal } from "@/hooks/use-reveal";

const stores = [
  { icon: "Apple", top: "Загрузите в", name: "App Store" },
  { icon: "Play", top: "Доступно в", name: "Google Play" },
  { icon: "Store", top: "Откройте в", name: "RuStore" },
];

const faq = [
  { q: "ShortApp бесплатный?", a: "Да. Сообщения, голосовые и звонки — бесплатно и без рекламы." },
  { q: "Звонки работают через мобильный интернет?", a: "Да, ShortApp подстраивает качество под скорость сети, поэтому звонки держатся даже на 3G." },
  { q: "Можно ли пользоваться на компьютере?", a: "Да, есть веб-версия и приложения для Windows и macOS — переписка синхронизируется автоматически." },
  { q: "Насколько защищены мои данные?", a: "Все чаты и звонки защищены сквозным шифрованием. Мы не храним содержимое переписки на серверах." },
];

const Download = () => {
  const ref = useReveal<HTMLElement>();
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 12) {
      setError("Введите корректный номер телефона");
      return;
    }
    setError("");
    setPhone("");
    toast({ title: "Ссылка отправлена", description: "Проверьте SMS — в нём ссылка на скачивание ShortApp." });
  };

  return (
    <section id="download" ref={ref} className="relative py-28 md:py-36">
      <div className="container max-w-6xl">
        <div className="reveal relative rounded-[3rem] bg-primary text-primary-foreground p-8 md:p-16 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border-[40px] border-primary-foreground/10" />
          <div className="absolute right-24 bottom-10 w-24 h-24 rounded-3xl bg-accent rotate-12 animate-float hidden md:block" />

          <div className="relative max-w-2xl">
            <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.92] tracking-tight">
              Скачай.
              <br />
              Напиши.
              <br />
              Позвони.
            </h2>
            <p className="mt-6 text-lg opacity-80 max-w-md">
              Установка занимает меньше минуты. Регистрация — по номеру телефона, без паролей.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {stores.map((s) => (
                <a
                  key={s.name}
                  href="#download"
                  className="inline-flex items-center gap-3 rounded-2xl bg-primary-foreground text-primary px-5 py-3 hover-scale"
                >
                  <Icon name={s.icon} size={26} fallback="Smartphone" />
                  <span className="text-left leading-tight">
                    <span className="block text-[11px] opacity-70">{s.top}</span>
                    <span className="block font-semibold">{s.name}</span>
                  </span>
                </a>
              ))}
            </div>

            <form onSubmit={submit} className="mt-10 max-w-md">
              <label className="text-sm font-semibold">Или получите ссылку в SMS</label>
              <div className="mt-2 flex gap-2 rounded-full bg-primary-foreground p-1.5">
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 900 000-00-00"
                  inputMode="tel"
                  className="border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-primary text-primary-foreground px-5 font-semibold hover:opacity-90"
                >
                  Отправить
                </button>
              </div>
              {error && <p className="mt-2 text-sm font-medium text-destructive">{error}</p>}
            </form>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-[1fr_1.4fr] gap-10">
          <h3 className="reveal font-display font-black text-4xl md:text-5xl leading-tight">
            Частые <span className="text-outline">вопросы</span>
          </h3>
          <Accordion type="single" collapsible className="reveal">
            {faq.map((f, i) => (
              <AccordionItem key={i} value={`i${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Download;