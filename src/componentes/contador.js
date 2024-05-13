import React, {useState} from "react";


export const Contador  = ()=> {
    const [numero, SetNumero] = useState(0);

const sumar = () => {
    SetNumero(numero + 1);}

const restar = () => {
  SetNumero(numero - 1);   
}

return(
    <div className="contador">
            <h2>{numero} </h2>
    < button onClick={sumar}> sumar </button>
    < button onClick={restar}> restar </button>
    
    </div>


)}

