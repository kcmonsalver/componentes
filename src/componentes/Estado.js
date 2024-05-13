import { useState,useEffect } from "react";

export const Estado= ()=>{

const [msg, setMsg] =useState(" ");

const sTexto = (e) => {
    setMsg(e.target.value);
}
useEffect( () => {
console.log("bienvenido a la clase el componente esta montado")
return()=>{
    console.log("terminada la clase el componente esta desmontado")
}

}, []);

useEffect( () => {
    console.log("texto ingresado es modificado" )

},[msg] )

return(
    <div>
<input type="text" onChange={sTexto}/>
<p>{msg}</p>
    </div>
)
}