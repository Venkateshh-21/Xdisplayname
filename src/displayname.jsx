import React, { useState } from 'react'

const Displayname = () => {
    const[firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("")
    const [fullname, setFullName] = useState('');

    const trackFirstName=(e)=>{
        setFirstName(e.target.value)
    }
    const tarckLastName=(e)=>{
        setLastName(e.target.value)
    }
    const submit=(e)=>{
        e.preventDefault()
      setFullName(firstName + " " + lastName)
     
    }
  return (
    <><h1>Full Name Display</h1>
     <div>
        <form onSubmit={submit}>
        First Name:
        <input type="text" required value={firstName} onChange={trackFirstName} pattern='[A-Za-z]{3}'/>
        <br />
        Last Name:
         <input type="text" required value={lastName} onChange={tarckLastName} pattern='[A-Za-z]{3}'/>
         <br />
          <button type='submit'>Submit</button>
        </form>
        </div>
        <div>
         {fullname ? <p >Full Name: {fullname}</p>:""}
        </div>
       
    </>
  )
}

export default Displayname