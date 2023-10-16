import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function EditMataKuliahComponent({ id }) {
  const [matakuliah, setMataKuliah] = useState({})
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    id_mata_kuliah:``,
    nama_mata_kuliah:``,
    semester:``,
    kode_kelas:``,
    perguruan_tinggi:``

  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8082/matakuliah/${id}`);
        setMataKuliah(response.data);
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
      const response = await axios.post(`http://localhost:8082/matakuliah/update`, formData);
      console.log(response.data);
      alert('Data Mata Kuliah berhasil diperbarui');
      window.location.href = '/matakuliah';
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center p-3 m-3">Edit Mata Kuliah</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
              <label>ID Mata Kuliah:</label>
              <input
                type="text"
                className="form-control"
                name="id_mata_kuliah"
                value={formData.id_mata_kuliah }
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Mata Kuliah:</label>
              <input
                type="text"
                className="form-control"
                name="nama_mata_kuliah"
                value={formData.nama_mata_kuliah}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Semester:</label>
              <input
                type="text"
                className="form-control"
                name="semester"
                value={formData.semester}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Kode Kelas:</label>
              <input
                type="text"
                className="form-control"
                name="kode_kelas"
                value={formData.kode_kelas}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Perguruan Tinggi:</label>
              <input
                type="text"
                className="form-control"
                name="perguruan_tinggi"
                value={formData.perguruan_tinggi}
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


export default EditMataKuliahComponent;
