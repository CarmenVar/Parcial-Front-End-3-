import React from "react";
import Card from "./Card";
import styled from "styled-components";
//Aqui deberias escribir tus funciones de validacion
import { FormContainer } from "./styles/StyledComponents";
import { useState } from "react";


function App() {
    //Aqui deberias agregar los estados y los handlers para los inputs
const[userName, setUserName]=useState ("");
const[password, setPassword] = useState("");
const onChangeUserName = (e) => setUserName(e.target.value);
const onChangePassword = (e) => setPassword(e.target.value);
const onSubmitForm = (e)=>{
e.preventDefault();
if (value.userName.trim().length >= 3 && password.length >= 6) {
  setUserName(true);
  setPassword(false);
  // console.log("Es mayor a 3 caracteres");
} else {
  setUserName(true);
  setPassword(false);
};
}; 

return (
      <div className="App">
       <h2>Entregable Parcial Front III</h2>
       <form onSubmit={onSubmitForm}>
        {/* aqui deberias comenzar a escribir tu codigo */}
      <h5>Login</h5>
      <input style={{
        backgroundColor:"white",
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
      }}
      type="text" 
      placeholder="Ingrese nombre de usuario"
      value={userName}
      onChange={onChangeUserName}
      />
  
       </form>
       <form>
        {/* aqui deberias comenzar a escribir tu codigo */}
        <h5>Password</h5>
      <input
      type="passWord" 
      placeholder={"Ingrese su nombre"}
      value={password}
      onChange={onChangePassword}
      style={{
        display: "flex",
        backgroundColor:"white",
        flexDirection:"column",
        margin:"10px 0px",
      }}
      />
   
       </form>
       <button>Submit</button>

      </div>
    );
  }
  
  export default App;