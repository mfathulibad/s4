import React, { useState } from 'react';
import axios from 'axios';

const AddMataKuliahComponent = () => {
  const [formData, setFormData] = useState({
    id_mata_kuliah: '',
    nama_mata_kuliah: '',
    semester: '',
    kode_kelas: '',
    perguruan_tinggi: '',
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
    axios.post('http://localhost:8082/matakuliah/insert', formData)
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
      <h2 className="mt-4">Add Mata Kuliah</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">ID Mata Kuliah</label>
          <input
            type="text"
            name="id_user"
            value={formData.id_mata_kuliah}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nama Mata Kuliah</label>
          <input
            type="email"
            name="email"
            value={formData.nama_mata_kuliah}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Semester</label>
          <input
            type="text"
            name="nama_lengkap"
            value={formData.semester}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Kode Kelas</label>
          <input
            type="text"
            name="jabatan_fungsional"
            value={formData.kode_kelas}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Perguruan Tinggi</label>
          <input
            type="text"
            name="jurusan"
            value={formData.perguruan_tinggi}
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

export default AddMataKuliahComponent;
