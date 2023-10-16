import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddPenelitianComponentByAdmin() {
  let navigate = useNavigate();

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

    if (!selectedFile) {
      alert("Please upload the file !")
      return;
    }
    
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

     navigate("/");
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
  
  return (
    <div className="container">
      <div className="row">
        <div className="col offset border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Tambah Data Penelitian</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="judulPenelitian" className="form-label">
                Judul Penelitian
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Masukkan Judul Penelitian"
                name="judul_penelitian"
                value={penelitian.judul_penelitian}
                onChange={onInputChange}
                onInput={(e) => setSearchKeyword(e.target.value)} // Menyimpan kata kunci pencarian
              />
              {searchResult.length > 0 && (
                <div className="search-results p-2" style={{ maxHeight: "150px", overflowY: "auto"}}>
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
            
            <div className="mb-3">
              <label htmlFor="bidangPenelitian" className="form-label">
                Bidang Penelitian
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Masukkan Bidang Penelitian"
                name="bidang_penelitian"
                value={penelitian.bidang_penelitian}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tglPenelitian" className="form-label">
                Tanggal Penelitian
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="YYYY-MM-DD"
                name="tgl_penelitian"
                value={penelitian.tgl_penelitian}
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
                <label htmlFor='URL' className='form-label'>
                  URL Penelitian
                </label>
                <input 
                  type='url'
                  className='form-control' 
                  placeholder='Masukkan URL Penelitian' 
                  name='url' 
                  value={penelitian.url}
                  onChange={onInputChange}
                />
            </div>

            <div className='mb-3'>
              <label htmlFor="pdfPenelitian" className="form-label">
                PDF Penelitian
              </label>
              <input 
                type="file"
                className="form-control"
                accept=".pdf"
                name="file_pdf"
                onChange={handleFileChange} 
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <Link className="btn btn-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
