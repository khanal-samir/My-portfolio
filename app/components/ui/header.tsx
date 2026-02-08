import { motion } from "framer-motion";

type HeaderProps = {
  children: React.ReactNode;
  animateOpacity?: boolean;
  className?: string;
};

export default function Header({
  children,
  animateOpacity,
  className,
}: HeaderProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: animateOpacity ? 0 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-display font-bold mb-12 tracking-tight text-slate-100 relative ${className}`}
    >
      <span className="relative">
        {children}
        <motion.span
          className="absolute -bottom-2 left-0 w-12 h-1 bg-teal rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </span>
    </motion.h1>
  );
}
