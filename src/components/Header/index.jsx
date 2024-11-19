import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header(){
return(
    <header className={styles.header}>
    <Link to="/">
        <span>Anderson.dev</span>
    </Link>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contatos">Contatos</Link>
        <Link to="/senha-game">Jogo Senha</Link>
    </nav>
</header>

)
}

export default Header
