import React, { useState } from 'react'
import "./Style.css"

function Form() {
    const[status,setStatus]= useState(1);
    const[name,setName]=useState('');
    





  return (
    <div>

        <h1>Your Form </h1>

    
     
     <div className={status===1 ?"form-group-active":"form-group"}>
        <h3>Basic Details</h3>
     <label htmlFor="">Name:</label><input type="text" placeholder='Enter your Name Here' onChange={(e)=>setName(e.target.value)} value={name} /><br />
     <label htmlFor="">Gender:</label> 
     <select name="" id="">
        <option value="">Male</option>
        <option value="">Female</option>
        </select> <br />
     <label htmlFor="">DOB:</label><input type="date" placeholder='Enter your Date of Birth' /><br />
     <label htmlFor="">Mobile Number:</label><input type="number" placeholder='Enter your Mobile Number' /><br />
     <label htmlFor="email">Email:</label><input type="email" placeholder='Enter your email Here' /><br />
     <label htmlFor="">City:</label><input type="text" placeholder='Enter your city Name Here' />
     <br />
     </div>

     <div className={status===2 ?"form-group-active":"form-group"} >
        <h3> Personal Details</h3>
        <label htmlFor="">Father Name:</label><input type="text" placeholder='Enter your father Name' /><br />
        <label htmlFor="">Mother Name:</label><input type="text" placeholder='Enter your Mother Name' /><br />
        <label htmlFor="">Marital Status:</label> <select name="" id="">
            <option value="">-Select-</option>
            <option value="">Single</option>
            <option value="">Married</option>
        </select><br />
     </div>

     <div className={status===3 ?"form-group-active":"form-group"}>
        <h3>Education Details</h3>
        <label htmlFor="">Highest Education:</label> <input type="text" placeholder='Enter your hightest education'/>
        <label htmlFor="">Any Other Skills:</label> <input type="text" placeholder='Enter your skills ' />
        <br />
        <button>Submit</button>        
     </div>

     

     <button onClick={(e)=>{setStatus(status+1)}} className={status===3 ? "inactive":"active"}
     >Next </button>

     


    </div>
  )
}

export default Form