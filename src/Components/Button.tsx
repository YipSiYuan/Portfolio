interface ButtonProps {
  title: string;
  href: string;
}

export default function Button({ title, href }: ButtonProps) {
  return (
    <a
      href={href}
      onClick={(e) => e.stopPropagation()}
      className="px-6 py-3 rounded-xl bg-[#7C6CFF] text-black-[#FFFFFF] drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] font-semibold hover:scale-105 transition-transform duration-200 shadow-lg inline-block"
    >
      {title}
    </a>
  );
}
