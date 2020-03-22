import React from 'react';
import Gallery from './Gallery/Gallery.js';

export default function App(props) {
  return (
    <div>
      <p>App {props.name}</p>
      <Gallery></Gallery>
    </div>
  );
}
