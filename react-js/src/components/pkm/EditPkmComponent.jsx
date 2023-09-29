import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function EditPkmComponent({ id }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [pkm, setPkm] = useState({
    id_pengabdian:"",
    judul_pengabdian:"",
    bidang_pengabdian:"",
    tgl_pengabdian:"",
    url:"",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8082/pkm/${id}`);
        setData(response.data);
        setPkm(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  // Handle perubahan input dalam formulir
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPkm({ ...pkm, [name]: value });
  };

  // Handle pengiriman formulir
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`http://localhost:8082/pkm/update`, pkm);
        console.log(response.data);
        alert('Data pkm berhasil diperbarui');
      } catch (error) {
        console.error('Error updating data:', error);
      }
  };

  return (
    <div className="container">
        <div>
          <h2>Edit Pkm</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>ID Pengabdian:</label>
              <input
                type="text"
                className="form-control"
                name="id_pengabdian"
                value={pkm.id_pengabdian}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Judul Pengabdian:</label>
              <input
                type="text"
                className="form-control"
                name="judul_pengabdian"
                value={pkm.judul_pengabdian}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Bidang Pengabdian:</label>
              <input
                type="text"
                className="form-control"
                name="bidang_pengabdian"
                value={pkm.bidang_pengabdian}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Tanggal Pengabdian:</label>
              <input
                type="date"
                className="form-control"
                name="tgl_pengabdian"
                placeholder="YYYY-MM-DD"
                value={pkm.tgl_pengabdian}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Link PKM:</label>
              <input
                type="url"
                className="form-control"
                name="url"
                placeholder="masukan link"
                value={pkm.url}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
          </form>
        </div>
    </div>
  );
}

export default EditPkmComponent;
