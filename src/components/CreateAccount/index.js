import React, { createFactory, useState } from "react";
import {db} from "../../firebase"
import {collection, doc, getDocs, addDoc} from "firebase/firestore"


const CreateAccount = () => {

    const[newName, setNewName] = useState('')
    const[newNo, setNewNo] = useState('')
    const[newPassword, setNewPassword] = useState('')

//   const [userData, setUserData] = useState({
//     name:"",
//     phoneNo:"",
//     password:"",
//   });

//   let name, value;
//   const postUserData = (e) =>{
//     name = e.target.name;
//     value = e.target.value;

//     setUserData({...`userData`,[name]:value})
//   }

  const userRef = collection(db,"User")

  const createUser = async(e)=>{
    e.preventDefault();
    if(newName && newNo && newPassword){
    const res = await addDoc(userRef, {name: newName, phone: newNo, password: newPassword} )
    if(res){
        setNewName('')
        setNewNo('')
        setNewPassword('')
        alert('User Created')
      }
    }else{
        alert("Fill the data")
    }
  }





//   const submitData = async(event) =>{
//     event.preventDefault();
//     const {name, phoneNo, password} = userData
//     if(name && phoneNo && password){
//       const res = await fetch(
//         "https://host-accounts-default-rtdb.firebaseio.com/superUserData.json",
//         {
//           method: "POST",
//           Headers: {
//           "Content-type" : "application/json"
//           },
//           body:JSON.stringify({
//             name, phoneNo, password,
//           }),
//       }
//       )
//       if(res){
//         setUserData({
//           name:"",
//           phoneNo:"",
//           password:"",
//         })
//         alert('User Created')
//       }else{
//         alert("Fill the data")
//       }
//     }else{
//       alert("Fill the data")
//     }
//   }
  
  return (
    <>
      <div>
        <form>
        <label>Name</label>
      <input
        placeholder="Name"
        name="name"
        // value={userData.name}
        onChange={(event)=>{
            setNewName(event.target.value)
        }}
      />

      <label>Phone No.</label>
      <input
        placeholder="Phone No."
        name="phoneNo"
        // value={userData.phoneNo}
        onChange={(event)=>{
            setNewNo(event.target.value)
        }}
      />

      <label>Password</label>
      <input
        placeholder="Password"
        name="password"
        // value={userData.password}
        onChange={(event)=>{
            setNewPassword(event.target.value)
        }}
      ></input>

      <button
        type="submit"
        onClick={createUser}
      >
        Submit
      </button>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;