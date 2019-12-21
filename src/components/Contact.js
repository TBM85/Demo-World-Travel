import React, { Component } from 'react';
import { contact } from '../store';
import swal from 'sweetalert';

class Contact extends Component {
  state = {
    query: ''
  }

  changeValue = (query) => {
    this.setState({
      query: query
    })
  }

  clearValue = () => {
    this.setState({
      query: ''
    })
  }

  handleSubmit = () => {
    this.changeValue();
    swal("Thanks", "You have successfully subscribed!", "success");
    this.clearValue();
  }

  render() {
    const { query } = this.state;

    return(
      <section id="contact">
        <h2 className="title">Contact Us</h2>
        <p>Email us or call our team to book your flights, plan your adventure or get help with your documents. You can also visit us at the agency to talk face to face.</p>
        <hr />
        <div className="contact">
          <h4>You can subscribe to our page:</h4>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group mx-sm-3 mb-2">
              <input type="email" className="form-control" placeholder="Enter email" value={query} onChange={(event) => this.changeValue(event.target.value)} required />
            </div>
            <button type="submit" className="btn mb-2 btn-dark-blue">Subscribe</button>
          </form>
        </div>
        <address className="contact">
          <h4>Or contact us through:</h4>
          <span>Email: {contact.email}</span><br />
          <span>Phone: {contact.phone}</span>
        </address>
        <address className="contact">
          <h4>Or visit us:</h4>
          <span>{contact.address}</span>
        </address>
        <div className="contact">
          <h4>Or follow us through:</h4>
          {contact.socials.map((social, i) => (
              <a key={i} href={social.link}>
                {social.icon}
              </a>
          ))}
        </div>
      </section>
    );
  }
}

export default Contact;