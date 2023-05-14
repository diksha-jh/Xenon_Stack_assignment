import React, { useState } from 'react';
import './ContactUs.css';
import { saveContact } from './Services';
import Swal from 'sweetalert2';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const UserData = {
    "name":name,
    "email": email,
    "message":message
    
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await saveContact(UserData);
    console.log(response.data);
    if(response.data=="saved"){
        Swal.fire(
            "Data Submitted",
            "We will contact you shortly",
            "success"
       );
    }
    else{
        Swal.fire(
            "Email is not registered",
            "Kindly add registered email",
            "error"
       );
    }
    
    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;