import React from 'react'

const Book = (props) => {
    const {_id,name,author,description,price,image} =book.pros
  return (
    <div>
      <img src={image} alt ={name}/>
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <button sx={{mt:'auto  '}}>Update</button>
      <button sx ={{mt:'auto'}}>Delete</button>

    </div>
  )
}

export default Book
