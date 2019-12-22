import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const { place, time, includes, excursions, prices, handleCloseBtnDetails } = this.props;

    return(
      <div className="modal fade" id={place} tabIndex="-1" role="dialog" aria-labelledby={place} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{place}</h4>
              <span>{time}</span>
            </div>
            <div className="modal-body">
              <div className="includes">
                <h5>What includes?</h5>
                <ul>
                  {includes.map((include, i) => (
                    <li key={i}>{include}</li>
                  ))}
                </ul>
              </div>
              <div className="excursions">
                <h5>Excursions</h5>
                <ul>
                  {excursions.map((excursion, i) => (
                    <li key={i}>{excursion}</li>
                  ))}
                </ul>
              </div>
              <div className="prices">
                <h5>Prices</h5>
                <ul>
                  {prices.map((price, i) => (
                    <li key={i}>{price}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-dismiss={place} onClick={handleCloseBtnDetails}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;