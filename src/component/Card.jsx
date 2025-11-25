import React from 'react'

 const Card = ({name,price, img,description}) => {
  return (
    <>
     <div id="container">
        <div className="card-container">

            <img src={img}
             alt={name}
             className='card-image'
             />

             <div className="card-content">

                <h2>Name:</h2>
                <span className="data">{name}</span>

                <h2>Price:</h2>
                <span className="price">{price}</span>
               
                <h2>Description:</h2>
                <span className="desc">{description}</span>

                 
             </div>
        </div>


     </div>
    </>
   
  )
}
export default Card
