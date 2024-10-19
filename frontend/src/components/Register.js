import React, { useState } from 'react';
import { registerUser } from '../api';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert('Registered! Please verify your email.');
    } catch (err) {
      alert('Error registering user.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full mb-6 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 w-full rounded-md hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;
