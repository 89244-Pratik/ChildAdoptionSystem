import React, { useState } from 'react';

const ParentDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [showChildren, setShowChildren] = useState(false);
  const [showOrphanages, setShowOrphanages] = useState(false);

  const children = [
    { id: 1, name: 'Aarav', age: 5, gender: 'Male' },
    { id: 2, name: 'Meera', age: 4, gender: 'Female' },
    { id: 3, name: 'Ishaan', age: 6, gender: 'Male' }
  ];

  const orphanages = [
    { id: 1, name: 'Hope House', location: 'Mumbai', contact: '9999999999' },
    { id: 2, name: 'Care Shelter', location: 'Delhi', contact: '8888888888' }
  ];

  if (!user || user.role !== "parent") {
    return (
      <div className="container mt-5 text-center">
        <h4 className="text-danger">Unauthorized Access</h4>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">Welcome, {user.name} 👋</h2>

      <div className="card p-4 shadow-sm mb-4">
        <h5 className="mb-3">Your Information</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
          <li className="list-group-item"><strong>Address:</strong> {user.address}, {user.city}, {user.state} - {user.pincode}</li>
          <li className="list-group-item"><strong>Profession:</strong> {user.profession}</li>
          <li className="list-group-item"><strong>Role:</strong> {user.role}</li>
        </ul>
      </div>

      <div className="mb-4 d-flex gap-3">
        <button className="btn btn-success" onClick={() => setShowChildren(!showChildren)}>
          {showChildren ? 'Hide' : 'Show'} Children
        </button>
        <button className="btn btn-info" onClick={() => setShowOrphanages(!showOrphanages)}>
          {showOrphanages ? 'Hide' : 'Show'} Orphanages
        </button>
      </div>

      {showChildren && (
        <div className="card mb-4 p-3">
          <h5>Available Children</h5>
          <ul className="list-group">
            {children.map((child) => (
              <li key={child.id} className="list-group-item">
                <strong>{child.name}</strong> - {child.age} years old, {child.gender}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showOrphanages && (
        <div className="card mb-4 p-3">
          <h5>Available Orphanages</h5>
          <ul className="list-group">
            {orphanages.map((org) => (
              <li key={org.id} className="list-group-item">
                <strong>{org.name}</strong> - {org.location} - 📞 {org.contact}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ParentDashboard;
