import React, { useState } from 'react';
import { postJob } from '../api';

const PostJob = ({ token }) => {
  const [form, setForm] = useState({ title: '', description: '', experienceLevel: '', endDate: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postJob(form, token);
      alert('Job posted successfully');
    } catch (err) {
      alert('Error posting job');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Post a Job</h2>
        <input type="text" name="title" placeholder="Job Title" onChange={handleChange} className="border p-3 w-full mb-4 rounded-md" required />
        <input type="text" name="description" placeholder="Job Description" onChange={handleChange} className="border p-3 w-full mb-4 rounded-md" required />
        <input type="text" name="experienceLevel" placeholder="Experience Level" onChange={handleChange} className="border p-3 w-full mb-4 rounded-md" required />
        <input type="date" name="endDate" onChange={handleChange} className="border p-3 w-full mb-6 rounded-md" required />
        <button type="submit" className="bg-blue-600 text-white p-3 w-full rounded-md hover:bg-blue-700 transition">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
