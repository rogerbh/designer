/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import roger from "../assets/rogerio-b-h_foto.jpg";
import { Link } from "react-scroll";
import NextSection from "./NextSection";

export default function AnimatedHeroSection({
  id,
  title,
  destaqueTitle,
  content,
}) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });

  return (
    <section
      id={id}
      ref={ref}
      className="h-screen flex flex-col md:flex-row items-center justify-between px-8 py-16 mx-auto"
    >
      <div className="text-center md:text-left md:w-1/2" style={{position:'relative'}}>
        <motion.h1
          className="text-4xl md:text-5xl text-gray-900 font-sans font-thin"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {title}
          <span style={{ color: "#6A0572" }}>{destaqueTitle}</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-700">{content}</p>

        <Link
          to="projects"
          smooth={true}
          duration={800}
          className="cursor-pointer"
        >
          <NextSection />
        </Link>

        {/* Botões de ação */}
        {/* <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-blue-700"
          >
            Ver Portfólio
          </button>
          <button type="button" className="px-6 py-3 rounded-xl text-lg">
            Entre em Contato
          </button>
        </div> */}
      </div>

      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 0.9 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={roger}
          alt="Rogério UX Designer"
          className="w-48 md:w-55 object-cover shadow-lg rounded-2xl"
        />
      </motion.div>
    </section>
  );
}
