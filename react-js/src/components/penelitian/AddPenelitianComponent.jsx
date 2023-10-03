import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function AddPenelitianComponent() {
  let navigate = useNavigate();

  const [penelitian, setPenelitian] = useState({
    id_penelitian: "",
    judul_penelitian: "",
    bidang_penelitian: "",
    tgl_penelitian: "",
    url:""
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const userAuth = Cookies.get("userAuth");

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
    
    const response = await axios.post(`http://localhost:8082/penelitian/insert/${userAuth}`, penelitian);
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
              />
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

            <button type="submit" className="btn btn-outline-primary">Add</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
