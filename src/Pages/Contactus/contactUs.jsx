import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

const contactUs = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
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
            <p>Firstname: ${formData.firstname}</p>
            <p>Lastname: ${formData.lastname}</p>
            <p>Phone number: ${formData.phonenumber}</p>
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
            'api-key': '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', // API-KEY
          },
        }
      );
    console.log('Email sent successfully:', response.data);
    toast.success('Message sent to Land Recovery Solutions!', {
      position: 'top-right',
      hideProgressBar: true,
      autoClose: 3000,
      theme: "light",
    });
  } catch (error) { 
    console.error('Error sending email:', error);
    toast.error('Error sending message. Please try again later.', {
      position: 'top-right',
      hideProgressBar: true,
      autoClose: 5000,
      theme: "light",
    });
  } 
  };

  return (
    <div className='mt-20 h-[100%] mx-auto max-w-[1920px] w-[70%]'>
      <div className='flex mx-auto justify-center items-start'>
        <div className='flex flex-col bg-[#004648] h-[680px] w-[420px] items-center text-center p-20 shadow-lg'>
          <h1 className='uppercase font-exo text-3xl text text-[#fffffe]'>Contact Information</h1>
          <p className='font-catamaran text-lg text-[#fffffe]'>Send us a Message!</p>
          <div className="flex flex-col border-t border-gray-300 py-4 mt-[20px] items-center">
            <h1 className='font-catamaran text-[#fffffe] p-4'></h1>
            <h1 className='font-catamaran text-[#fffffe] p-4'></h1>
          </div>
        </div>
        <div className='flex shadow-lg h-[680px]'>
          <form onSubmit={handleSubmit} className='flex flex-col mt-10'>
            <div className='flex p-10'>
              <input className='mx-8 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"' type="text" placeholder='Firstname' id="firstname" name="firstname" value={formData.firstname} onChange={handleChange}/>
              <input className='mx-8 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"' type="text" placeholder='Lastname' id="lastname" name="lastname" value={formData.lastname} onChange={handleChange}/>
            </div>
            <div className='flex p-10'>
              <input className='mx-8 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300' type="text" placeholder='Phone number' id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange}/>
              <input className='mx-8 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"' type="text" placeholder='Email Address.' id="email" name="email" value={formData.email} onChange={handleChange}/>
            </div>
            <input className='mx-20 mt-12 pb-[120px] w-[480px] text-start items-start justify-start border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"' type="text" placeholder='Message:' id="message" name="message" value={formData.message} onChange={handleChange}/>
            <div className='flex justify-center mx-auto'>
              <button type="submit" className='bg-[#f9bc60] text-[#001e1d] mt-8 w-[140px] h-[48px] font-medium uppercase'>Send Message!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contactUs