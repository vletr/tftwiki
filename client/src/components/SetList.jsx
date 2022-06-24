import React from "react";
import Card from "./Card.jsx";
import './App.css';

const SetList = (props) => {
  const {champions} = props
  return (
    <div className="flex-container">
      {champions.map((element, index) => (
        <Card key={index} name={element.name} image={element.image}/>
      ))
    }
    </div>

  );
};

export default SetList;

