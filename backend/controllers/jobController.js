const Job = require('../models/Job');

exports.postJob = async (req, res) => {
    try {
        const { title, description, experienceLevel, endDate } = req.body;
        const newJob = new Job({ title, description, experienceLevel, endDate });
        await newJob.save();
        res.status(201).json({ message: 'Job posted successfully', job: newJob });
    } catch (error) {
        res.status(500).json({ message: 'Error posting job', error });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
};
