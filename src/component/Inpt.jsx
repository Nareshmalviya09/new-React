import React, { useState } from 'react'

const Inpt = () => {

    let [name,setname]=useState("")
    let [city,setcity]=useState("")
    let inputchange =(e)=>{

        console.log(e.target.value);
        setname(e.target.value)        
    }
    let inpcity =(e)=>{

        console.log(e.target.value);
        setcity(e.target.value)        
    }


  return (
    <div>


      enter your name:-  <input type="text" onChange={inputchange}/>
      <br />
      ur name is = {name}
      <br /><br />
      enter your city:-  <input type="text" onChange={inpcity}/>
      <br />
      ur city is = {city}
    </div>
  )
}

export default Inpt