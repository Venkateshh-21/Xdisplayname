import React, { useState } from 'react'

const Displayname = () => {
   const [names, setName] = useState({
        fname : "",
        lname : ""
    });
    const [fullname, setFullName] = useState("");

    const trackName=(e)=>{
          const {name, value} = e.target;
        setName((b) => {
            return {
                ...b,
                [name] : value
            }
        });
    }
   
    
    const submit=(e)=>{
        e.preventDefault()
      setFullName(names.fname + " " + names.lname)
     
    }
  return (
    <><h1>Full Name Display</h1>
     <div>
        <form onSubmit={submit}>
        First Name:
        <input type="text" required value={names.fname} name="fname"onChange={trackName} />
        <br />
        Last Name:
         <input type="text" required value={names.lname} name="lname"onChange={trackName}  />
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