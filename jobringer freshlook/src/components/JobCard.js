import React from 'react';
import './JobCard.css';
import { FaLinkedin, FaShareAlt, FaEnvelope } from 'react-icons/fa';

const JobCard = ({ title, company, description, socialLinks }) => {
  // Default values for missing props
  const safeTitle = title || 'Job Title';
  const safeCompany = company || 'Company Name';
  const safeDescription = description || 'Job Description';
  const safeSocialLinks = socialLinks || {
    linkedin: '#',
    email: '#',
  };

  return (
    <div className="job-card">
      <h3>{safeTitle}</h3>
      <p><strong>{safeCompany}</strong></p>
      <p>{safeDescription}</p>
      <div className="social-links">
        <a href={safeSocialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href={`mailto:${safeSocialLinks.email}`}>
          <FaEnvelope className="social-icon" />
        </a>
        <button className="share-button" onClick={() => alert('Share this job!')}>
          <FaShareAlt className="social-icon" />
        </button>
      </div>
      <button className="apply-button" onClick={() => alert('Apply for this job!')}>
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;