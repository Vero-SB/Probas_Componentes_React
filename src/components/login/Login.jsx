import { useState } from "react";

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
    <div className='Login'>
        <fieldset>
        <label>Usuario
            <input type="text" name="usuario" value={usuario} onInput={manexadorDeInputUsuario}/>
            <p>contido input usuario: {usuario}</p>
        </label>
        <label>Contrasinal
            <input type="password" name='contrasinal' value={contrasinal} onInput={manexadorDeInputContrasinal}/>
            <p>contido input contrasinal: {contrasinal}</p>
        </label>
        <label>
            <input type="submit" value="Entrar"></input>
        </label>
        </fieldset>
    </div>
    </>
  );
}

export default Login;
