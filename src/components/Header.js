import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { menu_items } from '../store';

class Header extends Component {
  state = {
    toggle: true
  }
  
  // Make the collapse button works
  handleClick = () => {
    const { toggle } = this.state;

    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));

    const btnCollapse = document.querySelector('.collapse');
    toggle === true
      ? btnCollapse.style.display = "block"
      : btnCollapse.style.display = "none"  
  }
  
  render() {
    return(
      <header id="header">
        <nav className="navbar navbar-expand-lg">
          <span>World Travel</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={this.handleClick}>
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {menu_items.map((menu_item, i) => (
                <li key={i} className="nav-item active">
                  <a className="nav-link" href={menu_item.href}>{menu_item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="header-content">
          <h1>World Travel</h1>
          <h5>Enjoy Life Traveling</h5>
          <a href="#contact" className="btn btn-dark-blue btn-lg" role="button" aria-pressed="true">Contact Us</a>
        </div>
      </header>
    );
  }
}

export default Header;