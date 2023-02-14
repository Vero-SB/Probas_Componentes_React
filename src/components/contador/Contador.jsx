/* function Contador() {
    let Contador=0
    function incrementa() {Contador=Contador+1} //outro xeito de escribir: {Contador ++}
    return( 
    <>
    <p>Total:{Contador}</p>
    <button onClick={incrementa}> Suma </button>
    </>
    )
}

export default Contador

isto non funciona pq pra amosar un compoñente elimina o anterior, enton non garda a información da suma, e volta amosar o contador a 0
por isto existen os HOOKS de REACT:
PRA GARDAR OS VALORES PRECISO un STATE:
co set indicamos que algo cambiou e que ten que amosalo
*/

import {useState} from "react" //Hook de React

function Contador() {
    let [contador, setContador]=useState(0) 
    function incrementa() {setContador(contador+1)} 
    return( 
    <>
    <p>Total:{contador}</p>
    <button onClick={incrementa}> Suma </button>
    </>
    )
}

export default Contador




