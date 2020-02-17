import React from "react";
import "./Lightbox.css";

const Lightbox = props => {
  const showHideLightbox = props.show
    ? "lightbox display-block"
    : "lightbox display-none";


console.log(props.info);

  return (
    <div className={showHideLightbox}>
      <button className="btn-close" onClick={() => props.hide()}>
        X
      </button>
      <p>{props.info && props.info.name}</p>
      <p>{props.info && props.info.portfolio_url && props.info.portfolio_url}</p>
      <p>{props.info && props.info.bio}</p>
      <img
        className="photo-lightbox"
        alt={props.lightboxAlt}
        src={props.lightboxSrc}
      ></img>
    </div>
  );
};

export default Lightbox;
