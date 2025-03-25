import { Link } from "react-scroll";
import { useState } from "react";
import styles from "./OffCanvasNav.module.scss";

export default function OffCanvasNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir o menu */}
      <button className={styles.OffCanvasMenuBtn} onClick={() => setIsOpen(true)}>
        ☰ Menu
      </button>

      {/* Menu Off-Canvas */}
      <nav className={`${styles.OffCanvasMenu} h-screen sticky top-0 ${isOpen ? styles.Open : ""}`}>
        <span className={styles.CloseBtn} onClick={() => setIsOpen(false)}>
          &times;
        </span>
        <ul className="flex flex-col gap-6">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={800}
              className="cursor-pointer button button-1"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="cursor-pointer button button-2"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="ia"
              smooth={true}
              duration={800}
              className="cursor-pointer button button-3"
            >
              IA no meu trabalho
            </Link>
          </li>
          <li>
            <Link
              to="ia"
              smooth={true}
              duration={800}
              className="cursor-pointer button button-4"
            >
              Resumo técnico
            </Link>
          </li>
          <li>
            <Link
              to="ia"
              smooth={true}
              duration={800}
              className="cursor-pointer button button-5"
            >
              Lado B
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
