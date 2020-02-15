import React from 'react';
import './App.css';
import PhotosContainer from "./components/PhotosContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Gallery
      </header>
      <PhotosContainer />
      <button>Load more...</button>
    </div>
  );
}

export default App;
