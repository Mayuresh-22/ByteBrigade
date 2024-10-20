import React, { useState } from "react";
import PopUpBox from "../components/ui/popup";

const JobCard = ({ job }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const handleNewMessageClick = () => {
    // Show the pop-up for unimplemented feature
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    // refresh the page
    window.location.reload();
    setShowPopUp(false);
  };

  return <div className="cursor-pointer bg-white border-b px-0 py-7 flex justify-between" onClick={() => {
    setTitle('Feature Coming Soon');
    setMessage(`Student will be able to apply for jobs directly from the platform. More details about \'${job.title}\' will be shown on new page.`);
    handleNewMessageClick();
  }}>
    <div className="job-details">
      <h3 className="font-semibold text-lg">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.location}</p>
      <p className="text-sm text-gray-500">{job.experience} • {job.salary} • {job.datePosted}</p>
      <div className="flex gap-2 mt-2">
        {job.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-xs px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
    </div>
    <button className="apply-button text-blue-500 font-semibold">Apply w/ 🔗</button>
    {showPopUp && (
      <PopUpBox
        id={job.title}
        title={title}
        message={message}
        onClose={handleClosePopUp}
      />
    )}
  </div>
};

const JobList = () => {
  const jobs = [
    {
      title: "Netsuite Project Manager at Unique HR",
      location: "In-Office (Hyderabad, India) • Full-time",
      experience: "4 - 10 years",
      salary: "15L - 24L",
      datePosted: "1d ago",
      tags: ["Netsuite", "Netsuite Project Management", "Netsuite Erp"],
    },
    {
      title: "Senior Software Engineer at Qualys",
      location: "In-Office (Pune, India) • Full-time",
      experience: "5+ years",
      salary: "",
      datePosted: "2d ago",
      tags: ["AWS", "Azure", "RESTful API", "Kafka"],
    },
    {
      title: "Senior Python Developer at ContractPodAI",
      location: "Hybrid (Pune, India +1)",
      experience: "6+ years",
      salary: "",
      datePosted: "2d ago",
      tags: ["Python", "NumPy", "Pandas", "FastAPI"],
    },
    // Add more jobs as needed
  ];

  return (
    <div className="jobs-section flex flex-col w-2/3 p-4 border-r-2">
      <div className="jobs-header flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">All Jobs</h2>
        <button className="text-gray-600">Job Preferences</button>
      </div>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

const FilterSection = () => (
  <div className="filter-section w-1/3 p-4">
    <div className="filter-card bg-white p-4 rounded-lg mb-4 py-10 border">
      <h3 className="font-semibold text-lg">Find the perfect job with Job Hunt AI</h3>
      <input
        className="border w-full p-2 mt-2 mb-4 rounded-lg"
        placeholder="Search jobs"
      />
      <div className="tags flex flex-wrap gap-2">
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Design jobs in Europe</span>
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Software jobs in India</span>
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Python jobs</span>
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">ReactJS jobs in Pune</span>
      </div>
    </div>

    <div className="filter-card bg-white p-4 rounded-lg mb-4 py-10 border">
      <h3 className="font-semibold text-lg">Open for new job opportunities?</h3>
      <div className="flex flex-col gap-2 mt-2">
        <label className="flex items-center">
          <input type="radio" name="job-status" className="mr-2" />
          Yes — actively applying.
        </label>
        <label className="flex items-center">
          <input type="radio" name="job-status" className="mr-2" />
          Yes — casually looking.
        </label>
        <label className="flex items-center">
          <input type="radio" name="job-status" className="mr-2" />
          Not looking for new jobs.
        </label>
      </div>
    </div>
  </div>
);

const CareerLayout = () => {
  return (
    <div className="jobs-page flex">
      <JobList />
      <FilterSection />
    </div>
  );
};

export default CareerLayout;
