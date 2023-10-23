import React, { useState, useEffect } from 'react';
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

  const [searchResult, setSearchResult] = useState([]); // Menyimpan hasil pencarian
  const [searchKeyword, setSearchKeyword] = useState(""); // Menyimpan kata kunci pencarian

  useEffect(() => {
    // Jika searchKeyword berubah, kirim permintaan pencarian ke server
    if (searchKeyword) {
      axios
        .get(`http://localhost:8082/pkm/search?judul=${searchKeyword}`)
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
    setPkm({
      ...pkm,
      id_pengabdian: result.id_pengabdian,
      judul_pengabdian: result.judul_pengabdian,
      bidang_pengabdian: result.bidang_pengabdian,
      tgl_pengabdian: result.tgl_pengabdian,
      url : result.url
    });
    setSearchResult([]); // Kosongkan hasil pencarian
  };

  return (
    <div className="container">
      <h2 className="mt-4">Add Pkm</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
              <label htmlFor="judulPengabdian" className="form-label">
                Judul Pengabdian
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Masukkan Judul Pengabdian"
                name="judul_pengabdian"
                autocomplete={"off"}
                value={pkm.judul_pengabdian}
                onChange={handleChange}
                onInput={(e) => setSearchKeyword(e.target.value)} // Menyimpan kata kunci pencarian
              />
              {searchResult.length > 0 && (
                <div className="search-results p-2" style={{ maxHeight: "150px", overflowY: "auto"}}>
                  {searchResult.map((result) => (
                    <button
                      key={result.id_pengabdian}
                      className="d-block w-100 text-left p-2 bg-light border-bottom border-left-0 border-right-0 border-top-0" 
                      onClick={() => selectSearchResult(result)}
                    >
                      {result.judul_pengabdian}
                    </button>
                  ))}
                </div>
              )}
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
          <label htmlFor="date" className="form-label">Tanggal Pengabdian</label>
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
          <label className="form-label">URL PKM</label>
          <input
            type="url"
            name="url"
            placeholder="Masukkan URL PKM"
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
