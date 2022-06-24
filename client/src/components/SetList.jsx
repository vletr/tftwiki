import React from "react";
import Card from "./Card.jsx";

const SetList = (props) => {
  const {champions} = props
  return (
    <>
      {champions.map((element, index) => (
        <Card key={index} name={element.name} image={element.image}/>
      ))
    }
    </>

  );
};

export default SetList;

