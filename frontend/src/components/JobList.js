import React, { useState, useEffect } from 'react';
import { getJobs } from '../api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await getJobs();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Job List</h1>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-gray-700">{job.description}</p>
            <p className="text-gray-600">Experience Level: {job.experienceLevel}</p>
            <p className="text-gray-600">End Date: {new Date(job.endDate).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
