import { Link } from "react-scroll";
import styles from "./Nav.module.scss";
import { FaWhatsapp } from "react-icons/fa";

export default function RegularNavbar() {
  return (
    <>
      <nav className={`${styles.RegularMenu} h-screen sticky top-0`}>

        <div className="flex items-center">
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
                to="works"
                smooth={true}
                duration={800}
                spy={true}
                activeClass={styles.ActiveSection}
                className="cursor-pointer"
              >
                Trabalhos
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
        </div>
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
