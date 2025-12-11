import React, { useState } from 'react'

const FormValidation = () => {
    let [form ,setform]=useState({
        name: "",
        email: "",
        number: ""
    })
     
    let handleChange=(e)=>{
        setform(  {...form,[e.target.name]: e.target.value}  )
    }

    let handlesubmit=(e)=>{
            e.preventDefault()
           
                if(form.name.trim()==""){
                alert("name not can be empty")
            }
            console.log(form.name, form.email,form.number);
            
                     
    }
  return (
    <div>

        <h1>FormValidation</h1>

        <form onSubmit={handlesubmit} >
         Enater your name:- <input value={form.name} name='name' onChange={handleChange} type="text" />  
          
         <br />
         Enater your email:- <input value={form.email} name='email' onChange={handleChange} type="text" />  
         
         <br />
         Enater your number:- <input value={form.number} name='number' onChange={handleChange} type="text" />  
         
         <br />

         <button>save data</button>

        </form>
    </div>
  )
}

export default FormValidation