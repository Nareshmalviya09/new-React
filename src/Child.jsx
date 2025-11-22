import React from 'react'

const Child = ({data}) => {

    let{name,age,batch}=data
  return (
    <>
    
        Child
        <h3>my name is {name}</h3>
        <h3>my age { age}</h3>
        <h3>my Batch {batch}</h3>
    </>
  )
}

export default Child