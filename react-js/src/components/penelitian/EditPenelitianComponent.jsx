import axios from 'axios';
import { useEffect, useState } from 'react'

function EditPenelitianComponent({id}) {
  const [penelitian, setPenelitian] = useState({});
  const [loading, setLoading] = useState(true);
  const [showFormBelow, setShowFormBelow] = useState(false);
    
    const [formData, setFormData] = useState({
        id_penelitian:``,
        judul_penelitian:``,
        bidang_penelitian:``,
        tgl_penelitian:``,
        url:``
    });

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(`http://localhost:8082/penelitian/${id}`);
            setPenelitian(response.data);
            setFormData(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        }
    
        fetchData();
    }, [id]);
    
    
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,[name]: value,
        });
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8082/penelitian/update`, formData);
            console.log(response.data);
            let idPenelitian = formData.id_penelitian;

            const formData2 = new FormData();
            formData2.append("file", selectedFile);

            // Gunakan nilai idPenelitian dari state sebagai nama file
            const fileName = idPenelitian + "_" + selectedFile.name;
            formData2.append("fileName", fileName);

            axios
              .post(`http://localhost:8082/penelitian/upload-pdf/${idPenelitian}`, formData2)
              .then((response) => {
                console.log("File uploaded successfully");
              })
              .catch((error) => {
                console.error("Error uploading file: ", error);
              });
            alert('Data penelitian berhasil diperbarui');
          } catch (error) {
            console.error('Error updating data:', error);
          }
    }

  return (
    <div className="container">
      <div>
        <h1 className="text-center p-3 m-3">Edit Penelitian</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Judul Penelitian</label>
            <input
              type="text"
              className="form-control"
              name='judul_penelitian' 
              value={formData.judul_penelitian}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Bidang Penelitian</label>
            <input
              type="text"
              className="form-control"
              name='bidang_penelitian' 
              value={formData.bidang_penelitian}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Tanggal Penelitian</label>
            <input
              type='date' 
              className='form-control' 
              placeholder="YYYY-MM-DD" 
              name='tgl_penelitian' 
              value={formData.tgl_penelitian}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label>URL Penelitian</label>
            <input
              type="text"
              className="form-control"
              name='url' 
              value={formData.url}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
              {showFormBelow && (
                <div className="mb-3">
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
              )}
              <button
                type="button"
                className={`btn ${showFormBelow ? 'btn-danger' : 'btn-primary'}`}
                onClick={() => setShowFormBelow(!showFormBelow)}
              >
                {showFormBelow ? "Urungkan" : "Tambah File PDF"}
              </button>
            </div>

          <div className="d-flex justify-content-end"> 
            <button type='submit' className='btn btn-primary'>Simpah Perubahan</button>
          </div>

        </form>
      </div>
    </div>
  );
}


export default EditPenelitianComponent;
