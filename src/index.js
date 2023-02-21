import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Button, Button2, AlertButton, Toolbar} from "./Button";
//import { Greetings, Greetings2, UserCard } from "./Greetings";
//import Product, { Navbar } from "./Product";
//import { TaskCard } from "./Task";

//import { Saludar } from "./Saludar";
import { Posts } from "./Posts";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value);
};

/* const users = [
  {id: 1,
  name: 'david',
image: 'https://robohash.org/david'
},
{id: 2,
  name: 'pxko',
image: 'https://robohash.org/pxko'
},
{id: 3,
  name: 'xris',
image: 'https://robohash.org/xris'
}, 
]*/

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter+1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter-1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reiniciar
      </button>
    </>
  );
}

function Counter2() {
  const [mensaje, setMensaje] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(function(){
    console.log('render')
  }, [counter]
  )

  return (
    <>
      <h1>Counter {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter+1);
        }}
      >
        Sumar
      </button>
      <input onChange={e => setMensaje(e.target.value)}/><button onClick={() => {
        alert('el mensaje es: ' + mensaje)
      }}>save</button>
    </>
  );
}


root.render(
  <>
    {/*     <UserCard
      name="dmg"
      amount={30}
      married={true}
      points={[1, 2, 3]}
      address={{ calle: "ksk", n: "112" }}
      greet = {function (){ alert('hey')}}
    />

<UserCard
      name="leono"
      amount={30}
      married={true}
      points={[1, 2, 3]}
      address={{ calle: "ksk", n: "112" }}
      greet = {function (){ alert('hey')}}
    /> */}

    {/*   <Button text="pagar"/>
  <Button text="regresar"/>
  <Button text="bye" name="david" />
 */}

    {/*  <TaskCard ready={false}/>
 <Saludar/> */}

    {/* <Button text="pagar"/>
<input id="HOLA" onChange={handleChange}></input>

<form onSubmit={(e)=> {
    e.preventDefault()
    console.log('enviando datos')
}
}>
  <h1>Registro de usuario</h1>

  <button>hola</button>
</form>
<Posts/> */}

    {/* {users.map((user, i)=> {
  return <div key={i}>
    <h1>{user.name}</h1>
    <img src={user.image}></img>
  </div>
})} */}
    <Counter2 />
    <div>
    <Button2/>
    </div>


    <div>
      <AlertButton message="playing">Play</AlertButton>
      <AlertButton message="uploading">Upload</AlertButton>
    </div>
    <Toolbar></Toolbar>
  </>
);
