import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function EditDosenComponent({ id }) {
  const [dosen, setDosen] = useState({});
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    id_dosen: "",
    id_user: "",
    email: "",
    nama_lengkap: "",
    jabatan_fungsional: "",
    jurusan: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8082/dosen/${id}`);
        setDosen(response.data);
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  // Handle perubahan input dalam formulir
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle pengiriman formulir
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8082/dosen/update`,
        formData
      );
      console.log(response.data);
      alert("Data dosen berhasil diperbarui");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center p-3 m-3">Edit Dosen</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Nama Lengkap:</label>
            <input
              type="text"
              className="form-control"
              name="nama_lengkap"
              value={formData.nama_lengkap}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Jabatan Fungsional:</label>
            <input
              type="text"
              className="form-control"
              name="jabatan_fungsional"
              value={formData.jabatan_fungsional}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Jurusan:</label>
            <input
              type="text"
              className="form-control"
              name="jurusan"
              value={formData.jurusan}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditDosenComponent;
