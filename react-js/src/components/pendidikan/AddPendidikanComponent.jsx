import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";


const userAuth = Cookies.get("userAuth");

const AddRiwayatPendidikanComponent = () => {
  const [formData, setFormData] = useState({
    id_riwayat_pendidikan: ``,
    id_dosen: userAuth,
    jenjang_pendidikan: ``,
    institusi: ``,
    tahun_lulus: ``,
    negara: ``,
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

    console.log(formData);

    // Kirim data ke server
    axios
      .post(`http://localhost:8082/riwayatpendidikan/insert/`, formData)
      .then((response) => {
        console.log(response.data);
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
          <h2 className="text-center m-4">Tambah Pendidikan</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3 row">
              <label htmlFor="jenjang_pendidikan" className="col-md-4 col-form-label">
                Jenjang
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  id="jenjang_pendidikan"
                  name="jenjang_pendidikan"
                  placeholder="Masukkan Jenjang pendidikan"
                  value={formData.jenjang_pendidikan}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="institusi" className="col-md-4 col-form-label">
                Institusi
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  id="institusi"
                  name="institusi"
                  placeholder="Masukkan Institusi"
                  value={formData.institusi}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="tahun_lulus" className="col-md-4 col-form-label">
                Tahun Lulus
              </label>
              <div className="col-md-8">
                <input
                  type="number"
                  id="tahun_lulus"
                  name="tahun_lulus"
                  placeholder="Masukkan Tahun Lulus"
                  value={formData.tahun_lulus}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="negara" className="col-md-4 col-form-label">
                Negara
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  id="negara"
                  name="negara"
                  placeholder="Masukkan Negara Institusi"
                  value={formData.negara}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default AddRiwayatPendidikanComponent;
