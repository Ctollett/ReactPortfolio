import React, { useState } from 'react';
import arrow from '../../../assets/svgs/arrow.svg'
import './index.css'
import GetInTouchSection from '../../../components/GetInTouch/index'
import LowPolyGlobe from '../../../components/Globe';




const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xdoqoakq', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('There was an error submitting the form.');  
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message.');
    }
  };

  return (
    <>
        <div className='getInTouch'>
    <GetInTouchSection />
</div>
    <div className='contact-container'>
        <div className='form-section'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit">SUBMIT  <img src={arrow} /></button>
               
            </form>
        </div>
        <div className='social-section'>
        <div className='globe-section'>
          <LowPolyGlobe />
        </div>
          <div className='social-section-row'>
          <div className='social-section-col'>
            <p>Github</p>
            <p>Linkedin</p>
            </div>
            <div className='social-section-col'>
            <p>Email: coltontollett96@gmail.com</p>
            <p>Phone: (1)-580-743-7806</p>
            </div>
            </div>
        </div>
    </div>

    </>
);
};

export default ContactForm;
  
