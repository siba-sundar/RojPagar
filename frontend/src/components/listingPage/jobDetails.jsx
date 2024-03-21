import React from 'react';
import "./jobDetails.css"
import Footer from "../landingPage/landingFooter.jsx"
const CarpenterDetails = () => {
  const jobData = {
    title: 'Carpenter',
    company: 'ABC Construction (or your company name)',
    location: 'Your City, State (or Flexible Location)',
    salary: '$45,000 - $60,000 (negotiable)', // Adjust salary range as needed
    timings: 'Full-time (M-F, 8am - 5pm) with potential overtime',
    description:
      'We are seeking a skilled and experienced carpenter to join our growing team. You will be responsible for a variety of tasks, including building, installing, repairing, and maintaining various wood structures, fixtures, and buildings. This includes framing, installing cabinets, molding, trim, doors, windows, and more. You should have a strong knowledge of carpentry techniques and tools, as well as a keen eye for detail and a commitment to quality craftsmanship. Excellent safety practices and the ability to work independently and as part of a team are essential.',
    qualifications: [
      '2+ years of experience in carpentry or a related trade',
      'Proficiency in using hand and power tools (saws, drills, hammers, etc.)',
      'Experience with framing, cabinet installation, molding, trim, doors, and windows',
      'Strong understanding of carpentry techniques and building codes',
      'Ability to read and interpret blueprints and specifications',
      'Excellent problem-solving and critical thinking skills',
      'Meticulous attention to detail and a commitment to high-quality work',
      'Ability to work independently and as part of a team',
      'Reliable and dependable with a strong work ethic',
      'Valid driver\'s license and a clean driving record (may be required)',
    ],
    benefits: [
      'Competitive salary and benefits package',
      'Health insurance, dental, and vision coverage (may vary)',
      'Paid time off (vacation and sick leave)',
      '401(k) retirement plan (may be offered)',
      'Opportunities for professional development and growth',
      'Positive and collaborative work environment',
    ],
  };

  return (
    <>
    <div className="job-detailstyre">
      <div className="job-titletyre">
        <h1>{jobData.title}</h1>
      </div>
      <div className="job-infotyre">
        <div className="job-companytyre">
          <h3>{jobData.company}</h3>
        </div>
        <div className="job-locationtyre">
          <p><span role="img" aria-label="Location"></span> {jobData.location}</p>
        </div>
        <div className="job-salarytyre">
          <p><span role="img" aria-label="Money"></span> {jobData.salary}</p>
        </div>
        <div className="job-timingstyre">
          <p><span role="img" aria-label="Clock">️</span> {jobData.timings}</p>
        </div>
      </div>
      <div className="job-descriptiontyre">
        <h2>Job Description</h2>
        <p>{jobData.description}</p>
      </div>
      <div className="job-qualificationstyre">
        <h2>Qualifications</h2>
        <ul>
          {jobData.qualifications.map((qualification) => (
            <li key={qualification}>{qualification}</li>
          ))}
        </ul>
      </div>
      <div className="job-benefitstyre">
        <h2>Benefits</h2>
        <ul>
          {jobData.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="job-applytyre">
        <button>Bid Now</button>
      </div>
    </div>
     <Footer/>
    </>
   
  );
};

export default CarpenterDetails;
