/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Design Rationale - Electronic Health Record (EHR)",
    image: "/images/pep_internacao.png",
    description:
      "This screen was designed to make it easier for healthcare professionals to review patient information and act quickly. The two-column layout separates past records from today’s actions, helping users focus on what’s most relevant. Visual cues like color and icons highlight critical data, while the structure keeps the interface easy to scan, even under pressure. Everything was placed to reduce friction and support safe decision-making.",
  },
  // {
  //   id: 2,
  //   title: "Agendamento Médico",
  //   image: "/images/agendamento.png",
  //   description: "O desafio aqui foi criar um fluxo de agendamento intuitivo com o menor número possível de etapas, atendendo a pacientes com pouca familiaridade digital.",
  // },
];

export default function AnimatedSectionProjects({ id, children }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });
  const [selectedProject, setSelectedProject] = useState(null);

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
        className="text-center"
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl font-bold text-gray-800"
        >
          Trabalhos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-xl overflow-hidden max-w-3xl w-full mx-4 shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-cover max-h-[60vh]"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-700">{selectedProject.description}</p>
                  <button
                    className="mt-4 text-sm text-blue-600 underline hover:text-blue-800"
                    onClick={() => setSelectedProject(null)}
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
