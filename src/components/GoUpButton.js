import React, { Component } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

class GoUpButton extends Component {
  state = {
      intervalId: 0
  };
  
  displacement = () => {
    const { intervalId } = this.state;
    const { displacementInPx } = this.props;

    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - displacementInPx);
  }
  
  goUp = () => {
    let intervalId = setInterval(this.displacement);

    this.setState({ 
      intervalId: intervalId 
    });
  }
  
  render() {
      return(
        <button 
          id='go-up-button' 
          onClick={() => { this.goUp(); }}
        >
          <FaArrowCircleUp />
        </button>
      );
   }
} 

export default GoUpButton;