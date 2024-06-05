import './App.css'
import { db } from "./conectionFirebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
function App() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')

  async function cadastrarBanco(){
    await addDoc(collection(db, "posts"),{
      titulo:titulo,
      autor:autor,
    })
    .then(()=>{
      alert('Cadastro realizado com sucesso')
      setTitulo('');
      setAutor('');
    })
    .catch((error)=>{
      alert('OPS, ALGO ESTA ERRADO' + error)
    })
  }

  return (
    <div>
      <h1>React + Firebase</h1>
      <div className="container">
        <input type="text" placeholder="Insira um titulo" onChange={(e) => setTitulo(e.target.value)} ></input>
        <input type="text" placeholder="Digite o nome do Autor" onChange={(e) => setAutor(e.target.value)}></input>
        <button onClick={cadastrarBanco}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
