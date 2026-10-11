import Icon from "@/components/ui/icon";

const words = ["Сообщения", "Аудиозвонки", "Видеозвонки", "Голосовые", "Стикеры", "Группы", "Шифрование", "Без рекламы"];

const Marquee = () => {
  const row = [...words, ...words];
  return (
    <div className="relative py-6 bg-primary text-primary-foreground -rotate-1 overflow-hidden border-y-2 border-primary-foreground/10">
      <div className="flex w-max animate-marquee">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-6 px-6 font-display text-2xl md:text-3xl font-extrabold uppercase whitespace-nowrap">
            {w}
            <Icon name="Asterisk" size={28} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
