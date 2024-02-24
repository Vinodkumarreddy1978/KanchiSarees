import React from 'react';
import Nav from './Nav';
const Contact = () => {
  return (
    <div>
        <Nav/>
    <div className="container mx-auto mt-8 border-solid border-grey-900 border-2">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 block">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="enter name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="enter email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="text-sm font-medium text-gray-700 block">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
