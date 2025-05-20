/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import roger from "../assets/roger.jpg";
import { Link } from "react-scroll";
import NextSection from "./NextSection";
import styles from "./HeroSection.module.scss";

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
      className="h-screen flex flex-col items-center justify-center mx-auto"
    >
      <div className="flex justify-start items-center">
        <div
          className=""
          style={{ position: "relative" }}
        >
          <motion.h1
            className={`text-4xl md:text-5xl text-gray-900 ${styles.FontEbGaramond400}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
            <span style={{ color: "#6A0572" }}>{destaqueTitle}</span>
          </motion.h1>
          <motion.p
            className={`mt-4 text-gray-700 ${styles.FontEbGaramond400}`}
            style={{ fontSize: "24px" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content}
          </motion.p>
        </div>
      </div>

      <Link
        to="works"
        smooth={true}
        duration={800}
        className="cursor-pointer"
      >
        <NextSection />
      </Link>
    </section>
  );
}
