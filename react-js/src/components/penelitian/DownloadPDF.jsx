// import React, { useState } from "react";
// import axios from "axios";

// function DownloadFile() {
//   const [fileData, setFileData] = useState(null);
//   const [idPenelitian, setIdPenelitian] = useState(""); // State untuk ID penelitian

//   const handleDownload = () => {
//     if (!idPenelitian) {
//       console.error("No ID Penelitian provided");
//       return;
//     }

//     axios
//       .get(`http://localhost:8082/penelitian/download-pdf/${idPenelitian}`, {
//         responseType: "blob", // Mengatur tipe respons sebagai blob
//       })
//       .then((response) => {
//         const blob = new Blob([response.data], { type: "application/pdf" });
//         const url = window.URL.createObjectURL(blob);
//         setFileData(url);
//       })
//       .catch((error) => {
//         console.error("Error downloading file: ", error);
//       });
//   };

//   const handleIdPenelitianChange = (event) => {
//     setIdPenelitian(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Download File</h2>
//       <input
//         type="text"
//         placeholder="ID Penelitian"
//         value={idPenelitian}
//         onChange={handleIdPenelitianChange}
//       />
//       <button onClick={handleDownload}>Download</button>
//       {fileData && (
//         <div>
//           <a href={fileData} target="_blank" rel="noopener noreferrer">
//             View File
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DownloadFile;
