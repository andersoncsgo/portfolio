import Footer from "../../components/Header/Footer";
import Header from "../../components/Header";
import Container from "../../components/Header/Container";
import { CiMail, CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import styles from "./Contatos.module.css";

function Contatos() {
    return (
        <>
            <Header />
            <Container>
                <div className={styles.contactContainer}>
                    <h2 className={styles.title}>Contatos</h2>
                    <div className={styles.iconsContainer}>
                        <a href="anderson.lucas.ribeiro101@gmail.com" className={styles.icon}>
                            <CiMail size={50} />
                        </a>
                        <a href="https://www.linkedin.com/in/anderson-lucas-lucena/" target="_blank" className={styles.icon} rel="noreferrer">
                            <CiLinkedin size={50} />
                        </a>
                        <a href="https://github.com/andersoncsgo" target="_blank" className={styles.icon} rel="noreferrer">
                            <FiGithub size={50} />
                        </a>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Contatos;
