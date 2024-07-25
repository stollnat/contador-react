import { useState } from 'react'
import './App.css'

export default function App() {

  const [numero, setNumero] = useState(0)
 
  function aumentar() {
   setNumero(numero + 1)
  }
    function diminuir() {
    setNumero(numero - 1)
  }
  function zerar() {
    setNumero(numero - numero)
  }

  return (
    <section className="App">
     <h1>Contador</h1>
     <p>{numero}</p>
     <button onClick={aumentar}>mais</button>
     <button onClick={diminuir}>menos</button>
     <button onClick={zerar}>zerar</button>
     </section> 
    )
    }
  

