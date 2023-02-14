//Formulario Controlado a través de JavaScript co State

import {useState} from "react"

function Rexistro() {
    let [nome, setNome] = useState("")
    let [email, setEmail]= useState("")
    let [contrasinal, setContrasinal]= useState("")

    function manexadorDeInputNome(evento) {
        setNome(evento.target.value)
    }

    function manexadorDeInputEmail(evento) {
        setEmail(evento.target.value)
    }

    function manexadorDeInputContrasinal(evento) {
        setContrasinal(evento.target.value)
    }

    return (
        <>
        <div className='Login'>
        <fieldset>
        <label>Nome
            <input type="text" name="nome" value={nome} onInput={manexadorDeInputNome}/>
            <p>este é o contido de nome en maiusculas: {nome.toUpperCase()}</p>
        </label>
        </fieldset>
        <fieldset>
        <label>Email
            <input type="email" name="email" value={email} onInput={manexadorDeInputEmail}/>
            <p>este é o contido do email: {email}</p>
        </label>
        </fieldset>
        <fieldset>
        <label>Contrasinal
            <input type="password" name="contrasinal" value={contrasinal} onInput={manexadorDeInputContrasinal}/>
            <p>este é o contido do contrasinal: {contrasinal}</p>
        </label>
        </fieldset>
        <label>
            <input type="submit" value="Rexistrarme"></input>
        </label>
        </div>
        </>
    )
}

export default Rexistro
