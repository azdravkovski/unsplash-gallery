import React, { Component } from "react";
import "./PhotosContainer.css";
import Photo from "./Photo";
import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "kvWrlBPdGdNeHYwCNJ0D9UGqjJyjZzmmBKgDNAU1ZcQ"
});

export default class PhotosContainer extends Component {
  state = {
    renderedPhotos: []
  };

  componentDidMount() {
    unsplash.photos
      .listPhotos(2, 15, "latest")
      .then(data => data.json())
      .then(photos => {
        console.log(photos);
        let renderedPhotos = photos.map(photo => (
          <Photo key={photo.id} alt={photo.alt_description} src={photo.urls.regular} />
        ));
        this.setState({
          renderedPhotos
        })
      });
  }

  render() {
    return <div>{this.state.renderedPhotos}</div>;
  }
}
