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
      className="h-screen flex flex-col items-center justify-center mx-auto relative"
    >
      <div
        className="flex items-center text-left"
        style={{ padding: "0 20px", gap: '15px' }}
      >
        <div
          style={{
            width: "fit-content",
            height: 'fit-content',
            overflow: "hidden",
            borderRadius: "10px",
            flex: "1 0 auto",
            boxShadow: '0px 5px 0px 0px rgba(211, 179, 229,1)'
          }}
        >
          <img
            src={roger}
            alt="Rogério UX Designer"
            style={{ maxHeight: "200px" }}
          />
        </div>

        <div className="" style={{ position: "relative" }}>
          <motion.h1
            className={`text-gray-900 ${styles.FontEbGaramond400}`}
            style={{ fontSize: "20px" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
            <span style={{ color: "#6A0572" }}>{destaqueTitle}</span>
          </motion.h1>
          <motion.p
            className={`text-gray-900 ${styles.FontEbGaramond400}`}
            style={{ fontSize: "18px" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content}
          </motion.p>
        </div>
      </div>

      <Link style={{position:'absolute', bottom: '50px'}} to="works" smooth={true} duration={800} className="cursor-pointer">
        <NextSection />
      </Link>
    </section>
  );
}
