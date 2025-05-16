// components/Card.tsx
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type Tag = {
  label: string;
  color: string;
};

type ButtonLink = {
  href: string;
  label: string;
  icon?: ReactNode;
  color: string; // ex: bg-indigo-600
};

type TechIcon = {
  icon: ReactNode;
  title: string;
};

type CardProps = {
  title: string;
  description: string;
  href?: string; // torna o link opcional
  imageSrc?: string;
  imageAlt?: string;
  emoji?: string;
  tags?: Tag[];
  hint?: string;
  techs?: TechIcon[];
  buttons?: ButtonLink[];
};

export default function Card({
  title,
  description,
  href,
  imageSrc,
  imageAlt = `Preview de ${title}`,
  emoji = "📁",
  tags = [],
  hint,
  techs = [],
  buttons = [],
}: CardProps) {
  const cardContent = (
    <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition overflow-hidden cursor-pointer p-4">
      {/* Imagem */}
      {imageSrc && (
        <div className="h-40 w-full mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 text-xs font-medium rounded-full ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}

      {/* Título e descrição */}
      <h3 className="text-lg font-semibold text-white mb-2">
        {emoji} {title}
      </h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>

      {/* Tecnologias */}
      {techs.length > 0 && (
        <div className="flex items-center gap-3 mb-4 text-slate-400 text-sm flex-wrap">
          <strong className="text-gray-300">Tecnologias:</strong>
          {techs.map((tech, idx) => (
            <div key={idx} title={tech.title}>
              {tech.icon}
            </div>
          ))}
        </div>
      )}

      {/* Botões */}
      {buttons.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              target="_blank"
              className={`inline-flex items-center gap-2 px-4 py-2 ${btn.color} hover:opacity-90 rounded text-white text-sm font-medium`}
            >
              {btn.icon}
              {btn.label}
            </a>
          ))}
        </div>
      )}

      {/* Dica final */}
      {hint && <p className="text-xs text-gray-500 mt-2">{hint}</p>}
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
