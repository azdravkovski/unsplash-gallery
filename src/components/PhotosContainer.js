import React, { Component } from "react";
import "./PhotosContainer.css";
import Photo from "./Photo";
import Lightbox from "./Lightbox";
import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "kvWrlBPdGdNeHYwCNJ0D9UGqjJyjZzmmBKgDNAU1ZcQ"
});

export default class PhotosContainer extends Component {
  state = {
    renderedPhotos: [],
    showLightbox: false,
    lightboxPhoto: {}
  };

  componentDidMount() {
    this.fetchPhotos(1, 16, "latest").then(data =>
      this.setState({ renderedPhotos: data })
    );
  }

  fetchPhotos = (page, amount, keyword) => {
    return unsplash.photos
      .listPhotos(page, amount, keyword)
      .then(data => data.json())
      .then(photos => {
        let renderedPhotos = photos.map(photo => (
          <Photo
            key={photo.id}
            id={photo.id}
            alt={photo.alt_description}
            src={photo.urls.small}
            showLightbox={this.showLightbox}
          />
        ));
        return renderedPhotos;
      });
  };

  loadMorePhotos = () => {
    let randomPage = Math.floor(Math.random() * 100);
    this.fetchPhotos(randomPage, 16, "latest").then(data => {
      this.setState({
        renderedPhotos: [...this.state.renderedPhotos, data]
      });
    });
  };

  fetchSinglePhoto = id => {
    return unsplash.photos
      .getPhoto(id)
      .then(data => data.json())
      .then(photo => {
        this.setState({
          lightboxPhoto: photo
        });
      })
      .catch(error => console.error(error));
  };

  showLightbox = id => {
    this.setState({ showLightbox: true }, () => {
      this.fetchSinglePhoto(id);
    });
  };

  hideLightbox = () => {
    this.setState({ showLightbox: false });
  };

  render() {
    const { alt_description, urls } = this.state.lightboxPhoto;
    return (
      <>
        <div className="lightbox-container">
          <Lightbox
            show={this.state.showLightbox}
            hide={this.hideLightbox}
            lightboxAlt={this.state.lightboxPhoto && alt_description}
            lightboxSrc={this.state.lightboxPhoto && urls && urls.full}
            info={this.state.lightboxPhoto && this.state.lightboxPhoto.user}
          />
        </div>
        <div className="photos-container">{this.state.renderedPhotos}</div>
        <button
          className="button-loadmore"
          onClick={() => this.loadMorePhotos()}
        >
          Load more...
        </button>
      </>
    );
  }
}
