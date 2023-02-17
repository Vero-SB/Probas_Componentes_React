import { useState } from "react"
import styles from './Login.module.css'

function Login() {
let [usuario, setUsuario] = useState("")
let [contrasinal, setContrasinal] = useState("")

  function manexadorDeInputUsuario(evento) {
    setUsuario(evento.target.value)
  }
  function manexadorDeInputContrasinal(evento) {
    setContrasinal(evento.target.value)
  }

  return (
    <>
    <div className={styles.login}>
        <fieldset className={styles.fieldset}>
        <label className={styles.label}>Usuario
            <input className={styles.casilla} type="text" name="usuario" value={usuario} onInput={manexadorDeInputUsuario}/>
            <p className={styles.p}>contido input usuario: {usuario}</p>
        </label>
        <label className={styles.label}>Contrasinal
            <input className={styles.casilla} type="password" name='contrasinal' value={contrasinal} onInput={manexadorDeInputContrasinal}/>
            <p className={styles.p}>contido input contrasinal: {contrasinal}</p>
        </label>
        <label className={styles.label}>
            <input type="submit" value="Entrar"></input>
        </label>
        </fieldset>
    </div>
    </>
  );
}

export default Login;
