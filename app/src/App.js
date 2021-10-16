import React, {useState, useEffect, useRef} from "react";
import './App.css';

function App() {

  const [name, setName] = useState(() =>{
    const value = localStorage.getItem('name');
    const inital = JSON.parse(value);
    return inital || "";
  });

  const nameRef = useRef();

  function handleNameChange(){
    const valueinput = nameRef.current;
    setName(valueinput.value);
  }

   useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name))
  },[name]);

    return (
    <div className="App">
      <h3> Please write your name </h3>
      <input value={name} onChange={handleNameChange} ref={nameRef}/>
      <p> Hello {name}!</p>

    </div>
  );
}

export default App;
