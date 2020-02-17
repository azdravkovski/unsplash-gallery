import React from "react";
import "./Photo.css";

const Photo = props => {
  return (
    <div className="photo-wrapper">
      <img className="photo" alt={props.alt} src={props.src}></img>
    </div>
  );
};

export default Photo;
