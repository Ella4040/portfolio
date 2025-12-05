import React, { useState } from 'react';
import axios from 'axios';
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      setStatus(response.data.success);
    } catch (error) {
      setStatus("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email.</p>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="name" className="contact__form-input" placeholder="Insert your name" onChange={handleChange} required />
            </div>
            <div className="contact__form-div">
              <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" onChange={handleChange} required />
            </div>
          </div>
          <div className="contact__form-div">
            <input type="text" name="subject" className="contact__form-input" placeholder="Insert your subject" onChange={handleChange} required />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Write your message" onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
 