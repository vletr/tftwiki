import React from "react";

const Card = (props) => {
  const {name, image} = props
  return (
    <>
      <div>{name}</div>
      <img src={image} alt='no champ pic' width="200" height="100"/>
    </>
  )
}

export default Card;