import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react"; // Ícone de seta para baixo

const NextSection = () => {
  return (
    <motion.div
      animate={{ y: [-20, 20], opacity: [0, 1, 0] }} // Move para baixo e volta
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      <ChevronDownIcon size={48} className="text-gray-600" />
    </motion.div>
  );
};

export default NextSection;