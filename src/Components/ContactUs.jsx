import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css'; // You can create and import a CSS file for styling

const ContactUs = () => {
 
   const[name,setName]=useState();
   const[phoneNo,setPhoneNo]=useState();
   const[email,setEmail]=useState();
   const[message,setMessage]=useState();

   function handleEvent(){
      alert("Record Inserted Successfully");
   }    

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleEvent}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">PhoneNo:</label>
          <input type="number" onChange={(e) => setPhoneNo(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
