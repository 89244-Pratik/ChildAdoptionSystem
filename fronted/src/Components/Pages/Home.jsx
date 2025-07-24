import React from 'react';
import './Home.css';
import { FaMapMarkerAlt, FaSearch, FaChild, FaHome, FaVenusMars, FaBirthdayCake } from 'react-icons/fa';

const Home = () => {
  // Dummy data for children available for adoption
  const childrenData = [
    {
      id: 1,
      name: "Aarav",
      age: 3,
      gender: "Male",
      orphanage: "Shanti Niketan",
      location: "Mumbai",
      description: "Cheerful and playful toddler who loves animals and outdoor activities."
    },
    {
      id: 2,
      name: "Priya",
      age: 5,
      gender: "Female",
      orphanage: "Bal Ashram",
      location: "Delhi",
      description: "Creative and curious girl who enjoys drawing and storytelling."
    },
    {
      id: 3,
      name: "Rohan",
      age: 2,
      gender: "Male",
      orphanage: "Little Angels",
      location: "Bangalore",
      description: "Adorable and energetic baby who brings joy to everyone around him."
    }
  ];

  return (
    <>
      {/* Hero Section with Search Bar - UNCHANGED */}
      <section
        className="hero-section position-relative d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #00008b 0%, #1E90FF 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.2)', 
            zIndex: 1,
            background: 'linear-gradient(to right, rgba(0,0,139,0.3) 0%, rgba(30,144,255,0.3) 100%)'
          }}
        ></div>

        <div style={{ zIndex: 2 }}>
          <h1 className="fw-bold display-4 mb-3 text-white text-start">
            <b>Be The Smile of Someone</b>
          </h1>

          <div className="mb-5">
            <h2 className="fw-bold display-5">Find Your Perfect Match</h2>
            <p className="lead">
              Connect loving families with children who need homes. Start your adoption journey today.
            </p>
          </div>

          {/* Search Filter Bar - EXACTLY AS BEFORE */}
          <div
            className="search-bar d-flex flex-wrap justify-content-center bg-white p-3 rounded shadow w-100 mx-auto"
            style={{ maxWidth: '1100px' }}
          >
            <div className="input-group m-2" style={{ minWidth: '200px' }}>
              <span className="input-group-text bg-dark text-white">
                <FaMapMarkerAlt />
              </span>
              <input
                type="text"
                className="form-control bg-dark text-white border-0"
                placeholder="Location"
                defaultValue="Pune"
              />
            </div>

            <div className="form-group m-2" style={{ minWidth: '180px' }}>
              <select className="form-select bg-dark text-white border-0">
                <option>Age Group</option>
                <option>0-2 Years</option>
                <option>3-5 Years</option>
                <option>6-10 Years</option>
                <option>11+ Years</option>
              </select>
            </div>

            <div className="form-group m-2" style={{ minWidth: '160px' }}>
              <select className="form-select bg-dark text-white border-0">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="m-2">
              <button className="btn btn-primary px-4 h-100">
                <FaSearch className="me-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW Children Available Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Children Waiting for Families</h2>
          <div className="row g-4">
            {childrenData.map((child) => (
              <div className="col-md-4" key={child.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{child.name}</h5>
                    <div className="d-flex flex-wrap gap-3 mb-3">
                      <span className="text-muted">
                        <FaBirthdayCake className="me-1" /> {child.age} years
                      </span>
                      <span className="text-muted">
                        <FaVenusMars className="me-1" /> {child.gender}
                      </span>
                    </div>
                    <div className="mb-3">
                      <p className="mb-1"><FaHome className="me-1 text-muted" /> {child.orphanage}</p>
                      <p className="mb-1"><FaMapMarkerAlt className="me-1 text-muted" /> {child.location}</p>
                    </div>
                    <p className="card-text">{child.description}</p>
                    <button className="btn btn-outline-primary w-100 mt-3">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - UNCHANGED */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold">What Our Families Say</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-3 shadow-sm h-100">
                <p>
                  "Adopting through this platform changed our lives. We are now a happy family of four!"
                </p>
                <h6 className="mt-3 mb-0 text-primary">– Neha & Raj</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow-sm h-100">
                <p>
                  "The process was smooth, transparent, and filled with care and support."
                </p>
                <h6 className="mt-3 mb-0 text-primary">– Sunita</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow-sm h-100">
                <p>
                  "Thanks to the amazing team, we now have our little angel with us."
                </p>
                <h6 className="mt-3 mb-0 text-primary">– Ankit & Priya</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;