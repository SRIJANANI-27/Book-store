import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div id="contact" className="contact">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
