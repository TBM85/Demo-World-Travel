import React from 'react';
import { services } from '../store';

const Packages = () => {
  return(
    <section id="services">
      <h2 className="title">Our Services</h2>
      <p>Our experience, hospitality, flexibility and competence come together to meet all your travel and enjoyment needs. We offer services for individuals or groups, and for all budgets.</p>
      <hr />
        <ul className="grid">
          {services.map((service, i) => (
            <li key={i}>
              {service.icon}
              <h3>{service.service}</h3>
              <p>{service.description}</p>
            </li>
          ))}

        </ul>
    </section>
  );
}

export default Packages;