import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: 'parent',

    // Common fields
    email: '',
    password: '',

    // Parent fields
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    profession: '',

    // Orphanage Admin fields
    orphanageName: '',
    registrationNumber: '',
    adminName: '',
    phone: '',
    orphanageAddress: '',
    orphanageCity: '',
    orphanageState: '',
    country: '',
    orphanagePincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Prepare data for localStorage based on role
    const userData = formData.role === 'parent' ? {
      role: formData.role,
      name: formData.name,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      profession: formData.profession
    } : {
      role: formData.role,
      name: formData.adminName, // Using adminName as name for admin
      email: formData.email,
      phone: formData.phone,
      address: formData.orphanageAddress,
      city: formData.orphanageCity,
      state: formData.orphanageState,
      pincode: formData.orphanagePincode,
      orphanageName: formData.orphanageName,
      registrationNumber: formData.registrationNumber,
      country: formData.country
    };

    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    alert("Registered successfully!");

    // Redirect based on role
    if (formData.role === 'parent') {
      navigate('/parent/dashboard');
    } else {
      navigate('/orphanage/dashboard');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSignUp}>
                {/* Role selection */}
                <div className="mb-4">
                  <label className="form-label fw-bold">I am signing up as:</label>
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        id="parentRole"
                        value="parent"
                        checked={formData.role === 'parent'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="parentRole">
                        Prospective Parent
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        id="adminRole"
                        value="admin"
                        checked={formData.role === 'admin'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="adminRole">
                        Orphanage Administrator
                      </label>
                    </div>
                  </div>
                </div>

                {/* Common fields */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Fields for Parent */}
                {formData.role === 'parent' && (
                  <>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-4">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">State</label>
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Pincode</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Profession</label>
                      <input
                        type="text"
                        className="form-control"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </>
                )}

                {/* Fields for Orphanage Admin */}
                {formData.role === 'admin' && (
                  <>
                    <div className="mb-3">
                      <label className="form-label">Orphanage Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="orphanageName"
                        value={formData.orphanageName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Registration Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Admin Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="adminName"
                          value={formData.adminName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Orphanage Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="orphanageAddress"
                        value={formData.orphanageAddress}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-4">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="orphanageCity"
                          value={formData.orphanageCity}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">State</label>
                        <input
                          type="text"
                          className="form-control"
                          name="orphanageState"
                          value={formData.orphanageState}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        name="orphanagePincode"
                        value={formData.orphanagePincode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </>
                )}

                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;