import React, {useState} from "react";
import './App.css';

function App() {

  const [name, setName] = useState("Ale DLTI");
  

  function handleNameChange(e){
    setName(e.target.value);
  }

    return (
    <div className="App">
      <h3> Please write your name </h3>
      <input value={name} onChange={handleNameChange}/>
      <p> Hello {name}!</p>

    </div>
  );
}

export default App;
