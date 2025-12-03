import React, { useState } from 'react'

//  let [variable, functon]= useState(initial value)



// let count =0


const Hook = () => {
 
  let [count,setcount]= useState(0)
   let inc=()=>{
    setcount(count+1)
    console.log(count);
 }
   let dec=()=>{
    if(count>0)
    setcount(count-1)
    console.log(count);
 }
   let reset=()=>{
    setcount(0)
    console.log(count);
 }
  return (
    <div>
        <h1>counter </h1>
        <p>count :-{count}</p>
        <button onClick={inc}>increment</button>
             
        <button onClick={dec}>decrement</button>
        
        <button onClick={reset}>reset</button>

    </div>
  )
}

export default Hook