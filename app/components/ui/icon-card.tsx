import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { IconType } from "react-icons";

type IconCardProps = {
  name: string;
  image?: StaticImageData | null;
  icon?: IconType | null;
  href?: string;
};

export default function IconCard({
  name,
  icon: Icon,
  image,
  href,
}: IconCardProps) {
  const cardContent = (
    <Fragment>
      {image ? (
        <Image
          src={image}
          alt={name}
          className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
        />
      ) : (
        Icon && (
          <Icon className="h-10 w-auto text-teal transition-all duration-300 group-hover:text-teal-light group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
        )
      )}

      <p className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300 rounded-lg font-medium text-center text-sm">
        {name}
      </p>
    </Fragment>
  );

  return href ? (
    <Link
      href={href}
      target="_blank"
      className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-midnight-800/50 border border-slate-700/30 hover:border-teal/30 hover:bg-midnight-800/80 transition-all duration-300"
    >
      {cardContent}
    </Link>
  ) : (
    <div className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-midnight-800/50 border border-slate-700/30 hover:border-teal/30 hover:bg-midnight-800/80 transition-all duration-300">
      {cardContent}
    </div>
  );
}
