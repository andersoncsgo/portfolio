import { useEffect, useState } from 'react';
import Footer from "../../components/Header/Footer";
import Header from "../../components/Header";
import Container from "../../components/Header/Container";
import Card from '../../components/Header/Card';
import styles from './Projetos.module.css';

function Projetos() {
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        const buscarRepositorios = async () => {
            try {
                const response = await fetch('https://api.github.com/users/andersoncsgo/repos');
                if (!response.ok) throw new Error('Erro ao buscar repositórios');
                const data = await response.json();
                setRepositories(data);
            } catch (error) {
                console.error("Erro ao buscar repositórios:", error);
            }
        };
        buscarRepositorios();
    }, []);
    
    return (
        <section className={styles.projetos}>
            <Header />
            <br></br>
            <h2>Projetos</h2>
            <br></br>
            {repositories.length > 0 ? (
                <section className={styles.lista}>
                    {repositories.map((repo) => (
                        <Card
                            key={repo.id}
                            name={repo.name}
                            description={repo.description}
                            html_url={repo.html_url}
                        />
                    ))}
                </section>
            ) : (
                <p>Carregando repositórios...</p>
            )}
            <Footer />
        </section>
        
    );
}

export default Projetos;
