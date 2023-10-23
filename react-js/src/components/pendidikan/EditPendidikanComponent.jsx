import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function EditRiwayatPendidikanComponent({ id }) {
  const [riwayatpendidikan, setRiwayatPendidikan] = useState({})
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    id_riwayat_pendidikan:``,
    jenjang_pendidikan:``,
    institusi:``,
    tahun_lulus:``,
    negara:``

  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8082/riwayatpendidikan/${id}`);
        setRiwayatPendidikan(response.data);
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8082/riwayatpendidikan/update`, formData);
      console.log(response.data);
      alert('Data Riwayat Pendidikan berhasil diperbarui');
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center p-3 m-3">Edit Riwayat Pendidikan</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
              <label>ID Riwayat Pendidikan:</label>
              <input
                type="text"
                className="form-control"
                name="id_riwayat_pendidikan"
                value={formData.id_riwayat_pendidikan }
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Jenjang:</label>
              <input
                type="text"
                className="form-control"
                name="jenjang"
                value={formData.jenjang_pendidikan}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Institusi:</label>
              <input
                type="text"
                className="form-control"
                name="institusi"
                value={formData.institusi}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Tahun Lulus:</label>
              <input
                type="number"
                className="form-control"
                name="tahun_lulus"
                value={formData.tahun_lulus}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Negara Institusi:</label>
              <input
                type="text"
                className="form-control"
                name="negara"
                value={formData.negara}
                onChange={handleInputChange}
              />
            </div>
          <button type="submit" className="btn btn-primary">
            Simpan Perubahan
          </button>
          {/* <Link className='btn btn-danger' to="/matakuliah">Batal</Link> */}
        </form>
      </div>
    </div>
  );
}


export default EditRiwayatPendidikanComponent;
