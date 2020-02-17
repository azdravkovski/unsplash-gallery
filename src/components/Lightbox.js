import React from "react";
import "./Lightbox.css";

const Lightbox = props => {
  const showHideLightbox = props.show
    ? "lightbox display-block"
    : "lightbox display-none";

  const { name, portfolio_url, bio } = props.info.user;
  return (
    <div className={showHideLightbox}>
      <button className="btn-close" onClick={() => props.hide()}>
        X
      </button>
      {/* <p>{name}</p>
      <p>{portfolio_url}</p>
      <p>{bio}</p> */}
      <img
        className="photo-lightbox"
        alt={props.lightboxAlt}
        src={props.lightboxSrc}
      ></img>
    </div>
  );
};

export default Lightbox;
