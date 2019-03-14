import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGallery from './App.js';

var galleryModule = document.getElementById('gallery');

var proxy = document.getElementById('galleryProxy');

if (galleryModule) {
  ReactDOM.render(<PhotoGallery/>, galleryModule);
} else {
  ReactDOM.render(<PhotoGallery/>, proxy);
}

