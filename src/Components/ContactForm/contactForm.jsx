import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const contactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://api.sendinblue.com/v3/smtp/email',
        {
          to: [{ email: 'brandenp119@gmail.com' }],
          subject: 'New message for LRS!',
          htmlContent: `
            <p>Name: ${formData.name}</p>
            <p>Email: ${formData.email}</p>
            <p>Message: ${formData.message}</p>
          `,
          sender: {
            name: formData.name,
            email: formData.email,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': "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", // API-KEY
          },
        }
      );

    // POPUP MESSAGE TELLING IF CONFIRMED --------------------
    // Catch message if message did send...
    console.log('Email sent successfully:', response.data);
    toast.success('Message sent to Land Recovery Solutions!', {
      position: 'top-right',
      hideProgressBar: true,
      autoClose: 3000,
      theme: "light",
    });
    // Catch Message if Did not send...
  } catch (error) { 
    console.error('Error sending email:', error);
    toast.error('Error sending message. Please try again later.', {
      position: 'top-right',
      hideProgressBar: true,
      autoClose: 5000,
      theme: "light",
    });
  }
  // POPUP MESSAGE TELLING IF CONFIRMED --------------------
    
  };


  return (
    <div className='flex flex-col relative w-[380px] h-[480px] min-w-[380px] bg-white text-center justify-center rounded-tl-md rounded-ee-md' >
        <span className='text-[#001e1d] font-gafata text-lg font-semibold'>Get in Touch</span>
        <div className=''>
            <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                <input className='bg-gray-300 mt-6 h-[36px] w-[75%] shadow-inner ' type="text" placeholder="Name" id="name" name="name" value={formData.name} onChange={handleChange} />
                <input className='bg-gray-300 mt-8 h-[36px] w-[75%] shadow-inner' type="text" placeholder="E-Mail" id="email" name="email" value={formData.email} onChange={handleChange} />
                <input className='bg-gray-300 mt-8 h-[186px] w-[75%] shadow-inner' type="text" placeholder="Message" id="message" name="message" value={formData.message} onChange={handleChange} />
                <button type="submit" className='bg-[#f9bc60] text-[#001e1d] mt-8 w-[86px] h-[36px] font-medium '>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default contactForm