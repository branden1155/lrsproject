import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { FaPhoneSquareAlt } from 'react-icons/fa'

const contactUs = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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
            'api-key': import.meta.env.VITE_API_KEY, // API-KEY
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
      <div className='flex flex-col justify-center text-center items-center mb-12'>
        <h1 className='font-exo text-4xl font-extrabold'>Contact Us</h1>
        <h3 className='flex m-4 font-catamaran text-lg w-[40%]'>Fill out the form and a member from Land Recovery Solutions will get back with you. This may take up to 24 hours, thank you!</h3>
      </div>
      <div className='flex mx-auto justify-center items-start'>

        <div className='flex flex-col bg-[#004648] h-[680px] w-[420px] items-center text-center p-20 shadow-lg'>
          <h1 className='uppercase font-exo text-3xl text text-[#fffffe]'>Contact Information</h1>
          <p className='font-catamaran text-lg text-[#fffffe]'>Send us a Message!</p>
          <h1 className='text-[#001e1d] mt-[60px] font-exo font-bold text-xl'>Sales Team Number:</h1>
          <h2 className='text-[#abd1c6] font-catamaran mt-2 text-lg flex'><span className='mt-1 mr-1'><FaPhoneSquareAlt size="20px"/></span> 999-999-9999</h2>
          <h1 className='flex text-[#001e1d] font-bold uppercase font-gafata text-[14px] mt-[60px]'>Land Recovery Solutions Sales</h1>
          <h3 className='flex text-[#abd1c6] font-catamaran text-[14px] font-normal'>Fill out the form to be contacted</h3>
          <div className="flex flex-col border-t border-gray-300 py-4 mt-[20px] items-center">
            <h1 className='font-catamaran text-[#fffffe] p-4'></h1>
            <h1 className='font-catamaran text-[#fffffe] p-4'></h1>
          </div>
        </div>
        <div className='flex shadow-lg h-[680px]'>
          <form onSubmit={handleSubmit} className='flex flex-col mt-10'>
            <div className='flex p-10'>
              <input className='mx-8 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring ring-[#abd1c6]' type="text" placeholder='Firstname' id="firstname" name="firstname" value={formData.firstname} onChange={handleChange}/>
              <input className='mx-8 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring ring-[#abd1c6]' type="text" placeholder='Lastname' id="lastname" name="lastname" value={formData.lastname} onChange={handleChange}/>
            </div>
            <div className='flex p-10'>
              <input className='mx-8 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring ring-[#abd1c6]' type="text" placeholder='Phone number' id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange}/>
              <input className='mx-8 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring ring-[#abd1c6]' type="text" placeholder='Email Address.' id="email" name="email" value={formData.email} onChange={handleChange}/>
            </div>
            <input className='mx-20 mt-12 pb-[120px] w-[480px] text-start items-start justify-start border rounded-lg px-3 py-2 focus:outline-none focus:ring ring-[#abd1c6]' type="text" placeholder='Message:' id="message" name="message" value={formData.message} onChange={handleChange}/>
            <div className="flex mt-4 w-[80%] text-[14px] justify-center items-center mx-auto">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-[#abd1c6]" checked={isChecked} onChange={handleCheckboxChange}/>
                <span className="ml-2 text-gray-700 font-catamaran">Click this if you wish to receive emails regarding Land Recovery Solutions</span>
              </label>
            </div>
            <div className='flex justify-center mx-auto'>
              <button type="submit" className='bg-[#f9bc60] text-[#001e1d] mt-8 w-[110px] h-[48px] text-[12px] font-medium uppercase font-gafata'>Send Message!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contactUs