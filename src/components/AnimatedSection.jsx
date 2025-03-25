/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedSection({ id, children }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });

  return (
    <section
      id={id}
      ref={ref}
      className="h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        exit={{ opacity: 0, y: 50 }} // 🔥 Desaparece suavemente ao sair
        transition={{ duration: 5, ease: "easeOut" }}
        className="text-center p-8 bg-white shadow-lg rounded-lg"
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl font-bold text-gray-800"
        >
          {children[0]}
        </motion.h2>
        {children.slice(1)}
      </motion.div>
    </section>
  );
}
