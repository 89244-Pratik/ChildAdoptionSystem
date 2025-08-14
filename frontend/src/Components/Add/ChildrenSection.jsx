import React, { useState } from 'react';

const ChildrenSection = () => {
  const [children, setChildren] = useState([
    {
      child_id: 1,
      name: 'Aarav',
      age: 3,
      status: 'Available',
      education: 'Preschool',
      gender: 'Male',
      blood_group: 'A+',
      colour_complexity: 'Fair',
      deficiency: 'None',
      medical_history: 'None',
      other: 'Loves animals',
      image: 'child1.jpg',
      users_user_id: 1
    },
    // More sample children...
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingChild, setEditingChild] = useState(null);
  const [newChild, setNewChild] = useState({
    name: '',
    age: '',
    status: 'Available',
    education: '',
    gender: '',
    blood_group: '',
    colour_complexity: '',
    deficiency: '',
    medical_history: '',
    other: '',
    image: '',
    users_user_id: 1 // Default to current user
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingChild) {
      setEditingChild({ ...editingChild, [name]: value });
    } else {
      setNewChild({ ...newChild, [name]: value });
    }
  };

  const handleAddChild = (e) => {
    e.preventDefault();
    const newChildWithId = {
      ...newChild,
      child_id: Math.max(...children.map(c => c.child_id), 0) + 1
    };
    setChildren([...children, newChildWithId]);
    setNewChild({
      name: '',
      age: '',
      status: 'Available',
      education: '',
      gender: '',
      blood_group: '',
      colour_complexity: '',
      deficiency: '',
      medical_history: '',
      other: '',
      image: '',
      users_user_id: 1
    });
    setShowAddForm(false);
  };

  const handleUpdateChild = (e) => {
    e.preventDefault();
    setChildren(children.map(child => 
      child.child_id === editingChild.child_id ? editingChild : child
    ));
    setEditingChild(null);
  };

  const handleDeleteChild = (id) => {
    setChildren(children.filter(child => child.child_id !== id));
  };

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: '#00008b' }}>Children in Care</h2>
        <button 
          className="btn btn-primary"
          onClick={() => {
            setShowAddForm(!showAddForm);
            setEditingChild(null);
          }}
        >
          {showAddForm ? 'Cancel' : 'Add New Child'}
        </button>
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingChild) && (
        <div className="card shadow-sm mb-4">
          <div className="card-header bg-white">
            <h5 className="mb-0">{editingChild ? 'Edit Child' : 'Add New Child'}</h5>
          </div>
          <div className="card-body">
            <form onSubmit={editingChild ? handleUpdateChild : handleAddChild}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={editingChild ? editingChild.name : newChild.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      value={editingChild ? editingChild.age : newChild.age}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={editingChild ? editingChild.status : newChild.status}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Available">Available</option>
                      <option value="Processing">Processing</option>
                      <option value="Adopted">Adopted</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Education</label>
                    <input
                      type="text"
                      className="form-control"
                      name="education"
                      value={editingChild ? editingChild.education : newChild.education}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select"
                      name="gender"
                      value={editingChild ? editingChild.gender : newChild.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Blood Group</label>
                    <select
                      className="form-select"
                      name="blood_group"
                      value={editingChild ? editingChild.blood_group : newChild.blood_group}
                      onChange={handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Colour Complexity</label>
                    <input
                      type="text"
                      className="form-control"
                      name="colour_complexity"
                      value={editingChild ? editingChild.colour_complexity : newChild.colour_complexity}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Deficiency</label>
                    <input
                      type="text"
                      className="form-control"
                      name="deficiency"
                      value={editingChild ? editingChild.deficiency : newChild.deficiency}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Medical History</label>
                    <textarea
                      className="form-control"
                      name="medical_history"
                      value={editingChild ? editingChild.medical_history : newChild.medical_history}
                      onChange={handleInputChange}
                      rows="2"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Other Information</label>
                    <textarea
                      className="form-control"
                      name="other"
                      value={editingChild ? editingChild.other : newChild.other}
                      onChange={handleInputChange}
                      rows="2"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      name="image"
                      value={editingChild ? editingChild.image : newChild.image}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  {editingChild ? 'Update Child' : 'Add Child'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Children List */}
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Education</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {children.map(child => (
                  <tr key={child.child_id}>
                    <td>{child.child_id}</td>
                    <td>{child.name}</td>
                    <td>{child.age}</td>
                    <td>{child.gender}</td>
                    <td>
                      <span className={`badge ${
                        child.status === 'Available' ? 'bg-success' : 
                        child.status === 'Processing' ? 'bg-warning' : 'bg-secondary'
                      }`}>
                        {child.status}
                      </span>
                    </td>
                    <td>{child.education}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => {
                          setEditingChild(child);
                          setShowAddForm(false);
                        }}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteChild(child.child_id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrenSection;