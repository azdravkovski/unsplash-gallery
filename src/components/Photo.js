import React from "react";
import "./Photo.css";

const Photo = (props) => {
  return <img alt={props.alt} src={props.src}></img>;
};

export default Photo;
