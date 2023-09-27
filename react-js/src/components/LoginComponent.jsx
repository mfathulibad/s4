import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LoginComponent() {
    const [dosen, setDosen] = useState({});
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    // Handle perubahan input dalam formulir
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle pengiriman formulir
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(`http://localhost:8082/user/login`, formData);
          console.log(response.data);
          alert('Login Berhasil !');
        } catch (error) {
          console.error('Error updating data:', error);
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
            <input
                type="text"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
            />
            <label className="form-label">Username</label>
        </div>

        <div className="form-outline mb-4">
            <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            <label className="form-label">Password</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
    </form>
  );
}

export default LoginComponent;
