import React, { useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";

const AddPkmComponent = () => {
  const [pkm, setPkm] = useState({
    id_pengabdian:"",
    judul_pengabdian:"",
    bidang_pengabdian:"",
    tgl_pengabdian:"",
    url:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPkm({
      ...pkm,
      [name]: value,
    });
  };

  const userAuth = Cookies.get("userAuth");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Make a POST request to your backend endpoint
    axios.post(`http://localhost:8082/pkm/insert/${userAuth}`, pkm)
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
      <h2 className="mt-4">Add Pkm</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Judul Pengabdian</label>
          <input
            type="text"
            name="judul_pengabdian"
            value={pkm.judul_pengabdian}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bidang Pengabdian</label>
          <input
            type="text"
            name="bidang_pengabdian"
            value={pkm.bidang_pengabdian}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date">Tanggal Pengabdian</label>
          <input
            type="date"
            name="tgl_pengabdian"
            placeholder="YYYY-MM-DD"
            value={pkm.tgl_pengabdian}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Link PKM</label>
          <input
            type="url"
            name="url"
            placeholder="masukan link"
            value={pkm.url}
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

export default AddPkmComponent;
