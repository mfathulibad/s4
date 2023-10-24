import React, { useState } from "react";
import axios from "axios";

const AddDosenComponent = () => {
  const [formData, setFormData] = useState({
    nidn: "",
    email: "",
    nama_lengkap: "",
    jabatan_fungsional: "",
    jurusan: "",
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
    axios
      .post("http://localhost:8082/dosen/insert", formData)
      .then((response) => {
        console.log(response.data);
        alert("Dosen Berhasil Ditambahkan !");
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  const formStyle = {
    maxWidth: "650px",
    margin: "0 auto",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow mx-auto">
          <h2 className="text-center m-4">Tambah Dosen</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3 row">
              <label className="col-md-4 col-form-label" >NIDN</label>
              <div className="col-md-8">
              <input
                type="text"
                name="nidn"
                placeholder="Masukkan NIDN"

                value={formData.nidn}
                onChange={handleChange}
                className="form-control"
                required
              />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-md-4 col-form-label">Email</label>
              <div className="col-md-8">
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"

                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-md-4 col-form-label">Nama Lengkap</label>
              <div className="col-md-8">
              <input
                type="text"
                name="nama_lengkap"
                placeholder="Masukkan Nama Lengkap"

                value={formData.nama_lengkap}
                onChange={handleChange}
                className="form-control"
                required
              />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-md-4 col-form-label">Jabatan Fungsional</label>
              <div className="col-md-8">
              <input
                type="text"
                name="jabatan_fungsional"
                placeholder="Masukkan Jabatan Fungsional"

                value={formData.jabatan_fungsional}
                onChange={handleChange}
                className="form-control"
                required
              />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-md-4 col-form-label">Jurusan</label>
              <div className="col-md-8">
              <input
                type="text"
                name="jurusan"
                placeholder="Masukkan Jurusan"
                value={formData.jurusan}
                onChange={handleChange}
                className="form-control"
                required
              />
              </div>
            </div>
            <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDosenComponent;
