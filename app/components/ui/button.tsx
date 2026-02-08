import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  href,
  className,
  ...rest
}: ButtonProps) {
  const button = (
    <button
      className={`relative overflow-hidden font-medium rounded-xl py-3 px-8 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer
        border border-teal/50 text-teal
        bg-transparent
        hover:bg-teal hover:text-slate-900 hover:border-teal
        hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
      {...rest}
    >
      {children}
    </button>
  );

  return !href ? (
    button
  ) : (
    <Link href={href} target="_blank">
      {button}
    </Link>
  );
}
