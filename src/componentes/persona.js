import React from "react";

function Persona1 (props) {
	return (
		<div className="persona">
			<ul class="list-group">
  <li class="list-group-item">{props.nombre}</li>
  <li class="list-group-item">{props.apellido}</li>
  <li class="list-group-item">{props.correo}</li>
  <li class="list-group-item">{props.direccion}</li>
  <li class="list-group-item">{props.telefono}</li>
</ul>
		</div>
	);
};

export function EjemploProp (props){
    console.log(props);
    return (
      <div className='cliente' 
      style={{
        backgroundColor : props.color,
      }} >
        
    <h3>Nombre: {props.nombre}</h3>
    <p>Edad: {props.edad}</p>
    <p>Telefono: {props.telefono}</p>
    <p>Correo: {props.correo}</p>
      </div>
    )
  } 

export default Persona1;
