import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";



const AddMataKuliahComponent = () => {
  const [formData, setFormData] = useState({
    id_mata_kuliah: '',
    nama_mata_kuliah: '',
    semester: '',
    kode_kelas: '',
    perguruan_tinggi: '',
  });

  // State untuk menyimpan daftar mata kuliah
  const [daftarMataKuliah, setDaftarMataKuliah] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const userAuth = Cookies.get("userAuth");
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(formData.id_mata_kuliah);
  
    // Kirim data ke server
    axios
      .post(`http://localhost:8082/matakuliah/insert/${userAuth}`, formData)
      .then((response) => {
        console.log(response.data);
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
            <label htmlFor="nama_mata_kuliah" className="form-label">Nama Mata Kuliah</label>
            <input
              type="text"
              id="nama_mata_kuliah"
              name="nama_mata_kuliah"
              placeholder='' 
              value={formData.nama_mata_kuliah}
              onChange={handleChange}
              className="form-control" // Added col-md-8
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="semester" className="form-label">Semester</label>
            <input
              type="number"
              id="semester"
              name="semester"
              placeholder=' ' 
              value={formData.semester}
              onChange={handleChange}
              className="form-control " // Added col-md-8
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="kode_kelas" className="form-label">Kode Kelas</label>
            <input
              type="text"
              id="kode_kelas"
              name="kode_kelas"
              placeholder='' 
              value={formData.kode_kelas}
              onChange={handleChange}
              className="form-control " // Added col-md-8
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="perguruan_tinggi" className="form-label">Perguruan Tinggi</label>
            <input
              type="text"
              id="perguruan_tinggi"
              name="perguruan_tinggi"
              placeholder=''
              value={formData.perguruan_tinggi}
              onChange={handleChange}
              className="form-control" // Added col-md-8
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">Submit</button>
            {/* <Link className='btn btn-danger' to="/matakuliah">Cancel</Link> */}

          </div>
        </form>
      </div>
  );
};

export default AddMataKuliahComponent;

