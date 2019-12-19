import React, { Component } from 'react';
import { packages } from '../store';

class Packages extends Component {
  render() {
    return(
      <section id="packages">
        <h2 className="title">Our Packages</h2>
        <hr />
        <div className="cards">
          {packages.map((pack, i) => (
            <div key={i} className="card">
              <img src={pack.image} alt={pack.place} />
              <div className="card-body">
                <h3 className="card-title">{pack.place}</h3>
                <button type="button" className="btn btn-light" data-toggle="modal" data-target={pack.place}>
                  See details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Packages;