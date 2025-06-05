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
    <div><h1>Full Name Display</h1>
     <div>
        <form onSubmit={submit}>
        <label htmlFor=""style={{paddingRight:"18px",}} >First Name:</label >
        <input type="text" required value={firstName} onChange={trackFirstName} />
        <br />
        <label htmlFor=""style={{paddingRight:"20px"}}>Last Name:</label>
         <input type="text" required value={lastName} onChange={tarckLastName} />
         <br />
          <input type="submit" value="Submit" style={{marginTop:"10px"}} ></input>
        </form>
        </div>
        <div>
          <p style={displayFName?{display:"inline"}:{display:"none"}}>Full Name:{` ${firstName} ${lastName}`}</p>
        </div>
       
    </div>
  )
}

export default Displayname