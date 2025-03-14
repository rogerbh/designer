import { motion } from "framer-motion";
import roger from "../assets/rogerio-b-h_foto.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-5xl mx-auto">
      {/* Texto principal */}
      <div className="text-center md:text-left md:w-1/2">
        <motion.h1
          className="text-4xl md:text-5xl text-gray-900 font-sans font-thin"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Olá, eu sou <span style={{ color: "#6A0572" }}>Rogério</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-700">
          Sou UX Designer, ultimamente atuando na área da saúde, mas poderia
          muito bem estar em <i>De Volta para o Futuro</i>, porque parte de meu
          trabalho é prever problemas antes que eles aconteçam. Criando
          experiências intuitivas para que ninguém precise viajar no tempo
          tentando entender uma interface.
        </p>

        {/* Botões de ação */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-blue-700"
          >
            Ver Portfólio
          </button>
          <button type="button" className="px-6 py-3 rounded-xl text-lg">
            Entre em Contato
          </button>
        </div>
      </div>

      {/* Imagem ou avatar */}
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={roger}
          alt="Rogério UX Designer"
          className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full shadow-lg"
        />
        <motion.div className="w-48 h-48 md:w-60 md:h-60 bg-purple-800"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </section>
  );
}
