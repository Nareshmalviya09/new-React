import React, { useEffect, useState } from 'react'

const Useefect = () => {
  
    let[count,setcount]=useState(0)

    let inc=()=>{

        setcount(count++)
    }
    useEffect(
        ()=>{
            console.log("running...");
            
        },[]
    )

  return (
    <div>
<button  onClick={inc}>increment</button>
count:{count}


    </div>
  )
}

export default Useefect