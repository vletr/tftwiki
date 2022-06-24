import React from "react";

const Card = (props) => {
  const {name, image} = props
  return (
    <>
      <div>{name}</div>
      <image src={`${image}`}/>
    </>
  )
}

export default Card;