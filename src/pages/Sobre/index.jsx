import Footer from "../../components/Header/Footer";
import Header from '../../components/Header';
import Container from "../../components/Header/Container";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import avatar from './images/avatar.jpg';
import styles from "./Sobre.module.css";

function Sobre() {
    return (
        <>
            <Header />
            <Container className={styles["sobre-container"]}>
                <h1>Sobre</h1>
                <div className={styles["avatar-container"]}>
                    <img src={avatar} alt="Avatar" className={styles.avatar} />
                </div>
                <div className={styles["sobre-texto"]}>
                    <p>Sou <span className={styles["nome-destaque"]}>Anderson Lucas</span><br />
                        <strong className={styles.titulo}>Dev Back End</strong>
                    </p>
                    <p>Estudo desenvolvimento Back End desde 2023.</p>
                    <p>Sou apaixonado por transformar ideias em realidade digital.</p>
                </div>
                <div className={styles.tecnologias}>
                    <FaReact className={styles.icon} />
                    <FaJava className={styles.icon} />
                    <SiPostgresql className={styles.icon} />
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Sobre;
