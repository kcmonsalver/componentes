//import logo from './logo.svg';
import './App.css';


//import MenuC from './componentes/Menu';
import Persona1 from './componentes/persona';
//import { EjemploProp } from './componentes/persona';
import {Contador} from './componentes/contador';
import {Contador2} from './componentes/contador2';
import { Estado } from './componentes/Estado';

 


function App() {

  
  return (
    <div className='App'>
          
          <Persona1 nombre = "alejandra" apellido = "solorzano" correo = "aleja@educativo.com"  direccion ="cra 81 f # 6816 "telefono = "315548974"   color="pink" />   
    <Contador/>
    <Contador2/>
    <Estado/>
    
        </div>
  );
}



export default App;
