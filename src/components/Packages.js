import React, { Component } from 'react';
import { packages } from '../store';
import Modal from './Modal';

class Packages extends Component {
  handleOpenBtnDetails = (e) => {
    let open = e.target.getAttribute('data-target');
    document.getElementById(open).classList.add('show');
  }

  handleCloseBtnDetails = (e) => {
    let close = e.target.getAttribute('data-dismiss');
    document.getElementById(close).classList.remove('show');
  }

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
                <button type="button" className="btn btn-light" data-toggle="modal" data-target={pack.place} onClick={this.handleOpenBtnDetails}>
                  See details
                </button>
                <Modal 
                  place={pack.place}
                  time={pack.time}
                  includes={pack.includes}
                  excursions={pack.excursions}
                  prices={pack.prices}
                  packages={packages}
                  handleCloseBtnDetails={this.handleCloseBtnDetails}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Packages;