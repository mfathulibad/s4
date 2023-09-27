import React, { useState } from 'react';
import axios from 'axios';

const AddDosenComponent = () => {
  const [formData, setFormData] = useState({
    nidn: '',
    email: '',
    nama_lengkap: '',
    jabatan_fungsional: '',
    jurusan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Make a POST request to your backend endpoint
    axios.post('http://localhost:8082/dosen/insert', formData)
      .then((response) => {
        console.log(response.data);
        // Handle success or redirection here
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className="container">
      <h2 className="mt-4">Add Dosen</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">NIDN</label>
          <input
            type="text"
            name="nidn"
            value={formData.nidn}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nama Lengkap</label>
          <input
            type="text"
            name="nama_lengkap"
            value={formData.nama_lengkap}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Jabatan Fungsional</label>
          <input
            type="text"
            name="jabatan_fungsional"
            value={formData.jabatan_fungsional}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Jurusan</label>
          <input
            type="text"
            name="jurusan"
            value={formData.jurusan}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddDosenComponent;
