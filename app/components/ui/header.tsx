import { motion } from "framer-motion";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Header({ children, className }: HeaderProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`text-2xl md:text-3xl font-heading font-semibold mb-4 tracking-tight text-zinc-50 ${className}`}
    >
      {children}
    </motion.h2>
  );
}
