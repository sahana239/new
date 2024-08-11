import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactUs.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9c2rmq2', 'template_axb9gpt', form.current, {
        publicKey: 'bx1q_N0HXwqkggrXt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='pet'>
      <div className="container mx-auto px-4">
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
          <label className="block text-gray-700">Name</label>
          <input type="text" name="from_name" className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm mb-4" />
          <label className="block text-gray-700">Email</label>
          <input type="email" name="from_email" className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm mb-4" />
          <label className="block text-gray-700">Message</label>
          <textarea name="message" className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm mb-4" />
          <input type="submit" value="Send" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 cursor-pointer" />
        </form>

        <div className="social-icons">
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/priyadharshini-s-4ab732258" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
