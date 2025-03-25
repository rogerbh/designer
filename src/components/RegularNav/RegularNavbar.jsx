import { Link } from "react-scroll";
import styles from "./Nav.module.scss";

export default function RegularNavbar() {
  return (
    <>
      <nav className={`${styles.RegularMenu} h-screen sticky top-0`}>
        <ul className="flex flex-col">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={800}
              spy={true}
              activeClass={styles.ActiveSection}

              className="cursor-pointer"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              spy={true}
              activeClass={styles.ActiveSection}

              className="cursor-pointer"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="ia"
              smooth={true}
              duration={800}
              spy={true}
              activeClass={styles.ActiveSection}

              className="cursor-pointer"
            >
              IA no meu trabalho
            </Link>
          </li>
          <li>
            <Link
              to="teste"
              smooth={true}
              duration={800}
              spy={true}
              activeClass={styles.ActiveSection}
              offset={-50}
              className="cursor-pointer"
            >
              Resumo técnico
            </Link>
          </li>
          <li>
            <Link
              to="teste2"
              smooth={true}
              duration={800}
              spy={true}
              activeClass={styles.ActiveSection}
              offset={-50}
              className="cursor-pointer"
            >
              Lado B
            </Link>
          </li>
        </ul>
        <div className={`sombra-right-column`} />
      </nav>
      <style>
        {`
          .sombra-right-column {
            position: absolute;
            width: 30px;
            height: 100vh;
            top: 0;
            left: 295px;
            background: radial-gradient(
              ellipse at center,
              rgba(0, 0, 0, 0.3) 0%,
              rgba(0, 0, 0, 0) 80%
            );
            border-radius: 50%;
            z-index: 0;
            filter: blur(5px);
          }
        `}
      </style>
    </>
  );
}
