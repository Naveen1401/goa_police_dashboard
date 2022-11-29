import React, { useState } from "react";
import './style.css'
import {signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const LogIn = () => { 
    
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const login = async(event)=>{
        event.preventDefault();
        try{
            const user = await signInWithEmailAndPassword(auth,id,password);

            navigate("/challan")

            // console.log(user);
        }catch(error){
            alert(error.message);
        }
    }

    return (
    <>
      <div className="login-div">
        <form>
          <h1>Log In</h1>
          <label>Email</label>
          <input
            placeholder="Email"
            name="phoneNo"
            // value={userData.phoneNo}
            onChange={(event)=>{
                setId(event.target.value)
            }}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            // value={userData.password}
            onChange={(event)=>{ 
                setPassword(event.target.value)
            }}
          ></input>

          <button
            type="submit"
            onClick={login}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LogIn;