import React, { useState } from "react";
import './style.css'
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from "../../firebase";

const SignIn = () => { 
    
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const register = async(e)=>{
        e.preventDefault();

        try{
            const user = await createUserWithEmailAndPassword(auth,id,password);
            console.log(user);
            alert("Successfully created user: " + user.user.email)
            await signOut(auth)

        }catch(error){
            alert(error.message);
        }
    }

    return (
    <>
      <div className="login-div">
        <form>
          <h1>Create Account</h1>
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
            placeholder="Password"
            name="password"
            // value={userData.password}
            onChange={(event)=>{ 
                setPassword(event.target.value)
            }}
          ></input>

          <button
            type="submit"
            onClick={register}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;