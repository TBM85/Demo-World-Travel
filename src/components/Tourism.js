import React from 'react';
import { images } from '../store';

const Tourism = () => {
  return(
    <section id="tourism">
      <h2 className="title">Our tourism</h2>
      <p>The tourism industry is growing and it can be overwhelming to choose from so many options. In our company we follow the latest tourism trends, but we focus on four main forms of tourism.</p>
      <hr />
      <div className="images">
        {images.map((image, i) => (
          <div key={i} className={image.class} id="container">
            <img src={image.src} alt={image.name} />
            <div className="overlay">
              <h4>{image.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tourism;