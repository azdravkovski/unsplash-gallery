import React from "react";
import "./Lightbox.css";

const Lightbox = props => {
  const showHideLightbox = props.show
    ? "lightbox display-block"
    : "lightbox display-none";

const userIsPresent = props.info && props.info.user;
const user = userIsPresent ? props.info.user : null;

  return (
    <div className={showHideLightbox}>
      <button className="btn-close" onClick={() => props.hide()}>
        X
      </button>
      {/* <p>{user.name}</p>
      <p>{user.portfolio_url}</p>
      <p>{user.bio}</p> */}
      <img
        className="photo-lightbox"
        alt={props.lightboxAlt}
        src={props.lightboxSrc}
      ></img>
    </div>
  );
};

export default Lightbox;
