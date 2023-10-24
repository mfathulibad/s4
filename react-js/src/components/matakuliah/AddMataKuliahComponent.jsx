import React, { useState, useEffect } from 'react';
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

  // // State untuk menyimpan daftar mata kuliah
  // const [daftarMataKuliah, setDaftarMataKuliah] = useState([]);

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
  
    // console.log(formData.id_mata_kuliah);
  
    // Kirim data ke server
    axios.post(`http://localhost:8082/matakuliah/insert/${userAuth}`, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  const [searchResult, setSearchResult] = useState([]); // Menyimpan hasil pencarian
  const [searchKeyword, setSearchKeyword] = useState(""); // Menyimpan kata kunci pencarian

  useEffect(() => {
    // Jika searchKeyword berubah, kirim permintaan pencarian ke server
    if (searchKeyword) {
      axios
        .get(`http://localhost:8082/matakuliah/search?matkul=${searchKeyword}`)
        .then((response) => {
          setSearchResult(response.data);
        })
        .catch((error) => {
          console.error("Error searching: ", error);
        });
    } else {
      // Jika searchKeyword kosong, kosongkan hasil pencarian
      setSearchResult([]);
    }
  }, [searchKeyword]);

  const selectSearchResult = (result) => {
    setFormData({
      ...formData,
      id_mata_kuliah: result.id_mata_kuliah,
      nama_mata_kuliah: result.nama_mata_kuliah,
      semester: result.semester,
      kode_kelas: result.kode_kelas,
      perguruan_tinggi: result.perguruan_tinggi,
    });
    setSearchResult([]); // Kosongkan hasil pencarian
  };
  
  

  return (
    <div className="container">
      <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow mx-auto">
        <h2 className="text-center m-4">Tambah Mata Kuliah</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3 row">
            <label htmlFor="namaMatkul" className="col-md-4 col-form-label">Nama Mata Kuliah</label>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="nama_mata_kuliah"
                name="nama_mata_kuliah"
                placeholder="Masukkan Nama Mata Kuliah"

                value={formData.nama_mata_kuliah}
                onChange={handleChange}
                onInput={(e) => setSearchKeyword(e.target.value)}
              />
              {searchResult.length > 0 && (
                <div className="search-results p-2" style={{ maxHeight: "150px", overflowY: "auto" }}>
                  <div className="list-group">
                    {searchResult.map((result) => (
                      <button
                        key={result.id_mata_kuliah}
                        className="d-block w-100 text-left p-2 bg-light border-bottom border-left-0 border-right-0 border-top-0" 
                        onClick={() => selectSearchResult(result)}
                      >
                        {result.nama_mata_kuliah}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="semester" className="col-md-4 col-form-label">Semester</label>
            <div className="col-md-8">
              <input
                type="text"
                id="semester"
                name="semester"
                placeholder="Masukkan Semester"
                value={formData.semester}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="kode_kelas" className="col-md-4 col-form-label">Kode Kelas</label>
            <div className="col-md-8">
              <input
                type="text"
                id="kode_kelas"
                name="kode_kelas"
                placeholder="Masukkan Kode Kelas"
                value={formData.kode_kelas}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="perguruan_tinggi" className="col-md-4 col-form-label">Perguruan Tinggi</label>
            <div className="col-md-8">
              <input
                type="text"
                id="perguruan_tinggi"
                name="perguruan_tinggi"
                placeholder="Masukkan Perguruan Tinggi"
                value={formData.perguruan_tinggi}
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
  );




};

export default AddMataKuliahComponent;
