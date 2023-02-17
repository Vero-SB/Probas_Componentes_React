import Login from '../login/Login.jsx'
import Logo from './logoNews.png'
import styles from './Header.module.css'

function Header() {
  return (
    <>
    <header className={styles.header}>
        <h1 className={styles.h1}> The Novas News </h1>
        <img className={styles.img} src={Logo} alt="logo The Novas News"></img>
        <Login/>
    </header>
    </>
  );
}

export default Header