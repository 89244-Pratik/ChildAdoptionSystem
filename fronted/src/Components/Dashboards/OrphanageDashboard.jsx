import React, { useState } from 'react';
import ChildrenSection from './Add/ChildrenSection'; // Adjust path if needed

const OrphanageDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [orphanageDetails, setOrphanageDetails] = useState({
    orphanageName: '',
    registrationNumber: '',
    adminName: '',
    phoneNumber: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  });

  const [activeTab, setActiveTab] = useState('overview');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrphanageDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert('Orphanage details updated successfully!');
  };

  if (!user || user.role !== 'admin') {
    return <div className="text-center p-5 text-danger">Unauthorized access</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Welcome, {user.name} 👋</h2>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Orphanage Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'children' ? 'active' : ''}`}
            onClick={() => setActiveTab('children')}
          >
            Children
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'requests' ? 'active' : ''}`}
            onClick={() => setActiveTab('requests')}
          >
            Adoption Requests
          </button>
        </li>
      </ul>

      {activeTab === 'overview' && (
        <div>
          <h4 className="mb-3 text-info">Orphanage Information</h4>
          <form onSubmit={handleUpdate}>
            {[
              { name: 'orphanageName', label: 'Orphanage Name' },
              { name: 'registrationNumber', label: 'Registration Number' },
              { name: 'adminName', label: 'Admin Name' },
              { name: 'phoneNumber', label: 'Phone Number' },
              { name: 'city', label: 'City' },
              { name: 'state', label: 'State' },
              { name: 'country', label: 'Country' },
              { name: 'pincode', label: 'Pincode' },
            ].map(({ name, label }) => (
              <div className="mb-3" key={name}>
                <label className="form-label fw-bold">{label}</label>
                <input
                  type="text"
                  className="form-control"
                  name={name}
                  value={orphanageDetails[name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <button type="submit" className="btn btn-success">
              Update Details
            </button>
          </form>
        </div>
      )}

      {activeTab === 'children' && <ChildrenSection />}

      {activeTab === 'requests' && (
        <div className="mt-4">
          <h4 className="text-info">Adoption Requests</h4>
          <p className="text-muted">(This section will display request count and parent info on click.)</p>
          <div className="alert alert-warning">
            🚧 Coming soon: View and manage adoption requests here.
          </div>
        </div>
      )}
    </div>
  );
};

export default OrphanageDashboard;
