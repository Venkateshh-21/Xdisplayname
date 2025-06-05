import React, { useState } from 'react'

const Displayname = () => {
    const[firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("")
    const [displayFName,setDisplayFName]=useState(false)
    const trackFirstName=(e)=>{
        setFirstName(e.target.value)
    }
    const tarckLastName=(e)=>{
        setLastName(e.target.value)
    }
    const submit=(e)=>{
        e.preventDefault()
      setDisplayFName(!displayFName)
     
    }
  return (
    <><h1>Full Name Display</h1>
     <div>
        <form onSubmit={submit}>
        First Name:
        <input type="text" required value={firstName} onChange={trackFirstName} />
        <br />
        Last Name:
         <input type="text" required value={lastName} onChange={tarckLastName} />
         <br />
          <button type='submit'>Submit</button>
        </form>
        </div>
        <div>
          <p style={displayFName?{display:"inline"}:{display:"none"}}>Full Name:{` ${firstName} ${lastName}`}</p>
        </div>
       
    </>
  )
}

export default Displayname