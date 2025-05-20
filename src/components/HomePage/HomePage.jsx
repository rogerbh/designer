/* eslint-disable react/jsx-key */
import AnimatedHeroSection from "../AnimatedHeroSection";
import AnimatedSectionProjects from "../AnimatedSectionProjects";
import AnimatedSectionIa from "../AnimatedSectionIa";
import OffCanvasNavbar from "../OffCanvasNav/OffCanvasNavbar";
import RegularNavbar from "../RegularNav/RegularNavbar";
import styles from "./HomePage.module.scss";
import { useMediaQuery } from "react-responsive";

export default function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletAndBeyond = useMediaQuery({ minWidth: 768 });

  return (
    <div className={styles.HoldSite}>
      {isMobile && <OffCanvasNavbar />}
      {isTabletAndBeyond && <RegularNavbar />}

      <div className="w-full" style={{ background: "#FBF8F3", zIndex: "1" }}>
        <AnimatedHeroSection
          id="about"
          title="Oi! Aqui é o"
          destaqueTitle=" Roger."
          content="Trabalho com Design há anos, atualmente com foco em UX no setor de saúde, onde aprofundei minha capacidade de estruturar e organizar grandes volumes de informações complexas e sensíveis. Tenho conseguido garantir que, mesmo em ambientes exigentes e com processos burocráticos, as experiências permaneçam claras, acessíveis e humanas."
        ></AnimatedHeroSection>

        <AnimatedSectionProjects id="works" />

        <AnimatedSectionIa id="ia" />
      </div>
    </div>
  );
}
