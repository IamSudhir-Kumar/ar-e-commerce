import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-[75vh] py-5 flex flex-col items-center bg-[url('background-images/d2.png')] font-Poppins bg-contain" id="contact-us">
      <h2 className="text-4xl md:text-5xl font-bold mt-16" style={{ color: '#394241' }}>CONTACT US</h2>
      <p className="font-semibold text-xl md:text-2xl mt-6 text-center px-4 md:px-0" style={{ color: '#394241' }}>
        A member of our team will get back to you shortly.
      </p>

      <form className="bg-opacity-0 mt-6 rounded-lg p-4 md:p-8 w-full max-w-xl border border-opacity-25 border-white">
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div className="col-span-1">
            <label className="block text-sm font-bold mb-2" htmlFor="name" style={{ color: '#394241' }}>
            </label>
            <div className="relative">
              <input
                className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-b-2 border-gray-400 focus:border-gray-800 placeholder-gray-800"
                id="name"
                type="text"
                placeholder="Name"
                style={{ color: '#394241' }}
              />
              <span className="absolute left-0 top-0 px-3 py-2 transition-transform duration-500 ease-in-out transform -translate-y-1/2"></span>
            </div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-bold mb-2" htmlFor="email" style={{ color: '#394241' }}>
            </label>
            <div className="relative">
              <input
                className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-b-2 border-gray-400 focus:border-gray-800 placeholder-gray-800"
                id="email"
                type="email"
                placeholder="Email"
                style={{ color: '#394241' }}
              />
              <span className="absolute left-0 top-0 px-3 py-2 transition-transform duration-500 ease-in-out transform -translate-y-1/2"></span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="phone" style={{ color: '#394241' }}>
          </label>
          <div className="relative">
            <input
              className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-b-2 border-gray-400 focus:border-gray-800 placeholder-gray-800"
              id="phone"
              type="tel"
              placeholder="Phone"
              style={{ color: '#394241' }}
            />
            <span className="absolute left-0 top-0 px-3 py-2 transition-transform duration-500 ease-in-out transform -translate-y-1/2"></span>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="company" style={{ color: '#394241' }}>
          </label>
          <div className="relative">
            <input
              className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-b-2 border-gray-400 focus:border-gray-800 placeholder-gray-800"
              id="company"
              type="text"
              placeholder="Company"
              style={{ color: '#394241' }}
            />
            <span className="absolute left-0 top-0 px-3 py-2 transition-transform duration-500 ease-in-out transform -translate-y-1/2"></span>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="message" style={{ color: '#394241' }}>
          </label>
          <div className="relative">
            <textarea
              className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-b-2 border-gray-400 focus:border-gray-800 placeholder-gray-800"
              id="message"
              placeholder="Message"
              style={{ color: '#394241' }}
            ></textarea>
            <span className="absolute left-0 top-0 px-3 py-2 transition-transform duration-500 ease-in-out transform -translate-y-1/2"></span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-1">
          <button
            className="bg-[#384241] hover:bg-gray-700 text-white font-bold py-2 px-7 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            SEND
          </button>
          <p className="text-[10pt] md:text-[7pt] text-left font-medium text-black text-center md:text-left">
            We will process your personal information in accordance with our Privacy Policy. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
