import styles from './navbar.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export function Navbar() {
  return (
    <nav className={styles.navbarinit}>
      <div className={styles.navbarimg}>
      <img src="./logo-gen-blanco-1.png" alt="" />
      </div>
      <ul className={styles.navbar}>
        <a href="">INICIO</a>
        <a href="">PLAN DE ACCION</a>
        <a href="">Top MindSet</a>
        <a href="">CONTENIDO</a>
        <a href="">HORARIOS</a>
        <a href="">LIDERES</a>
        <a href="">RANKING</a>
      </ul>
      <div className={styles.navicons}>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
</div>
    </nav> 
  ) 
}
