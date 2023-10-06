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
  
        // Perbarui daftar mata kuliah dengan data yang baru ditambahkan
        setDaftarMataKuliah([...daftarMataKuliah, formData]);
  
        // Reset form
        setFormData({
          id_mata_kuliah: '',
          nama_mata_kuliah: '',
          semester: '',
          kode_kelas: '',
          perguruan_tinggi: '',
        });
  
        
      // alert('Data Mata Kuliah berhasil diperbarui');
      // window.location.href = '/matakuliah';
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };
  
  

  return (
    <div className="container">
      <div className='table-responsive border p-4 shadow'>
        <h2 className="mt-4">Add Mata Kuliah</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-1">
            <label htmlFor="nama_mata_kuliah" className="form-label">Nama Mata Kuliah</label>
            <input
              type="text"
              id="nama_mata_kuliah"
              name="nama_mata_kuliah"
              placeholder='Masukkan Nama Mata Kuliah' 
              value={formData.nama_mata_kuliah}
              onChange={handleChange}
              className="form-control col-md-8" // Added col-md-8
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="semester" className="form-label">Semester</label>
            <input
              type="number"
              id="semester"
              name="semester"
              placeholder='Masukkan Semester ' 
              value={formData.semester}
              onChange={handleChange}
              className="form-control col-md-8" // Added col-md-8
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="kode_kelas" className="form-label">Kode Kelas</label>
            <input
              type="text"
              id="kode_kelas"
              name="kode_kelas"
              placeholder='Masukkan Kode Kelas' 
              value={formData.kode_kelas}
              onChange={handleChange}
              className="form-control col-md-8" // Added col-md-8
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="perguruan_tinggi" className="form-label">Perguruan Tinggi</label>
            <input
              type="text"
              id="perguruan_tinggi"
              name="perguruan_tinggi"
              placeholder='Masukkan Perguruan Tinggi' 
              value={formData.perguruan_tinggi}
              onChange={handleChange}
              className="form-control col-md-8" // Added col-md-8
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className='btn btn-danger' to="/matakuliah">Cancel</Link>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMataKuliahComponent;

