import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', { name, email, phone, message });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex items-center">
        <i className="fas fa-user text-black mr-2"></i>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="flex items-center">
        <i className="fas fa-envelope text-black mr-2"></i>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}      
          className="flex-1 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="flex items-center">
        <i className="fas fa-phone text-black mr-2"></i>
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="flex items-center">
        <i className="fas fa-comment text-black mr-2"></i>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded h-28 resize-y"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default ContactForm;