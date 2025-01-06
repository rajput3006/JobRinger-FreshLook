import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Hero from './components/Hero';
import Filter from './components/Filter';
import About from './components/About';
import JobCard from './components/JobCard';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [filters, setFilters] = useState({ keyword: '', location: '' });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log('Filters applied:', newFilters);
  };

  const jobs = [
    {
      title: 'Frontend Developer',
      company: 'TechCorp',
      description: 'Build and optimize user interfaces.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        email: 'frontend@techcorp.com',
      },
    },
    {
      title: 'Backend Developer',
      company: 'DataSystems',
      description: 'Develop robust APIs and databases.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        email: 'backend@techcorp.com',
      },
    },
    {
      title: 'Software Developer',
      company: 'Techniee',
      description: 'Develop Application and Softwares.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        email: 'software@techcorp.com',
      },
    },
  ];

  // Filter jobs based on the keyword and location
  const filteredJobs = jobs.filter((job) => {
    const matchesKeyword = job.title.toLowerCase().includes(filters.keyword.toLowerCase());
    const matchesLocation = job.company.toLowerCase().includes(filters.location.toLowerCase());
    return matchesKeyword && matchesLocation;
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <Filter onFilterChange={handleFilterChange} />
              {filteredJobs.map((job, index) => (
                <JobCard
                  key={index}
                  title={job.title}
                  company={job.company}
                  description={job.description}
                  socialLinks={job.socialLinks}
                />
              ))}
              <Footer />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/jobcard" element={<JobCard />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;