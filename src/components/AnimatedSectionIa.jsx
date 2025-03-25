/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedSectionIa({ id, children }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });

  return (
    <>
      <section
        id={id}
        ref={ref}
        className="h-screen relative py-20 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl text-lilac-400 font-sans font-thin"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meu Uso de IA no Trabalho
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A tecnologia me fascina, mas nunca foi o centro da minha existência.
            Meu olhar está voltado para as pessoas e suas experiências. Para
            mim, a inteligência artificial não é apenas uma ferramenta, mas um
            espaço de diálogo, onde posso testar ideias, organizar informações e
            otimizar processos. No entanto, acredito que a tecnologia por si só
            não cria boas experiências; mas as perguntas certas e a empatia,
            sim.
          </motion.p>
          <motion.p
            className="mt-4 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Vejo a IA como uma aliada que expande possibilidades, sem substituir
            a assinatura humana. No fim, o que torna um design uma boa
            experiência são a empatia, o olhar atento, os valores e a
            sensibilidade de quem o constrói. O tempo avança e a IA evolui, mas
            a experiência significativa continua sendo, antes de tudo, uma
            criação humana.
          </motion.p>
        </div>
      </section>
    </>
  );
}
