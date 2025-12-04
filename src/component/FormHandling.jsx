import React, { useState } from 'react'

const FormHandling = () => {
    let [name,setname]=useState("")
    let [city,setcity]=useState("")

    let handlesubmit=(e)=>{
            e.preventDefault()
            
            console.log(name);
            console.log(city);
            
    }
  return (
    <div>

        <h1>FormHandling </h1>

        <form onSubmit={handlesubmit} >
         Enater your name:- <input value={name} onChange={(e)=>{setname(e.target.value) }} type="text" /> <br />
          
         <br />
         Enater your city:- <input value={city} onChange={(e)=>{setcity(e.target.value)}} type="text" /> <br />
         
         <br />

         <button>save data</button>

        </form>
    </div>
  )
}

export default FormHandling