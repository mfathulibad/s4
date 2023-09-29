import React, { useState } from "react";
import axios from "axios";

function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [idPenelitian, setIdPenelitian] = useState(""); // State untuk ID penelitian

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleIdPenelitianChange = (event) => {
    setIdPenelitian(event.target.value);
  };

  const handleUpload = () => {
    // Pastikan file telah dipilih sebelum mengunggah
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

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
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="ID Penelitian"
        value={idPenelitian}
        onChange={handleIdPenelitianChange}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadFile;
