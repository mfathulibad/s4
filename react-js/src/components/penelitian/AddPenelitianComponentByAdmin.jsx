import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function AddPenelitianComponentByAdmin() {
  let navigate = useNavigate();
  const [showFormBelow, setShowFormBelow] = useState(false);

  const [penelitian, setPenelitian] = useState({
    id_penelitian: "",
    judul_penelitian: "",
    bidang_penelitian: "",
    tgl_penelitian: "",
    url:""
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPenelitian({
      ...penelitian,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // if (!selectedFile) {
    //   alert("Please upload the file !")
    //   return;
    // }
    
    const response = await axios.post(`http://localhost:8082/penelitian/admin/insert`, penelitian);
    let idPenelitian = response.data;

    const formData = new FormData();
    formData.append("file", selectedFile);

    // Gunakan nilai idPenelitian dari state sebagai nama file
    const fileName = idPenelitian + "_" + selectedFile.name;
    formData.append("fileName", fileName);

    axios
      .post(`http://localhost:8082/penelitian/upload-pdf/${idPenelitian}`, formData)
      .then((response) => {
        console.log("File uploaded successfully");
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });

     navigate("/dosen");
  };

  const [searchResult, setSearchResult] = useState([]); // Menyimpan hasil pencarian
  const [searchKeyword, setSearchKeyword] = useState(""); // Menyimpan kata kunci pencarian

  useEffect(() => {
    // Jika searchKeyword berubah, kirim permintaan pencarian ke server
    if (searchKeyword) {
      axios
        .get(`http://localhost:8082/penelitian/search?judul=${searchKeyword}`)
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
    setPenelitian({
      ...penelitian,
      id_penelitian: result.id_penelitian,
      judul_penelitian: result.judul_penelitian,
      bidang_penelitian: result.bidang_penelitian,
      tgl_penelitian: result.tgl_penelitian,
      url : result.url
    });
    setSearchResult([]); // Kosongkan hasil pencarian
  };

  const formStyle = {
    maxWidth: "650px", 
    margin: "0 auto", 
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow mx-auto">
          <h2 className="text-center m-4">Tambah Data Penelitian</h2>
  
          <form onSubmit={onSubmit} className="mt-4">
            <div className="mb-3 row">
              <label htmlFor="judulPenelitian" className="col-md-4 col-form-label">
                Judul Penelitian
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan Judul Penelitian"
                  name="judul_penelitian"
                  value={penelitian.judul_penelitian}
                  autoComplete="off"
                  onChange={onInputChange}
                  onInput={(e) => setSearchKeyword(e.target.value)} // Menyimpan kata kunci pencarian
                />
                {searchResult.length > 0 && (
                  <div className="search-results p-2" style={{ maxHeight: "150px", overflowY: "auto" }}>
                    {searchResult.map((result) => (
                      <button
                        key={result.id_penelitian}
                        className="d-block w-100 text-left p-2 bg-light border-bottom border-left-0 border-right-0 border-top-0"
                        onClick={() => selectSearchResult(result)}
                      >
                        {result.judul_penelitian}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
  
            <div className="mb-3 row">
              <label htmlFor="bidangPenelitian" className="col-md-4 col-form-label">
                Bidang Penelitian
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan Bidang Penelitian"
                  name="bidang_penelitian"
                  value={penelitian.bidang_penelitian}
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="tglPenelitian" className="col-md-4 col-form-label">
                Tanggal Penelitian
              </label>
              <div className="col-md-8">
                <input
                  type="date"
                  className="form-control"
                  placeholder="YYYY-MM-DD"
                  name="tgl_penelitian"
                  value={penelitian.tgl_penelitian}
                  onChange={onInputChange}
                />
              </div>
            </div>
  
            <div className='mb-3 row'>
              <label htmlFor='URL' className='col-md-4 col-form-label'>
                URL Penelitian
              </label>
              <div className='col-md-8'>
                <input
                  type='url'
                  className='form-control'
                  placeholder='Masukkan URL Penelitian'
                  name='url'
                  value={penelitian.url}
                  onChange={onInputChange}
                />
              </div>
            </div>
  
            <div className='mb-3 row'>
              {showFormBelow && (
                <>
                  <div className='col-md-4'></div> {/* Empty column to maintain consistent spacing */}
                  <div className='col-md-8'>
                    <label htmlFor='pdfPenelitian' className='form-label'>
                      PDF Penelitian
                    </label>
                    <input
                      type='file'
                      className='form-control'
                      accept='.pdf'
                      name='file_pdf'
                      onChange={handleFileChange}
                    />
                  </div>
                </>
              )}
            </div>
  
            <button
              type='button'
              className={`btn ${showFormBelow ? 'btn-danger' : 'btn-primary'}`}
              onClick={() => setShowFormBelow(!showFormBelow)}
            >
              {showFormBelow ? 'Urungkan' : 'Tambah File PDF'}
            </button>
  
            <div className="d-flex justify-content-end"> 
              <button type="submit" className="btn btn-outline-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
