import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";



const AddRiwayatPendidikanComponent = () => {
  const [formData, setFormData] = useState({
    id_riwayat_pendidikan:``,
    jenjang:``,
    institusi:``,
    tahun_lulus:``,
    negara:``
  });

  // State untuk menyimpan daftar mata kuliah
  const [daftarRiwayatPendidikan, setRiwayatPendidikan] = useState([]);

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
  
    console.log(formData.id_riwayat_pendidikan);
  
    // Kirim data ke server
    axios
      .post(`http://localhost:8082/riwayatpendidikan/insert/${userAuth}`, formData)
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
        <h2 className="mt-4">Add Riwayat Pendidikan</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label htmlFor="nama_riwayat_pendidikan" className="form-label">Nama Riwayat Pendidikan</label>
            <input
              type="text"
              id="nama_riwayat_pendidikan"
              name="nama_riwayat_pendidikan"
              placeholder='' 
              value={formData.nama_riwayat_pendidikan}
              onChange={handleChange}
              className="form-control" // Added col-md-8
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="jenjang" className="form-label">Jenjang</label>
            <input
              type="text"
              id="jenjang"
              name="jenjang"
              placeholder=' ' 
              value={formData.jenjang}
              onChange={handleChange}
              className="form-control " // Added col-md-8
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="institusi" className="form-label">Institusi</label>
            <input
              type="text"
              id="institusi"
              name="institusi"
              placeholder='' 
              value={formData.institusi}
              onChange={handleChange}
              className="form-control " // Added col-md-8
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tahun_lulus" className="form-label">Tahun Lulus</label>
            <input
              type="number"
              id="tahun_lulus"
              name="tahun_lulus"
              placeholder=''
              value={formData.tahun_lulus}
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

export default AddRiwayatPendidikanComponent;

