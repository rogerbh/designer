/* eslint-disable react/jsx-key */
import AnimatedHeroSection from "../AnimatedHeroSection";
import AnimatedSection from "../AnimatedSection";
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
      
      <div className='w-full' style={{background: '#FBF8F3', zIndex: '1'}}>
        <AnimatedHeroSection
          id="about"
          title="Olá, aqui é o"
          destaqueTitle=" Roger"
          content="Sou UX Designer, ultimamente atuando na área da saúde, mas poderia
              muito bem estar em De Volta para o Futuro, porque parte de
              meu trabalho é prever problemas antes que eles aconteçam. Criando
              experiências intuitivas para que ninguém precise viajar no tempo
              tentando entender uma interface."
        ></AnimatedHeroSection>

        <AnimatedSection id="projects">
          <p className="text-3xl font-bold">Meus Projetos</p>
          <p>Aqui estão alguns dos trabalhos que já desenvolvi...</p>
        </AnimatedSection>

        <AnimatedSectionIa id="ia" />
      </div>
    </div>
  );
}
