import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <div className='Container2'>
    <h2>Our Happy Client</h2>
    <div className="Client-Container">
      <div className="Client-Card">
      <img src='images/kedarkantha-grp.jpg'/>
      <h4>KEDARKANTHA TREK</h4>
      </div>
      <div className="Client-Card">
      <img src='images/roopkund-grp.jpg'/>
      <h4>ROOPKUND TREK</h4>
      </div>
      <div className="Client-Card">
      <img src='images/chadartrek-grp.jpg'/>
      <h4>CHADAR TREK</h4>
      </div>
      <div className="Client-Card">
      <img src='images/hamptapass-grp.jpg'/>
      <h4>HAMPTA PASS TREK</h4>
      </div>
    </div>
    </div>
  )
}

export default Testimonials